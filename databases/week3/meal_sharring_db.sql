-- Create from the diagramm meal_sharing database with 3 tables: meal, resirvation and review
CREATE DATABASE meal_sharing_db DEFAULT CHARACTER SET = 'utf8mb4';

USE meal_sharing_db;
CREATE Table `Meal`(
    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT DEFAULT NULL,
    `location` VARCHAR(255) NULL, 
    `when` DATETIME NOT NULL,
    `max_reservations` INT(10) UNSIGNED NOT NULL, 
    `price` DECIMAL(10, 2),
    `created_date` DATE NOT NULL
);

CREATE Table `Reservation`(
    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NULL,
    `contact_email` VARCHAR(255) NULL, 
    `meal_id` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_meal_reservation` FOREIGN KEY(`meal_id`) REFERENCES `Meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `Review` (
  `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT DEFAULT NULL, 
  `created_date` DATE NOT NULL,
  `stars` INT(10) UNSIGNED NOT NULL,
  `meal_id` INT(10) UNSIGNED NOT NULL,
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `Meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Now add a couple of different meals, reservations and reviews with different attributes.

-- Insert data into meal table
INSERT INTO `Meal`(
  `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`
  )
VALUES
(
  "One-Pan Pasta", "It's one of our most popular recipes and for good reason. This is our original one-pot pasta recipe, inspired by a dish one of our food editors ate in Puglia, Italy.", 
    "Århu Vardevej 7", "2022-02-26 12:00:00", 
    1, 150.00 , "2022-02-21"
), (
  "Easy Spaghetti and Meatballs", "Make spaghetti and meatballs in just 30-minutes with this recipe. The meatballs are made from a combination of ground beef chuck, breadcrumbs, chopped fresh parsley, grated Parmesan, and garlic, then sautéed until golden brown.", 
    "Ølgod Vardevej 21", "2022-02-26 17:00:00", 
    3, 110.00, "2021-02-21"
), (
  "Soy-Glazed Salmon", "A sweet-savory glaze made from light brown sugar, olive oil, soy sauce, and fresh lemon juice pairs so well with salmon. The fillets only need 15 minutes to bake in the oven.", 
    "Horsens Vardevej 121", "2022-02-26 18:00:00", 
    5, 130.00 , "2021-02-21"
), (
  "Spaghetti Carbonara", "This quick take on the classic pasta comes together in 30 minutes and requires just five ingredients: spaghetti, bacon, eggs, Parmesan cheese, and half-and-half. It's an all-around winner.", 
    "Herning Vardevej 1", "2022-02-26 18:12:00", 
    4, 100.00 , "2021-02-21"
);

-- Insert data into Reservation table
INSERT INTO `Reservation`(
  `number_of_guests`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`, `meal_id`
)
VALUES 
(
  2, "2022-02-26", "53331265", "Sergii", "sergii@mail.com", 4
),(
  3, "2022-02-26", "53331266", "Alfred", "alfred@mail.com", 1
),(
  5, "2022-02-26", "53331267", "Daniel", "Daniel@mail.com", 2
),(
  3, "2022-02-26", "53331268", "Anna", "anna@mail.com", 3
),(
  3, "2022-02-26", "53331269", "Sascha", "sascha@mail.com", 2
),(
  5, "2022-02-26", "53331260", "Leo", "leo@mail.com", 4
);

-- Insert data in Review table
INSERT INTO `Review`(
  `title`, `description`, `created_date`, `stars`, `meal_id`
  )
VALUES
(
"Good", "Food was good. The staff was great. Very welcoming and friendly.", "2022-03-26", 5, 1
), (
"Excellent", " Always have a great, smooth experience here. The staff are friendly, respectful, caring and courteous of your time.", "2022-03-25", 5, 3
), (
"Bad", "Bad atmosphere and a food was overcooked.", "2022-03-24", 3, 2
), (
"Very good", "Best food ever, but expensive", "2022-03-21", 4, 4
);

-- Additional queries

-- Functionality
-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM `Meal`
WHERE `price` < 120;

-- Get meals that still has available reservations
SELECT *
FROM `Meal`
WHERE `max_reservations` > 0;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
from `Meal`
WHERE `title` LIKE "%pasta%";

-- Get meals that has been created between two dates
SELECT *
FROM `Meal`
WHERE `created_date` BETWEEN "2022-01-01" AND "2022-03-26";

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM `Meal`
LIMIT 2;

-- Get the meals that have good reviews
SELECT *
FROM `Meal`
JOIN `Review` ON `Meal`.`id` = `Review`.`meal_id`
WHERE `stars` > 4;

-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM `Meal`
JOIN `Reservation` ON `Meal`.`id` = `Reservation`.`meal_id`
WHERE `Meal`.`id` = 1
ORDER BY `Reservation`.`created_date` ASC;

-- Sort all meals by average number of stars in the reviews
SELECT `Meal`.`title`,
ROUND(AVG(`Review`.`stars`),1) AS `avg_amount_of_stars`
FROM `Meal`
JOIN `Review` ON `Meal`.`id` = `Review`.`meal_id`
GROUP BY `Meal`.`title`
ORDER BY `avg_amount_of_stars` DESC;