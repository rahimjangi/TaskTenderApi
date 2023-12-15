-- Create the 'users' table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'userInfo' table
CREATE TABLE userInfo (
    user_id INTEGER PRIMARY KEY REFERENCES users(id),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone_number VARCHAR(50),
    address TEXT,
    email_verified BOOLEAN DEFAULT FALSE
);

-- Create the 'userRoles' table
CREATE TABLE userRoles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);

-- Create the 'userLevels' table
CREATE TABLE userLevels (
    id SERIAL PRIMARY KEY,
    level_name VARCHAR(50) UNIQUE NOT NULL
);

-- Create the 'userRolesAssignment' table for many-to-many relationship
CREATE TABLE userRolesAssignment (
    user_id INTEGER REFERENCES users(id),
    role_id INTEGER REFERENCES userRoles(id),
    PRIMARY KEY (user_id, role_id)
);

-- Create the 'userLevelsAssignment' table for many-to-many relationship
CREATE TABLE userLevelsAssignment (
    user_id INTEGER REFERENCES users(id),
    level_id INTEGER REFERENCES userLevels(id),
    PRIMARY KEY (user_id, level_id)
);
