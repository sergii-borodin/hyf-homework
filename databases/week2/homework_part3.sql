-- Part 3: More queries
USE hyfdatabase;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
    *
FROM
    task
JOIN
    user
ON user.id = task.user_id
WHERE user.email LIKE "%@spotify.com";

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
    *
FROM
    task
JOIN
    `user`
ON task.user_id = `user`.id
WHERE task.status_id = 1
AND user.name = "Donald Duck";

-- Get all the tasks for 'Maryrose Meadows' that were created 
-- in september (hint: month(created)=month_number)
SELECT
    *
FROM
    task
JOIN 
    `user`
 ON task.user_id = user.id
 WHERE user.name = "Maryrose Meadows"
 AND month(task.created) = 9;

 -- Find how many tasks where created in each month, e.g. how many tasks 
 -- were created in october, how many tasks were created in november, etc. (hint: use group by)
 SELECT
    month(task.created) creating_time, COUNT(task.created) as task_amount
FROM
    task
GROUP BY creating_time;