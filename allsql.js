const showdatabase = "SHOW DATABASES;";
const showtables = "SHOW TABLES;";
const createtable =
  "CREATE TABLE actionpending (id INT AUTO_INCREMENT PRIMARY KEY, user VARCHAR(255), target VARCHAR(255), actiontype VARCHAR(255))";
const showcolumnsofpending = "SHOW COLUMNS FROM actionpending";
const showpendinglist = "SELECT * from actionpending";
const createdatabase = "CREATE DATABASE communitybuilder";
const addcolumntopending =
  "ALTER TABLE actionpending ADD COLUMN createdtime TIMESTAMP DEFAULT CURRENT_TIMESTAMP";
const addtopending =
  "INSERT INTO actionpending (user, target, actiontype) VALUES (?)";
const deletepending = "DELETE FROM actionpending WHERE (id) IN (?)";
const getlast10action = "SELECT * FROM actionpending ORDER BY id DESC LIMIT 10";
const getlastaction = "SELECT * FROM actionpending ORDER BY id DESC LIMIT 1";
