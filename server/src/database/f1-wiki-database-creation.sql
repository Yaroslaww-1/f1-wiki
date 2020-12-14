CREATE DATABASE "F1Wiki";

CREATE TABLE "Countries"
(
    "ID"   SERIAL PRIMARY KEY,
    "Name" VARCHAR(50) NOT NULL,
    "Code" VARCHAR(10) NOT NULL
);

CREATE TABLE "Locations"
(
    "ID"          SERIAL PRIMARY KEY,
    "City"        VARCHAR(50) NOT NULL,
    "Name"        VARCHAR(500) NOT NULL,
    "OpeningDate" TIMESTAMP NOT NULL,
    "CountryID"   INT NOT NULL,
    CONSTRAINT "FKCountryID"
        FOREIGN KEY ("CountryID")
            REFERENCES "Countries" ("ID") ON DELETE CASCADE
);

CREATE TABLE "Teams"
(
    "ID"                SERIAL PRIMARY KEY NOT NULL,
    "Name"              VARCHAR(100) NOT NULL,
    "TotalSeasonPoints" INT NOT NULL,
    "BaseLocationID"    INT NOT NULL,
    CONSTRAINT "FKBaseLocationID"
        FOREIGN KEY ("BaseLocationID")
            REFERENCES "Locations" ("ID") ON DELETE SET NULL
);

CREATE TABLE "Drivers"
(
    "ID"                SERIAL PRIMARY KEY,
    "Name"              VARCHAR(50) NOT NULL,
    "TotalSeasonPoints" INT NOT NULL,
    "Birthday"          DATE NOT NULL,
    "Nationality"       INT NOT NULL,
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
    "Name"          VARCHAR(100) NOT NULL,
    "Description"   TEXT NOT NULL,
    "ReceivingDate" TIMESTAMP NOT NULL
);

CREATE TABLE "TeamsAchievements"
(
    "ID"            SERIAL PRIMARY KEY,
    "TeamID"        INT NOT NULL,
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
    "DriverID"      INT NOT NULL,
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
    "Name"          VARCHAR(100) NOT NULL,
    "Description"   TEXT NOT NULL,
    "ReceivingDate" TIMESTAMP NOT NULL,
    "DriverID"      INT NOT NULL,
    CONSTRAINT "FKDriverID"
        FOREIGN KEY ("DriverID")
            REFERENCES "Drivers" ("ID") ON DELETE CASCADE
);

CREATE TABLE "Races"
(
    "ID"                SERIAL PRIMARY KEY,
    "Name"              VARCHAR(100) NOT NULL,
    "Date"              TIMESTAMP NOT NULL,
    "Laps"              INT NOT NULL,
    "DurationInMinutes" INT NOT NULL,
    "LocationID"        INT NOT NULL,
    CONSTRAINT "FKLocationID"
        FOREIGN KEY ("LocationID")
            REFERENCES "Locations" ("ID") ON DELETE SET NULL
);

CREATE TABLE "RacesStandings"
(
    "ID"                   SERIAL PRIMARY KEY,
    "PointsReceived"       INT NOT NULL,
    "StartingPlace"        INT NOT NULL,
    "FinishingPlace"       INT NOT NULL,
    "TotalTimeInSeconds"   REAL NOT NULL,
    "BestLapTimeInSeconds" REAL NOT NULL,
    "PitstopsCount"        INT NOT NULL,
    "DriverID"             INT NOT NULL,
    CONSTRAINT "FKDriverID"
        FOREIGN KEY ("DriverID")
            REFERENCES "Drivers" ("ID") ON DELETE CASCADE,
    "RaceID"               INT,
    CONSTRAINT "FKRaceID"
        FOREIGN KEY ("RaceID")
            REFERENCES "Races" ("ID") ON DELETE CASCADE
);
