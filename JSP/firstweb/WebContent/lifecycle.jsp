<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Lifecycle</title>
</head>
<body>
hello
<%
	System.out.println("_jspService()");
%>

<%!
public void jspInit() {
	System.out.println("jspInit()");
}

public void jspDestroy() {
	System.out.println("jspDestroy()");
}
%>

</body>
</html>

<%-- JSP의 실행순서 1. 브라우저가 웹서버에 JSP에 대한 요청 정보를 전달한다
				2. 브라우저가 요청한 JSP가 최초로 요청했을 경우
					2-1. JSP로 작성된 코드가 서블릿으로 변환(java 파일 생성)
				 	2-2. 서블릿 코드를 컴파일 해서 실행가능한 bytecode로 변환(class 파일 생성)
				 	2-3. 서블릿 클래스를 로딩하고 인스턴스를 생성
				3. 서블릿이 실행되어 요청을 처리하고 응답 정보를 생성한다
				
	- JSP가 서블릿으로 변경 된 파일에는 _jspInit(), _jspDestroy(), _jspService() 메소드가 생성.
	- JSP파일 내의 작업은 _jspService() 메소드에 저장.
	- 서블릿 파일로 처음 변환되었다면 init() -> service() 실행
				아니라면, service() 실행
				변경 후, 다시 변환되었다면 destroy() -> init() -> service() 실행 
	
	- '<%!': 선언식. 이 클래스의 메소드, 필드를 선언할 때 사용.
				service() 메소드 내부가 아닌 외부에 생성되게 한다.
 --%>