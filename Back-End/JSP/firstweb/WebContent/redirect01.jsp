<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	response.sendRedirect("redirect02.jsp");
%>

<%-- redirect : 서버가 클라이언트에게 어떤 URL로 이동하라는 요청을 보내는 것
			- HTTP프로토콜로 정해진 규칙.
			- 서버는 클라이언트에게 HTTP 상태코드 302로 응답하는데 이때 헤더 내 Location 값에 이동할 URL을 추가.
			- 클라이언트는 서버로 부터 받은 값이 302라면(리다이렉션 응답을 받게 되면), 헤더(Location)에 포함된 URL로 재요청을 보내게 된다.
				이때, 브라우저의 주소창은 새 URL로 바뀌게 된다.
			- 서블릿이나 JSP는 리다이렉트 하기 위해 HttpServletResponse 클래스의 sendRedirect() 메소드를 사용
--%>