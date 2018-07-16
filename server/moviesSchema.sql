CREATE DATABASE IF NOT EXISTS badmovies;

USE badmovies;

CREATE TABLE favorites (
  movie_id INT,
  title VARCHAR(255),
  desc VARCHAR(255),
  image VARCHAR(255),
  release VARCHAR(255),
  rating INT
);
