CREATE TABLE Temperature (
  timestamp INT NOT NULL,
  value FLOAT NOT NULL
);
CREATE TABLE Sound (
  timestamp INT NOT NULL,
  path VARCHAR(255) NOT NULL
);
CREATE TABLE Humidity (
  timestamp INT NOT NULL,
  value FLOAT NOT NULL
);
CREATE TABLE Light (
  timestamp INT NOT NULL,
  value_ir FLOAT NOT NULL,
  value_v FLOAT NOT NULL
);
CREATE TABLE Vocalization (
  timestamp INT NOT NULL,
  count INTEGER NOT NULL
);
