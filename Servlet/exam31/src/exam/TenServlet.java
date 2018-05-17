package exam;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TenServlet
 */
@WebServlet("/ten")
public class TenServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TenServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print("<h1>1부터 10까지 출력합니다.</h1>");
		for(int i=1; i<=10; i++) {
			out.print(i + "<br>");
		}
		out.close();
	}

}

/* Java Web Application : WAS에 설치(deploy)되어 동작하는 어플리케이션
 * 		=> HTML, CSS, 이미지, 자바로 작성된 클래스(Servlet포함, JSP, package, 인터페이스등),
 * 			각종 설정 파일 등이 포함.
 * 
 * Servlet : 자바 웹 어플리케이션의 구성요소 중 동적인 처리를 하는 프로그램의 역할
 * 			- WAS에서 동작하는 Java 클래스
 * 			- HttpServlet 클래스를 상속받아야 한다.
 * 			(상속 받지 않는다면 에러.(에러코드: 500)/class를 Servlet으로 변환할 수 없어 ClassCastException 발생
 * 																-> 결과적으로 ServletException 발생)
 * 
 * 버전에 따른 Servlet 작성 방법 1. Servlet 3.0 spec 이상
 * 						- web.xml을 사용하지 않는다
 * 						- 자바 어노테이션(annotation)을 사용한다.
 */
