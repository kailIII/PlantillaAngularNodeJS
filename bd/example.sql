--
-- Host: localhost    Database: example
-- ------------------------------------------------------
-- 

--
-- Table structure for table Users
--

CREATE TABLE  "Users" (
   "id" serial PRIMARY KEY,
   "name"   varchar(60) NOT NULL, 
   "active" boolean DEFAULT NULL, 
);