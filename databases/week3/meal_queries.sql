-- Queries to write:
-- Get all meals
SELECT *
FROM `Meal`;
-- Add a new meal
INSERT INTO `Meal`(
  `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`
  )
VALUES
(
  "Pizza Palermo", "Palermo pizza is a great classic italian pizza with chease and tomato.", 
    "Copenhagen Vardevej 7", "2022-02-26 12:00:00", 
    5, 90.00 , "2022-02-21"
);
-- Get a meal with any id, fx 1
SELECT *
FROM `Meal`
WHERE `Meal`.`id` = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Meal`
SET `location` = "Århus Vejlevej 3"
WHERE `location` LIKE "%Århu%";
-- Delete a meal with any id, fx 1
DELETE FROM `Meal`
WHERE `id` = 2;
