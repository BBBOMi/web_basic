<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="value1" scope="request" value="Kim" />

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example01_jstl</title>
</head>
<body>
성 : ${value1 } <br>

<c:remove var="value1" scope="request" />

성:${value }
</body>
</html>

<!-- 코어 태그: 변수 지원 태그 - set, remove
		1. 변수 설정: 지정한 영역에 변수를 생성한다
			- 문법
				<c:set var="varName" scope="session" value="someValue" /> 또는
				<c:set var="varName" scope="request">
				some Value
				</c:set>
				
				*var - EL에서 사용될 변수명
				 scope - 변수값이 저장될 영역(page, request, session, application)
				 value - 변수값
				 
		2. 변수 제거
			- 문법
				<c:remove var="varName" scope="request" />
 -->