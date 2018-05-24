<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example_Comment</title>
</head>
<body>
<%--jsp 주석문입니다.
여러줄을 입력할 수 있습니다. --%>
<!-- html 주석문입니다. -->
<%
/*
자바 여러줄 주석문입니다.
*/
for(int i=1; i<=5; i++) { // java 한줄 주석문입니다.
%>
	<h<%=i %>> 주석문 테스트 </h<%=i %>>
<%
}
%>

</body>
</html>

<%-- JSP 페이지에서 사용할 수 있는 주석 : HTML주석, JAVA주석, JSP주석 
		1. HTML주석: <!-- -->
				- HTML주석을 사용한 페이지를 웹에서 서비스할 때 화면에 주석의 내용이 표시되지는 않으나,
				[소스보기]를 수행하면 HTML주석의 내용이 화면에 표시
				- 서블릿 파일에도 존재(하나의 결과로 존재)
				
		2. JSP주석: 지금 사용하고 있는 형태
				- JSP 페이지에서만 사용
				- 해당 페이지를, 웹 브라우저를 통해 출력 결과로서 표시하거나,
					웹 브라우저 상에서 [소스보기]를 해도 표시되지 않음.
					또한 JSP주석 내에 실행코드를 넣어도 그 코드는 실행되지 않는다.
					
		3. JAVA주석: //, /**/
				- 스크립트릿이나 선언문에서 사용되는 주석으로, 자바와 주석 처리 방법이 같다
				- 서블릿 파일에도 존재(주석)
--%>
		