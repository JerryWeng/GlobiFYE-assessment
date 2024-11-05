CREATE TABLE users {
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
}

INSERT INTO users (name, email) VALUES ('Sample User', 'Sample.User@example.com');

SELECT * FROM users;