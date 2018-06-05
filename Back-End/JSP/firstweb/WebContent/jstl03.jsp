<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
	request.setAttribute("score", 83);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example03_jstl</title>
</head>
<body>
<c:choose>
	<c:when test="${score >= 90 }">
	A학점입니다.
	</c:when>
	<c:when test="${score >= 80 }">
	B학점입니다.
	</c:when>
	<c:when test="${score >= 70 }">
	C학점입니다.
	</c:when>
	<c:when test="${score >= 60 }">
	D학점입니다.
	</c:when>
	<c:otherwise>
	F학점입니다.
	</c:otherwise>
</c:choose>
</body>
</html>

<%-- 코어 태그: 흐름제어 태그 - choose
		- 문법
			<c:choose>
				<c:when test="조건1">
				...
				</c:when>
				<c:when test="조건2">
				...
				</c:when>
				<c:otherwise>
				...
				</c:otherwise>
			</c:choose>
			
			자바의 if-else문과 유사
			조건1이 true이면 조건1의 블럭만 수행하고 빠져나옴
			otherwise는 else와 같다(앞의 <c:when>의 조건들이 모두 만족하지 않을 때에 실행된다)
--%>