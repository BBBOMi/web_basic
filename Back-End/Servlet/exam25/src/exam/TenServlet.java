package exam;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TenServlet
 */
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
		// TODO Auto-generated method stub
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.print("<h1>1부터 10까지 출력합니다.</h1>");
		for(int i=1; i<=10; i++) {
			out.print(i + "<br>");
		}
		out.close();
	}

}

/* 버전에 따른 Servlet 작성 방법 2. Servlet 3.0 spec 미만
 * 						- Servlet을 등록할 때 web.xml 파일에 등록한다(반드시)
 * 				
 *	**<servlet>의 servlet-name태그와 <servlet-mapping>의 servlet-name태그가 짝을 이루어야 한다.
 *	  <servlet>의 <servlet-class>는 실제 클래스 경로를 의미.
 *	  <servlet-mapping>의 <url-pattern>은 url mapping값을 뜻한다.
 */
