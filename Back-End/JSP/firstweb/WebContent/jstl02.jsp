<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%-- <%
request.setAttribute("n", 10);
%> --%>
<%-- 같은 의미의 스크립트릿과 코어태그 --%>
<c:set var="n" scope="request" value="10" />

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example02_jstl</title>
</head>
<body>
<c:if test="${n == 0 }">
	n은 0과 같습니다.
</c:if>
<c:if test="${n == 10 }">
	n은 10과 같습니다.
</c:if>
</body>
</html>

<%-- 코어 태그: 변수 지원 태그 - 프로퍼티, 맵의 처리
		- 문법
			<c:set target="${some}" property="propertyName" value="anyValue" />
			
			*target - <c:set>으로 지정한 변수 객체
			 property - 프로퍼티 이름
			 value - 새로 지정할 프로퍼티 값
			 
			 some객체가 자바빈일 경우 : some.setPropertyName(anyValue)와 같다
			 some객체가 맵(map)일 경우: some.put(propertyName, anyValue)와 같다

	코어 태그: 흐름제어 태그 - if
		- 문법
			<c:if test="조건">
			...
			...
			</c:if>
			
			test의 조건이 true이면 몸체 내용을 처리
			else문은 없다.
--%>