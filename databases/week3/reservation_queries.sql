-- Get all reservations
SELECT *
FROM `Reservation`;
-- Add two new reservations
INSERT INTO `Reservation`(
      `number_of_guests`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`, `meal_id`
)
VALUES
(
    8, "2022-03-26", "53757575", "Christopfer", "chris@mail.com", 5
), (
    4, "2022-04-26", "88884444", "Stanly", "stan@mail.com", 1
);
-- Get a reservation with any id, fx 1
SELECT *
FROM `Reservation`
WHERE `id` = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Reservation`
SET `created_date`= "2022-03-26"
WHERE contact_name = "Sergii";
-- Delete a reservation with any id, fx 1
DELETE FROM `Reservation`
WHERE id = 2;