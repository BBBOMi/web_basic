<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:import url="http://localhost:8080/firstweb/jstlValue.jsp" var="urlValue" scope="request" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example05_jstl</title>
</head>
<body>
읽어들인 값 : ${urlValue }
</body>
</html>

<%-- 코어 태그: URL처리 - import
		- 문법
			<c:import url="URL" charEncoding="캐릭터인코딩" var="변수명" scope="범위">
				[<c:param name="파라미터 이름" value="파라미터값" />]
			</c:import>
			
			*url - 결과를 읽어올 URL
			 charEncoding - 읽어온 결과를 저장할 때 사용할 캐릭터 인코딩
			 var - 읽어온 결과를 저장할 변수명
			 scope - 변수를 저장할 영역
			 <c:param> 태그는 url 속성에 지정한 사이트에 연결할 떄 전송할 파라미터를 입력
			 
		- 지정한 URL에 연결하여 결과를 지정할 변수에 저장한다.
--%>