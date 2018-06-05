<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example_Scriptlet</title>
</head>
<body>
<%
	for(int i=1; i<=5; i++) {
%>
	<h<%=i %>> 아름다운 한글 </h<%=i %>>
<%
	}
%>
</body>
</html>
<%-- 스크립트 요소의 이해 : JSP 페이지에서는 선언문(Declaration), 스크립트릿(Scriptlet), 표현식(Expression)이라는 3가지 스크립트 요소를 제공
		2. 스크립트릿: <% %>
				- 가장 일반적으로 많이 쓰이는 스크립트 요소
				- 주로 프로그래밍의 로직을 기술할 때 사용
				- 스크립트릿에서 선언된 변수는 지역변수
				- 서블릿 파일의 service()메소드 내에 존재
				- 분리해서 사용 가능. 하나의 JSP파일에 여러개도 사용가능
				
		3. 표현식: <%= %>
				- JSP 페이지에서 웹 브라우저에 출력할 부분을 표현(즉 화면에 출력하기 위한 것)
				- 스크립트릿 내에서 출력할 부분은 내장객체인 out객체의 print() 또는 println() 메소드를 사용해서 출력
--%>