<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	pageContext.setAttribute("p1", "page scope value");
	request.setAttribute("r1", "request scope value");
	session.setAttribute("s1", "session scope value");
	application.setAttribute("a1", "application scope value");
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example_el표기법</title>
</head>
<body>
pageContext.getAttribute("p1") : ${pageScope.p1 }<br>
request.getAttribute("r1") : ${requestScope.r1 }<br>
session.getAttribute("s1") : ${sessionScope.s1 }<br>
application.getAttribute("a1") : ${applicationScope.a1 }<br>
<br><br>
<!-- 변수명이 중복되지 않는다면 이렇게 변수명만으로도 원하는 값 출력이 가능하나 가급적이면 해당 scope를 명시해주는것이 바람직하다 -->
pageContext.getAttribute("p1") : ${p1 }<br>
request.getAttribute("r1") : ${r1 }<br>
session.getAttribute("s1"): ${s1 }<br>
attribute.getAttribute("a1") : ${a1 }<br>
</body>
</html>