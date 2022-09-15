/*--Users table 
CREATE DATABASE database_users;


USE database_users;

CREATE TABLE users(
    id INT(11) NOT NULL,
    name VARCHAR(60) NOT NULL,
    middlename VARCHAR(60) NOT NULL, 
    business VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(100) NOT NULL,
    password2 VARCHAR(100) NOT NULL
);

ALTER TABLE users 
    ADD PRIMARY KEY (id);

ALTER TABLE users 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

--Links Table 

CREATE TABLE links (
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(225) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links 
    ADD PRIMARY KEY (id);

ALTER TABLE links 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;*/

CREATE TABLE users(
    id INT(11) NOT NULL,
    name VARCHAR(60) NOT NULL,
    middlename VARCHAR(60) NOT NULL, 
    business VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(100) NOT NULL,
    password2 VARCHAR(100) NOT NULL
);

ALTER TABLE users 
    ADD PRIMARY KEY (id);

ALTER TABLE users 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE links (
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(225) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links 
    ADD PRIMARY KEY (id);

ALTER TABLE links 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;