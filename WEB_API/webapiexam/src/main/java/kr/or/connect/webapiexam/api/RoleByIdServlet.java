package kr.or.connect.webapiexam.api;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import kr.or.connect.jdbcexam.dao.RoleDao;
import kr.or.connect.jdbcexam.dto.Role;

@WebServlet("/roles/*")
public class RoleByIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public RoleByIdServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    response.setCharacterEncoding("utf-8");
	    response.setContentType("application/json");
	    
	    String pathInfo = request.getPathInfo(); // /roles/{roleId}
	    String[] pathParts = pathInfo.split("/");
	    String idStr = pathParts[1];
	    int id = Integer.parseInt(idStr);
	    
	    RoleDao dao = new RoleDao();
	    
	    Role role = dao.getRole(id);
	    
	    ObjectMapper objectMapper = new ObjectMapper();
	    String json = objectMapper.writeValueAsString(role);
	    
	    PrintWriter out = response.getWriter();
	    out.print(json);
	   
	    out.close();
	
	}

}

/* 모든 role정보 읽어오기 -> GET/roles
 * 특정한 role정보 읽어오기 -> GET/roles/{roleId}
 * role정보 등록하기 -> POST/roles
 * role정보 삭제하기 -> DELETE/roles/{roleId}
 * role정보 수정하기 -> PUT/roles/{roleId}
 */
