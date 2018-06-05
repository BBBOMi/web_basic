<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:redirect url="jstlRedirectPage.jsp" />

<%-- 코어 태그: URL처리 - redirect
		- 문법
			<c:redirect url="리다이렉트할URL">
				[<c:param name="파라미터이름" value="파라미터값" />]
			</c:redirect>
			
			*url - 리다이렉트할 URL
			 <c:param>은 리다이렉트할 페이지에 전달할 파라미터 지정
			 
		- 지정한 페이지로 리다이렉트한다.
		- response.sendRedirect()와 비슷
--%>