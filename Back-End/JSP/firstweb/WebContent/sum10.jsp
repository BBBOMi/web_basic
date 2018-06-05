<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>sum10</title>
</head>
<body>
<%
	int total = 0;
	for(int i=1; i<=10; i++) {
		total += i;
	}
%>

1부터 10까지의 합 : <%=total %>

</body>
</html>

<%-- JSP 기초
	1. jsp파일은 jsp파일이 직접 동작하는게 아니라 servlet으로 바뀌어서 동작.
		('<%@'같은 기호들은 jsp가 servlet으로 바뀔때 어떻게 바뀌어야 하는지 알려주는 부분이라고 생각하면 됨)
		
	2. '<%@': 지시자.jsp파일의 맨 위에 붙은 지시자는 'page'란 키워드와 함께 쓰이므로 페이지 지시자임.
			- laguage="java" => java로 작성된 코드임을 알린다.
				*이론적으로는 jsp파일을 다른 언어로 작성하는 것이 가능하지만, 실제로는 java만 사용.
			
			- contentType="text/html;charset=UTF-8" => 이 jsp로 출력되는 결과를 받는 브라우저에게
				'지금 출력되는 결과는 html문서이며, charset이 UTF-8이다' 는 것을 알림.
			
			- pageEncoding="UTF-8" => 이 jsp파일 자체가 UTF-8로 되어있음을 알린다.	
		
		-> 이런 지시를 받는 것은 이 jsp파일을 실행하는 WAS.
		
	3. '<%': scriptlet이라고 함. '이 기호 안에는 자바 코드가 들어있다', '자바 코드를 입력할 수 있는 부분이다'를 의미
	
	4. '<%=': 표현식. 브라우저에게 응답결과로 주고싶은 내용을 적는다.
			
	5. servlet은 반드시 out.ptint();를 사용해 응답결과를 줘야했지만, jsp는 그렇지 않음.
		out.print(); -> <%= %>		
--%>