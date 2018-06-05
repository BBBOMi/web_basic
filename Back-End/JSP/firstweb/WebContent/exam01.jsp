<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example_Declaration</title>
</head>
<body>
id: <%=getId() %>
</body>
</html>

<%!
	String id = "u001"; // 멤버변수 선언
	public String getId() { // 메소드 선언
		return id;
	}
%>

<%-- 스크립트 요소의 이해 : JSP 페이지에서는 선언문(Declaration), 스크립트릿(Scriptlet), 표현식(Expression)이라는 3가지 스크립트 요소를 제공
		1. 선언문: <%! %>
				- 선언문은 JSP 페이지 내에서 필요한 멤버변수나 메소드가 필요할 때 선언해 사용하는 요소
				- 선언된 멤버변수, 메소드는 서블릿으로 변환되어 생성되는 자바파일의 메소드, 전역변수가 된다.
				- 실제 JSP파일 내의 위치는 무관(지시자 아래에만 있으면 OK)
--%>