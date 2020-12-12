CREATE DATABASE "F1Wiki";

CREATE TABLE "Countries"
(
    "ID"   SERIAL PRIMARY KEY,
    "Name" VARCHAR(50),
    "Code" VARCHAR(10)
);

CREATE TABLE "Locations"
(
    "ID"          SERIAL PRIMARY KEY,
    "City"        VARCHAR(50),
    "Name"        VARCHAR(500),
    "OpeningDate" TIMESTAMP,
    "CountryID"   INT,
    CONSTRAINT "FKCountryID"
        FOREIGN KEY ("CountryID")
            REFERENCES "Countries" ("ID") ON DELETE CASCADE
);

CREATE TABLE "Teams"
(
    "ID"                SERIAL PRIMARY KEY,
    "Name"              VARCHAR(100),
    "TotalSeasonPoints" INT,
    "BaseLocationID"    INT,
    CONSTRAINT "FKBaseLocationID"
        FOREIGN KEY ("BaseLocationID")
            REFERENCES "Locations" ("ID") ON DELETE SET NULL
);

CREATE TABLE "Drivers"
(
    "ID"                SERIAL PRIMARY KEY,
    "Name"              VARCHAR(50),
    "TotalSeasonPoints" INT,
    "Birthday"          DATE,
    "Nationality"       INT,
    CONSTRAINT "FKNationality"
        FOREIGN KEY ("Nationality")
            REFERENCES "Countries" ("ID") ON DELETE SET NULL,
    "TeamID"            INT,
    CONSTRAINT "FKTeamID"
        FOREIGN KEY ("TeamID")
            REFERENCES "Teams" ("ID") ON DELETE SET NULL
);

CREATE TABLE "Achievements"
(
    "ID"            SERIAL PRIMARY KEY,
    "Name"          VARCHAR(100),
    "Description"   TEXT,
    "ReceivingDate" TIMESTAMP
);

CREATE TABLE "TeamsAchievements"
(
    "ID"            SERIAL PRIMARY KEY,
    "TeamID"        INT,
    CONSTRAINT "FKTeamID"
        FOREIGN KEY ("TeamID")
            REFERENCES "Teams" ("ID") ON DELETE CASCADE,
    "AchievementID" INT,
    CONSTRAINT "FKAchievementID"
        FOREIGN KEY ("AchievementID")
            REFERENCES "Achievements" ("ID") ON DELETE CASCADE
);

CREATE TABLE "DriverAchievements"
(
    "ID"            SERIAL PRIMARY KEY,
    "DriverID"      INT,
    CONSTRAINT "FKDriverID"
        FOREIGN KEY ("DriverID")
            REFERENCES "Drivers" ("ID") ON DELETE CASCADE,
    "AchievementID" INT,
    CONSTRAINT "FKAchievementID"
        FOREIGN KEY ("AchievementID")
            REFERENCES "Achievements" ("ID") ON DELETE CASCADE
);

CREATE TABLE "Titles"
(
    "ID"            SERIAL PRIMARY KEY,
    "Name"          VARCHAR(100),
    "Description"   TEXT,
    "ReceivingDate" TIMESTAMP,
    "DriverID"      INT,
    CONSTRAINT "FKDriverID"
        FOREIGN KEY ("DriverID")
            REFERENCES "Drivers" ("ID") ON DELETE CASCADE
);

CREATE TABLE "Races"
(
    "ID"                SERIAL PRIMARY KEY,
    "Name"              VARCHAR(100),
    "Date"              TIMESTAMP,
    "Laps"              INT,
    "DurationInMinutes" INT,
    "LocationID"        INT,
    CONSTRAINT "FKLocationID"
        FOREIGN KEY ("LocationID")
            REFERENCES "Locations" ("ID") ON DELETE SET NULL
);

CREATE TABLE "RacesStandings"
(
    "ID"                   SERIAL PRIMARY KEY,
    "PointsReceived"       INT,
    "StartingPlace"        INT,
    "FinishingPlace"       INT,
    "TotalTimeInSeconds"   REAL,
    "BestLapTimeInSeconds" REAL,
    "PitstopsCount"        INT,
    "DriverID"             INT,
    CONSTRAINT "FKDriverID"
        FOREIGN KEY ("DriverID")
            REFERENCES "Drivers" ("ID") ON DELETE CASCADE,
    "RaceID"               INT,
    CONSTRAINT "FKRaceID"
        FOREIGN KEY ("RaceID")
            REFERENCES "Races" ("ID") ON DELETE CASCADE
);



