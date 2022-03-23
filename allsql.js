const showdatabase = "SHOW DATABASES;";
const showtables = "SHOW TABLES;";
const createtable_locationdata =
  "CREATE TABLE locationdata (userid VARCHAR(255) PRIMARY KEY, lat VARCHAR(255), long VARCHAR(255), updatetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";
const createtable_walletid =
  "CREATE TABLE locationdata (userid VARCHAR(255) PRIMARY KEY, lat VARCHAR(255), long VARCHAR(255), updatetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";

const showcolumnsofpending = "SHOW COLUMNS FROM locationdata";
const showpendinglist = "SELECT * from locationdata";
const createdatabase = "CREATE DATABASE arworld";
const addcolumntolocationdata =
  "ALTER TABLE locationdata ADD COLUMN updatetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP";
const addtolocationdata =
  "INSERT INTO locationdata (user, target, actiontype) VALUES (?)";

const deletelocationdata = "DELETE FROM locationdat WHERE (userid) IN (?)";
const getlast10action = "SELECT * FROM locationdat ORDER BY id DESC LIMIT 10";
const getlastaction = "SELECT * FROM locationdat ORDER BY id DESC LIMIT 1";

const updatelocationdata = function (userid, lat, long) {
  return `INSERT INTO table (userid, lat, long) VALUES('${userid}', '${lat}', '${long}') ON DUPLICATE KEY UPDATE lat='${lat}', long='${long}'`;
};
