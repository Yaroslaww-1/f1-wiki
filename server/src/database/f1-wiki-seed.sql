INSERT INTO "Countries"("Name", "Code") VALUES
    ('Great Britain', 'GB'),
    ('Monaco', 'Mo'),
    ('Switzerland', 'Sw'),
    ('Belgium', 'Bg'),
    ('France', 'Fr'),
    ('Italy', 'It'),
    ('Germany', 'Ge'),
    ('Australia', 'Au'),
    ('Portugal', 'Pt'),
    ('Mexico', 'Mx'),
    ('Brazil', 'Br'),
    ('Bahrain', 'Bh'),
    ('Azerbaijan', 'Az'),
    ('Spain', 'Sp'),
    ('Canada', 'Ca'),
    ('United States', 'USA'),
    ('Finland', 'Fn'),
    ('Norway', 'Nv'),
    ('Russia', 'Ru'),
    ('Denmark', 'De'),
    ('Turkey', 'Tk');

INSERT INTO "Locations"("City", "Name", "OpeningDate", "CountryID") VALUES
    ('Adelaide', 'Adelaide Street Circuit', '01.01.1975', 8),
    ('Aintree', 'Aintree Motor Racing Circuit', '01.01.1994', 1),
    ('Melbourne', 'Albert Park Circuit', '01.01.1995', 8),
    ('Imola', 'Autodromo Internazionale Enzo e Dino Ferrari', '01.01.1980', 6),
    ('Mexico City', 'Autódromo Hermanos Rodríguez', '01.01.1995', 10),
    ('Rio de Janeiro', 'Autódromo Internacional Nelson Piquet', '01.01.1995', 11),
    ('Le Mans', 'Bugatti Circuit', '01.01.1995', 5),
    ('Sakhir', 'Bahrain International Circuit', '01.01.2004', 12),
    ('Baku', 'Baku City Circuit', '01.01.2002', 13),
    ('Montmeló', 'Circuit de Barcelona-Catalunya', '01.01.1991', 14),
    ('Stavelot', 'Circuit de Spa-Francorchamps', '01.01.1950', 4),
    ('Montreal', 'Circuit Gilles Villeneuve', '01.01.1978', 15),
    ('Brackley', 'Mercedes Base', '01.01.2000', 1),
    ('Milton Keynes', 'Reb Bull Racing Base', '01.01.1997', 1),
    ('Silverstone', 'Racing Point Base', '01.01.2000', 1),
    ('Woking', 'McLaren Base', '01.01.1966', 1),
    ('Enstone', 'Renault Base', '01.01.1986', 1),
    ('Maranello', 'Ferrari Base', '01.01.2000', 6),
    ('Faenza', 'AlphaTauri Base', '01.01.1985', 6),
    ('Hinwil', 'Alpha Romeo Racing Base', '01.01.1993', 3),
    ('Kannapolis', 'F1 Haas Team Base', '01.01.2000', 16),
    ('Grove', 'Williams Base', '01.01.1978', 1),
    ('Bahrain', 'Bahrain Circuit', '01.01.1980', 12),
    ('Istambul', 'Intercity Istanbul Park', '01.01.1980', 21),
    ('Portimão', 'Autódromo Internacional do Algarve', '01.01.1980', 9),
    ('Sochi', 'Sochi Circuit', '01.01.2010', 19),
    ('Monza', 'Autodromo Nazionale Monza', '01.01.1990', 6);


INSERT INTO "Teams"("Name", "TotalSeasonPoints", "BaseLocationID") VALUES
    ('Mercedes', 540, 13),
    ('Red Bull Racing', 282, 14),
    ('Racing Point', 194, 15),
    ('McLaren', 184, 16),
    ('Renault', 172, 17),
    ('Ferrari', 131, 18),
    ('AlphaTauri', 103, 19),
    ('Alfa Romeo Racing', 8, 20),
    ('Haas F1 Team', 3, 21),
    ('Williams', 0, 22);

INSERT INTO "Drivers"("Name", "TotalSeasonPoints", "Birthday", "Nationality", "TeamID") VALUES
    ('Lewis Hamilton', 332, '07/01/1985', 1, 1),
    ('Valtteri Bottas', 205, '28/08/1989', 17, 1),
    ('Max Verstappen', 189, '30/09/1997', 4, 2),
    ('Sergio Perez', 125, '26/01/1990', 10, 3),
    ('Daniel Ricciardo', 112, '01/07/1989', 8, 5),
    ('Charles Leclerc', 98, '16/10/1997', 2, 6),
    ('Carlos Sainz', 97, '01/09/1994', 14, 4),
    ('Alexander Albon', 93, '23/03/1996', 1, 2),
    ('Lando Norris', 87, '13/11/1999', 1, 4),
    ('Lance Stroll', 74, '29/10/1998', 15, 3),
    ('Pierre Gasly', 71, '07/02/1996', 5, 7),
    ('Esteban Ocon', 60, '17/09/1996', 18, 5),
    ('Sebastian Vettel', 33, '03/07/1987', 7, 6),
    ('Daniil Kvyat', 32, '26/04/1994', 19, 7),
    ('Kimi Räikkönen', 10, '17/10/1979', 17, 8),
    ('Antonio Giovinazzi', 4, '14/12/1993', 6, 8),
    ('George Russell', 3, '15/02/1998', 1, 10),
    ('Romain Grosjean', 2, '17/04/1986', 5, 9),
    ('Kevin Magnussen', 1, '05/10/1992', 20, 9),
    ('Nicholas Latifi', 0, '29/06/1995', 15, 10);

