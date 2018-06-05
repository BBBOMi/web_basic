package examples;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloServlet
 */
@WebServlet("/HelloServlet")
public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print("<h1>Hello Servlet</h1>"); // 실제 응답 결과
	}

}

/* Servlet이란? URL 요청을 처리하는 프로그램
 * URL 주소 - http(Protocol)://localhost(IP):8080(Port)/{프로잭트 이름}/{URL Mapping 값} 으로 구성
 * 			(이 파일의 URL은 http://localhost:8080/firstweb/HelloServlet)
 * 
 * GET방식을 사용해 요청을 보낼 때, Servlet의 doGet 메소드가 호출 -> doGet 메소드 안에 작성한 내용이 응답 내용
 * 	(*GET방식 : 웹브라우저가 서버에게 문서를 요청할 떄 사용하는 방식)
 * 
 * response : 응답할 내용들을 모두 모아 추상화 해놓은 객체
 * setContentType은 응답 결과의 타입을 지정하는 메소드
 * response.setContentType("text/html;charset=UTF-8");
 * 	=> '응답 결과로 text를 보낼 것. 이 text는 html이고, 이 text의 charset은 UTF-8이다'
 * 
 * PrintWriter는 실제 응답 결과를 적어줄 통로역할.
 */
