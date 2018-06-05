package examples;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/* 웹 브라우저가 요청정보에 담아서 보내는 header값을 읽어 들여 브라우저 화면에 출력 */

/**
 * Servlet implementation class HeaderServlet
 */
@WebServlet("/header")
public class HeaderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HeaderServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print("<html>");
		out.print("<head><title>form</title></head>");
		out.print("<body>");
		
		Enumeration<String> headerNames = request.getHeaderNames();
		while(headerNames.hasMoreElements()) {
			String headerName = headerNames.nextElement();
			String headerValue = request.getHeader(headerName);
			out.println(headerName + " : " + headerValue + "<br>");
		}
		
		out.print("</body>");
		out.print("</html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

/* 요청과 응답 : WAS는 웹 브라우저로부터 Servlet요청을 받으면,
 * 			  - 요청할 때 가지고 있는 정보를 HttpServletRequest객체를 생성하여 저장
 * 			  - 웹 브라우저에게  응답을 보낼 때 사용하기 위해 HttpServletResponse객체 생성
 * 			  - 생성된 HttpServletRequest, HttpServletResponse 객체를 서블릿에게 전달
 * 
 *  HttpServletRequest - http프로토콜의 request정보를 서블릿에게 전달하기 위한 목적으로 사용
 *  				   - 헤더정보, 파라미터, 쿠키, URI, URL 등의 정보를 읽어 들이는 메소드를 가지고 있다.
 *  				   - Body의 Stream을 읽어 들이는 메소드를 가지고 있다.
 *  
 *  HttpServletResponse - WAS는 어떤 클라이언트가 요청을 보냈는지 알고 있고, 해당 클라이언트에게 응답을 보내기 위한
 *  						HttpServletResponse 객체를 생성하여 서블릿에게 전달
 *  					- 서블릿은 해당 객체를 이용하여 content type, 응답코드, 응답 메시지 등을 전송
 */
