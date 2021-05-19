create database bookmyshow
with
OWNER = postgres
ENCODING = 'UTF8'
TABLESPACE = pg_default
CONNECTION LIMIT = -1;

CREATE TABLE user (
  user_id serial PRIMARY KEY,
  user_name varchar(255) NOT NULL,
  password varchar(250) NOT NULL
  person_id int(11) NOT NULL,
  enabled tinyint(1) NOT NULL DEFAULT 1,
  created_at timestamp NOT NULL DEFAULT current_timestamp(),
  updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
);

INSERT INTO user VALUES(default, 'admin', md5('prueba'), 1, 1, default, default);

CREATE TABLE person (
  person_id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  surename varchar(50) NOT NULL,
  complete varchar(150) NOT NULL,
  birthdate varchar(255) NOT NULL,
  genero enum('Masculino','Femenino','Otro') NOT NULL DEFAULT 'Masculino',
  enabled tinyint(1) NOT NULL DEFAULT 1,
  created_at timestamp NOT NULL DEFAULT current_timestamp(),
  updated_at timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()  
);

INSERT INTO person VALUES(default, 'leonel', 'de leon', 'diaz', 'leonel de leon diaz', '1989-04-28', 1, 1, default, default);

CREATE TABLE movies(
    id serial PRIMARY KEY,
    movie_name varchar(200) NOT NULL,
    movie_city varchar(200) NOT NULL,
    movie_price int NOT NULL    
);

-- city deberia ser otro catalogo :(

INSERT INTO movies(default, 'interestelar', 'CDMX', 150),(default, 'cruzadas', 'EDO MEX', 100), (default, 'mr robot', 'CDMX', 250), (default, 'silicon valley', 'EDO MEX', 180);

CREATE TABLE ticket(
    id serial PRIMARY KEY,
    movie_id int,
    movie_price int,
    user_id int
)

