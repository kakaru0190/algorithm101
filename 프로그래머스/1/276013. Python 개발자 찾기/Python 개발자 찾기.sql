SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPER_INFOS
WHERE 1 = 1
AND (SKILL_1 = 'Python' OR SKILL_2 = 'Python' OR SKILL_3 = 'Python')
ORDER BY ID ASC;