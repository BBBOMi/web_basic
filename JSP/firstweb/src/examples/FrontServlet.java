package examples;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
/**
 * Servlet implementation class FrontServlet
 */
@WebServlet("/front")
public class FrontServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FrontServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int diceValue = (int)(Math.random()*6) + 1;
		request.setAttribute("dice", diceValue);
		
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("/next");
		requestDispatcher.forward(request, response);
	}

}

/* forward - WAS의 서블릿이나 JSP가 요청을 받은 후 그 요청을 처리하다가, 추가적인 처리를 같은 웹 어플리케이션안에 포함된
 * 				다른 서블릿이나 JSP에게 위임하는 경우가 있는데 위임하는것을 말함
 * 
 * 		   - 진행 순서 1. 웹 브라우저에서 Servlet1(지금 FrontServlet)에게 요청을 보냄.
 * 		    	    2. Servlet1은 요청을 처리한 후, 그 결과를 HttpServletRequest에 저장
 * 		   			3. Servlet1은 결과가 저장된 HttpServletRequest와 응답을 위한 HttpServletResponse를
 * 						같은 웹 어플리케이션 안에 있는 Servlet2(NextServlet)에게 전송(forward)
 * 					4. Servlet2는 Servlet1으로부터 받은 HttpServletRequest와 HttpServletResponse를 이용하여
 * 						요청을 처리한 후 웹브라우저에게 결과를 전송
 *
 *			- 동작하는 Servlet이 달라졌어도 URL은 변경되지 않음(/front 유지) 
 *			- redirect와 동작 방식이 다름을 알아야 함
 */
