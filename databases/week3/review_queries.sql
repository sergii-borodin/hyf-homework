-- Get all reviews
SELECT *
FROM `Review`;

-- Add a new review
INSERT INTO `Review`(
    `title`, `description`, `created_date`, `stars`, `meal_id`
)
VALUES
(
    "Perfect", "Smagte perfect", "2022-03-01", 5, 1
);

-- Get a review with any id, fx 1
SELECT *
FROM `Review`
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
-- to make a bad review looks better:)
UPDATE `Review`
SET `title` = "Very good", `description` = "I just love this dish", `stars`= 5
WHERE id = 3;

-- Delete a review with any id, fx 1
DELETE FROM `Review`
WHERE id = 5;