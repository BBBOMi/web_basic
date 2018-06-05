<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example_ImplicitObjects</title>
</head>
<body>
<%
	StringBuffer url = request.getRequestURL();

	out.println("url : " + url.toString());
	out.println("<br>");
%>
</body>
</html>

<%-- JSP 내장객체 : 개발자가 선언하지 않아도, 사용할 수 있는 미리 선언된 변수
		- JSP를 실행하면 서블릿 소스가 생성되고 실행
			-> JSP에 입력한 대부분의 코드는 생성되는 서블릿 소스의 _jspService() 메소드 안에 삽입되는 코드로 생성
			-> _jspService()에 삽입된 코드의 윗부분에 미리 선언된 객체들이 있는데(=> 내장객체), 해당 객체들은 jsp에서도 사용 가능
				*때문에 JSP선언문에서 사용 불가.(service메소드 밖에 선언하는 것이므로) 
		
		- 종류 : request(HTML Form 요소 선택 값과 같은 사용자 입력 정보를 읽어줄 때 사용)
			   response(사용자 요청에 대한 응답을 처리할 때 사용)
			   pageContext(현재 JSP실행에 대한 context 정보를 참조하기 위해 사용)
			   session(클라이언트 세션 정보를 처리하기 위해 사용)
			   application(웹 서버의 어플리케이션 처리와 관련된 정보를 참조하기 위해 사용)
			   out(사용자에게 전달하기 위한 output 스트림을 처리하기 위해 사용)
			   config(현재 JSP에 대한 초기화 환경을 처리하기 위해 사용)
			   page(현재 JSP 페이지에 대한 클래스 정보)
			   exception(예외 처리를 위해 사용)	
--%>