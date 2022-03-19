-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO 
    task(id, title, description, created, updated, due_date, status_id, user_id)
VALUES 
    (38, "Fly to the Mars", "To take a look", "2022-12-18 13:17:17",  "2022-12-18 13:17:17", "2025-12-18 13:17:17", 1, 11);

-- Change the title of a task

UPDATE
    task
SET
    title = "Fly back home"
WHERE
    title like "%Mars%";

-- Change a task due date
UPDATE
    task
SET
    due_date = "2024-12-18 13:17:17"
WHERE
    due_date > "2024-12-18";

-- Change a task status
UPDATE
    task
SET
    status_id = 2
WHERE
    id = 36;

-- Mark a task as complete
UPDATE
    task
SET
    status_id = 3
WHERE id = 36;

-- Delete a task
DELETE
FROM
    task
ORDER BY id DESC LIMIT 1;

SELECT
    *
FROM
    task;
