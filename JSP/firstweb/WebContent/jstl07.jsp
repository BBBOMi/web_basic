<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example07_jstl</title>
</head>
<body>
<c:set var="t" value="<script type='text/javascript'>alert(1);</script>" />
${t } <%-- 자바스크립트 실행 --%>
<c:out value="${t }" escapeXml="true" /> <%-- <script type='text/javascript'>alert(1);</script> 출력 --%>
<c:out value="${t }" escapeXml="false" /> <%-- ${t}의 결과와 같다 --%>
</body>
</html>

<%-- 코어 태그: 기타태그 - out
		- 문법
			<c:out value="value" escapeXml="{true|false}" [default="defaultValue"] />
			
			*value - JspWriter에 출력할 값을 나타낸다.
					 일반적으로 value 속성의 값은 String과 같은 문자열이다.
					 만약 value의 값이 java.io.Reader의 한 종류라면 out 태그는 Reader로부터 데이터를 읽어와 JspWriter에 값을 출력
			 escapeXml - 이 속성의 값이 true일 경우 텍스트로 모두 출력
			 			 생략할 수 있으며, 생략할 경우 기본값은 true
			 default - value 속성에서 지정한 값이 존재하지 않을 때 사용될 값을 지정
			 
		- escapeXml 속성이 true일 경우 변환되는 문자
				< -> &lt;
				> -> &gt;
				& -> &amp;
				' -> &#039;
				" -> &#034;
--%>