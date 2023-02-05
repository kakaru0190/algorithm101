-- 코드를 입력하세요
SELECT app.APNT_NO APNT_NO, pat.PT_NAME PT_NAME, app.PT_NO PT_NO, 
	app.MCDP_CD MCDP_CD, doc.DR_NAME DR_NAME, app.APNT_YMD APNT_YMD
FROM APPOINTMENT app
JOIN DOCTOR doc
ON doc.DR_ID = app.MDDR_ID
JOIN PATIENT pat
ON pat.PT_NO = app.PT_NO
WHERE app.MCDP_CD = 'CS'
AND date_format(APNT_YMD, '%Y-%m-%d') = '2022-04-13'
AND APNT_CNCL_YN = 'N'
ORDER BY APNT_YMD