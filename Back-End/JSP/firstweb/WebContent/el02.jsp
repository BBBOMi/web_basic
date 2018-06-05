<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- <%@ page isELIgnored = "true" %> -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	request.setAttribute("k", 10);
	request.setAttribute("m", true);
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Example_el표기법02</title>
</head>
<body>
k : ${k }<br>
k + 5 : ${k + 5 }<br>
k - 5 : ${k - 5 }<br>
k * 5 : ${k * 5 }<br>
k / 5 : ${k div 5 }<br>
<br><br>

k : ${k }<br>
m : ${m }<br>
k > 5 : ${k > 5 }<br>
k < 5 : ${k < 5 }<br>
k <= 10 : ${k <= 10 }<br>
k >= 10 : ${k >= 10 }<br>
m : ${m }<br>
!m : ${!m }<br>

</body>
</html>
<!-- EL의 데이터 타입 - boolean(true, false)
				 - 정수형
				 - 실수형(소수점을 사용할 수 있고, 3.24e3과 같이 지수형으로 표현 가능)
				 - 문자열(따옴표(' 또는 ")로 둘러싼 문자열. 만약 작은 따옴표(')를 사용해서 표현할 경우 값에 포함된 작은 따옴표는 \'와 같이 \기호와 함께 사용해야 함)
				 - \ 기호 자체는 \\로 표시한다
				 - null
 -->
 
<!-- <%@ page isELIgnored = "true" %> -->
<!-- EL 문법을 사용하지 않고 문자열 그대로 표시할 때 사용. default값은 false
	 Servlet spec 2.5미만은 지원하지 않고, 2.5이상부터 사용 가능하다
 -->