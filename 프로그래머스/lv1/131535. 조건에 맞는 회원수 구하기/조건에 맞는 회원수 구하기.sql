-- 코드를 입력하세요
SELECT COUNT(USER_ID) USERS 
    FROM USER_INFO 
    WHERE AGE BETWEEN 20 AND 29
    AND JOINED BETWEEN '2021-01-01' AND '2021-12-31'