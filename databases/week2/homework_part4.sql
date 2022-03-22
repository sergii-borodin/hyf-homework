-- Part 4: Creating a database
-- Using an entity relationship diagram, design the data model for an application of your choice. This can be anything, previous students have used a small business (with staff, offices, and job titles), a library (with books, genres, racks, members, and a borrowing log), or a farm (with animals, barns, and farmers).

-- Your application must include at least one many-to-many relationship and any supporting tables (linking tables) that are needed. The entity relationship diagram must describe what tables you will need, the columns in these tables, which column is the primary key, and the relationships between tables.

-- Next, using the entity relationship diagram as a starting point, write all the necessary CREATE TABLE statements to create all tables and relationships (foreign key constraints) for this data model.

-- Submit an image or PDF of your entity relationship diagram, and a .sql file with the CREATE TABLE statements.
CREATE DATABASE customer_service;
DEFAULT CHARACTER SET = "utf8mb4";
USE customer_service;
-- Create table Customer: with columns: id, name, phone, email, adress
CREATE Table `Customer`(
    `id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255),
    `email` VARCHAR(255)
);

ALTER table `Customer`
MODIFY COLUMN INT UNSIGNED NOT NULL FOREIGN KEY (`address_id`) REFERENCES `Address`(`id`);

ALTER TABLE `Customer` 
  ADD CONSTRAINT id_customer_address
  FOREIGN KEY (`address_id`) 
  REFERENCES `Address`(`id`);

CREATE Table `Status`(
    `id` INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` ENUM("created", "dispatched", "delivered") DEFAULT "created"
);

CREATE Table `Order`(
    `id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `customer_id` INT UNSIGNED NOT NULL,
    `status_id` INT UNSIGNED NOT NULL,
    CONSTRAINT `fk_customer` FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `Status`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE Table `Item`(
    `id` INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL, 
    `price` DECIMAL(10,2)
); 

CREATE Table `Order_item`(
    `id` INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `order_id` INT UNSIGNED NOT NULL,
    `item_id` INT UNSIGNED NOT NULL,
    CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_item_id`FOREIGN KEY (`item_id`) REFERENCES `Item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    );

CREATE Table `Address`(
    `id` INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `city` VARCHAR(255) NOT NULL,
    `street` VARCHAR(255) NOT NULL,
    `postal_code` VARCHAR(255) NOT NULL
);

CREATE Table `Account_type`(
    `id` INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` ENUM("Trial", "Standart", "Premium")
);

CREATE Table `Account`(
    `id` INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `created` DATETIME,
    `customer_id` INT UNSIGNED NOT NULL,
    FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`id`),
    `account_type_id` INT UNSIGNED NOT NULL,
    CONSTRAINT `fk_account_type_id` FOREIGN KEY (`account_type_id`) REFERENCES `Account`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

);
