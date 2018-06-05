package examples;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/* 서블릿 생명주기 */
/* doGet, doPost 메소드의 동작 */


/**
 * Servlet implementation class LifecycleServlet
 */
@WebServlet("/LifecycleServlet")
public class LifecycleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LifecycleServlet() {
        System.out.println("LifecycleServlet 생성!!");
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		System.out.println("init 호출!!");
	}

	/**
	 * @see Servlet#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println("destroy 호출!!");
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print("<html>");
		out.print("<head><title>form</title></head>");
		out.print("<body>");
		out.print("<form method='post' action='/firstweb/LifecycleServlet'>");
		out.print("name : <input type='text' name='name'><br>");
		out.print("<input type='submit' value='ok'><br>");
		out.print("</form>");
		out.print("</body>");
		out.print("</html>");
		out.close();
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String name = request.getParameter("name");
		out.print("<h1> hello " + name + "</h1>");
		out.close();
	}

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	
	/*protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("service 호출!!");
	}*/
}

/* Servlet 생명주기 1. WAS는 서블릿 요청을 받으면 해당 서블릿이 메모리에 있는지 확인
 * 				 2-1. 없다면 해당 서블릿 클래스를 메모리에 올리고, init() 메소드 실행
 *				 2-2. service() 메소드 실행
 * 				 3. WAS가 종료되거나, 웹 어플리케이션이 새롭게 갱신될 경우 destroy() 메소드가 실행됨.
 * 
 * service(request, response) 메소드 : HttpServlet의 service메소드는 템플릿 패턴으로 구현
 * 					- 클라이언트의 요청이 GET일 경우에는 자신이 가지고 있는 doGet(request, response)메소드 호출
 * 					- 클라이언트의 요청이 POST일 경우에는 자신이 가지고 있는 doPost(request, response)메소드 호출
 */