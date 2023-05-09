create table users (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

insert into users (username, email, password) values ('Jan123', 'jan123@meil.pl', '$2a$12$tdhSOfSlPWI.RzNfsF.7ce47qO0Nb/a48sWjZ2aXp5j1W36BhEHaG');