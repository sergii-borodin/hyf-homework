-- Create a new database containing the following tables:
CREATE DATABASE school_db;
DEFAULT CHARACTER SET = "utf8mb4";
USE school_db;

-- Class: with the columns: id, name, begins (date), ends (date)
CREATE Table Class (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL UNIQUE,
begins DATETIME NOT NULL,
ends DATETIME
);
DESCRIBE Class;
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE Table Student (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL UNIQUE,
email VARCHAR(255),
phone VARCHAR(255),
class_id INT UNSIGNED NOT NULL,
FOREIGN KEY (class_id) REFERENCES Class(id)
);
DESCRIBE Student;

-- Create an index on the name column of the student table.
CREATE INDEX index_name
ON Student(`name`);

-- Add a new column to the class table named status which can only have the following values:
--  not-started, ongoing, finished (hint: enumerations).
ALTER TABLE Class ADD `status` ENUM("not-started","ongoing", "finished");
DESCRIBE Class;