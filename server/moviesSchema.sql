CREATE DATABASE IF NOT EXISTS badmovies;

USE badmovies;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(255)
);

CREATE TABLE favorites (
  user_id INT,
  movie_id INT
);