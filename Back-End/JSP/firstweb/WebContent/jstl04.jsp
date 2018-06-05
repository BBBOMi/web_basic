<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page import="java.util.*"%>
<%
	List<String> list = new ArrayList<>();
	list.add("hello");
	list.add("world");
	list.add("!!!!");
	
	request.setAttribute("list", list);
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example03_jstl</title>
</head>
<body>
<c:forEach items="${list }" var="item">
	${item } <br>
</c:forEach>
</body>
</html>

<%-- 코어 태그: 흐름제어 태그 - forEach
		- 문법
			<c:forEach var="변수" items="아이템" [begin="시작인덱스"] [end="끝인덱스"]>
			...
			${변수}
			...
			</c:forEach>
			
			*var - EL에서 사용될 변수명
			 items - 배열, List, Iterator, Enumeration, Map 등의 Collection
			 begin - items에 지정한 목록에서 값을 읽ㅇ올 인덱스의 시작값
			 end - items에 지정한 목록에서 값을 읽어올 인덱스의 끝값
			 
		- 배열 및 Collection에 저장된 요소를 차례대로 처리. 
	    - item이 Map인 경우 변수에 저장되는 객체는 Map.Entry이므로 변수값을 사용할 때는,
		  ${변수.key} 와 ${변수.value}를 사용해서 맵에 저장된 항목의 <키, 값>매핑에 접근할 수 있다.
--%>