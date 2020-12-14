-- View + SubQuery
CREATE VIEW "DriversWithAchievements" AS
    SELECT * FROM "Drivers"
    WHERE "ID" IN (
        SELECT "DriverID" FROM "DriverAchievements"
    );

SELECT * FROM "DriversWithAchievements";

-- Table function
CREATE FUNCTION "getDriverById"(INT)
RETURNS SETOF "Drivers"
AS $$
    SELECT * FROM "Drivers" WHERE "ID" = $1;
$$
LANGUAGE SQL;

SELECT * FROM "getDriverById"(1);

-- Scalar function
CREATE FUNCTION "getDriverTotalSeasonPointsById"(INT)
RETURNS INT
AS $$
    SELECT "TotalSeasonPoints" FROM "Drivers" WHERE "ID" = $1;
$$
LANGUAGE SQL;

SELECT * FROM "getDriverTotalSeasonPointsById"(1);

-- Saved procedure (table function) + CASE
CREATE OR REPLACE FUNCTION "getDriversSortedBy"(property TEXT)
RETURNS SETOF "Drivers"
AS $$
DECLARE
    capitalized_property TEXT;
BEGIN
    capitalized_property = INITCAP(property);
    CASE
        WHEN capitalized_property = 'Name'
            THEN RETURN QUERY SELECT * FROM "Drivers" ORDER BY "Name";
        WHEN capitalized_property = 'Points'
            THEN RETURN QUERY SELECT * FROM "Drivers" ORDER BY "TotalSeasonPoints";
        ELSE
            RETURN QUERY SELECT * FROM "Drivers";
    END CASE;
END
$$
LANGUAGE plpgsql;

SELECT * FROM "getDriversSortedBy"('Points');

-- Trigger
CREATE OR REPLACE FUNCTION "logDriverSeasonPointsUpdate"()
RETURNS TRIGGER
AS $$
BEGIN
    RAISE NOTICE 'Old points: %', OLD."TotalSeasonPoints";
    RAISE NOTICE 'New points: %', NEW."TotalSeasonPoints";
    RETURN NEW;
END
$$
LANGUAGE plpgsql;

CREATE TRIGGER "logDriverSeasonPointsUpdateTrigger"
AFTER UPDATE ON "Drivers"
FOR EACH ROW
WHEN (OLD.* IS DISTINCT FROM NEW.*)
EXECUTE PROCEDURE "logDriverSeasonPointsUpdate"();

-- Default value
ALTER TABLE "Races"
ALTER COLUMN "Date" SET DEFAULT NOW();

-- Union
CREATE OR REPLACE FUNCTION "compareTwoDrivers"(driver1_id INT, driver2_id INT)
RETURNS SETOF "Drivers"
AS $$
BEGIN
    RETURN QUERY
        SELECT * FROM "Drivers"
        WHERE "ID" = driver1_id
        UNION
        SELECT * FROM "Drivers"
        WHERE "ID" = driver2_id;
END
$$
LANGUAGE plpgsql;

SELECT * FROM "compareTwoDrivers"(1, 2);