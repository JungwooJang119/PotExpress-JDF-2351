DROP DATABASE IF EXISTS potexpress;
CREATE DATABASE IF NOT EXISTS potexpress;
USE potexpress;

CREATE TABLE buyer (
	fname varchar(255),
    address varchar(255),
    state varchar(255),
    email varchar(255),
    strain varchar(255),
    primary key (email)
) engine = innodb;

CREATE TABLE seller (
	fname varchar(255),
    address varchar(255),
    state varchar(255),
    email varchar(255),
    age varchar(255),
    primary key (email)
) engine = innodb;

insert into Seller values ("Billy Bob", "225 North Ave, Atlanta", "GA", "billybobjoe@gmail.com", 23);