INSERT INTO "Titles"("Name", "Description", "ReceivingDate", "DriverID") VALUES
    ('2020 World Champion', '2020 World Champion Description...', '15.11.2020', 1),
    ('2019 World Champion', '2019 World Champion Description...', '03.11.2019', 1),
    ('2018 World Champion', '2018 World Champion Description...', '28.10.2018', 1),
    ('2017 World Champion', '2017 World Champion Description...', '29.10.2017', 1),
    ('2015 World Champion', '2015 World Champion Description...', '25.10.2015', 1),
    ('2014 World Champion', '2014 World Champion Description...', '23.11.2014', 1),
    ('2013 World Champion', '2013 World Champion Description...', '27.10.2013', 13),
    ('2012 World Champion', '2012 World Champion Description...', '25.11.2012', 13),
    ('2011 World Champion', '2011 World Champion Description...', '09.10.2011', 13),
    ('2010 World Champion', '2010 World Champion Description...', '14.11.2010', 13);

INSERT INTO "Achievements"("Name", "Description", "ReceivingDate") VALUES
    ('332 Total Entries', '332 Total Race Entries', '01.01.2019'),
    ('266 Total Entries', '266 Total Race Entries', '12.12.2020'),
    ('258 Total Entries', '258 Total Race Entries', '12.12.2020'),
    ('328 Total Starts', '328 Total Race Starts', '12.12.2020'),
    ('265 Total Starts', '265 Total Race Starts', '12.12.2020'),
    ('Youngest driver to start a race', 'Youngest driver to start a race', '15.04.2015'),
    ('265 consecutive race starts', '265 consecutive race starts', '12.12.2020'),
    ('187 consecutive race starts', '187 consecutive race starts', '12.12.2020'),
    ('1007 Total races started', '1007 Total races started', '12.12.2020'),
    ('663 consecutive races started', '663 consecutive races started', '12.12.2020');

INSERT INTO "DriverAchievements"("DriverID", "AchievementID") VALUES
    (15, 1),
    (1, 2),
    (13, 3),
    (15, 4),
    (1, 5),
    (3, 6),
    (1, 7),
    (5, 8);

INSERT INTO "TeamsAchievements"("TeamID", "AchievementID") VALUES
    (6, 9),
    (6, 10);

INSERT INTO "Races"("Name", "Date", "Laps", "DurationInMinutes", "LocationID") VALUES
    ('FORMULA 1 ROLEX SAKHIR GRAND PRIX 2020', '03.12.2020', 87, 91.15, 8),
    ('FORMULA 1 GULF AIR BAHRAIN GRAND PRIX', '26.11.2020', 57, 180.47, 23),
    ('FORMULA 1 DHL TURKISH GRAND PRIX 2020', '12.11.2020', 58, 102.19, 24),
    ('FORMULA 1 EMIRATES GRAN PREMIO DELL''EMILIA ROMAGNA 2020', '30.10.2020', 63, 88.32, 4),
    ('FORMULA 1 HEINEKEN GRANDE PRÉMIO DE PORTUGAL 2020', '23.10.2020', 66, 89.56, 25),
    ('FORMULA 1 ARAMCO GROSSER PREIS DER EIFEL 2020', '09.10.2020', 60, 85.49, 7),
    ('FORMULA 1 VTB RUSSIAN GRAND PRIX 2020', '25.09.2020', 53, 94.0, 26),
    ('FORMULA 1 GRAN PREMIO HEINEKEN D’ITALIA 2020', '04.09.2020', 53, 107.06, 27),
    ('FORMULA 1 ROLEX BELGIAN GRAND PRIX 2020', '28.08.2020', 44, 84.08, 11),
    ('FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2020', '14.08.2020', 66, 91.45, 10);


INSERT INTO "RacesStandings"(
                             "PointsReceived",
                             "StartingPlace",
                             "FinishingPlace",
                             "TotalTimeInSeconds",
                             "BestLapTimeInSeconds",
                             "PitstopsCount",
                             "DriverID",
                             "RaceID"
) VALUES
    (25, 5, 1, 91.15, 56.78, 1, 4, 1),
    (18, 11, 2, 101.25, 57.35, 2, 12, 1),
    (15, 10, 3, 102.33, 57.38, 2, 10, 1),
    (12, 8, 4, 103.40, 57.11, 2, 7, 1),
    (10, 7, 5, 104.10, 56.9, 2, 5, 1),
    (8, 12, 6, 105.09, 56.9, 2, 8, 1),
    (6, 6, 7, 105.25, 56.85, 2, 14, 1),
    (4, 2, 8, 105.55, 56.55, 2, 2, 1),
    (3, 1, 9, 106.10, 56.45, 4, 17, 1),
    (1, 15, 10, 107.05, 57.30, 2, 9, 1);





