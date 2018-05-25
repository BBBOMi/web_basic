<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Servlet & JSP 연동</title>
</head>
<body>
EL표기법으로 출력합니다<br>
${v1 } + ${v2 } = ${result }<br><br>

스크립트릿과 표현식을 이용해 출력합니다<br>
<%
	int v1 = (int)request.getAttribute("v1");
	int v2 = (int)request.getAttribute("v2");
	int result = (int)request.getAttribute("result");
%>

<%=v1 %> + <%=v2 %> = <%=result %>
</body>
</html>
<%-- Servlet & JSP 연동
		- Servlet과 JSP는 서로 상호 보완적인 관계 
		
		- Servlet : 프로그램 로직이 수행되기에 유리. IDE 등에서 지원을 좀 더 잘해준다
		  JSP : 결과를 출력하기에 Servlet보다 유리. 필요한 html문을 그냥 입력하면 된다.
		
		- 따라서 프로그램 로직 수행은 Servlet에서, 결과 출력은 JSP에서 하는 것이 유리하다
			-> 서로의 장단점을 해결하기 위해서 Servlet에서 프로그램 로직이 수행되고,
				그 결과를 JSP에게 포워딩하는 방법이 사용되게 되었다. 이를 Servlet과 JSP연동이라 함
--%>