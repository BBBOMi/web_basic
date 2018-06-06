package kr.or.connect.jdbcexam.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import kr.or.connect.jdbcexam.dto.Role;

public class RoleDao {
  private static String dburl = "jdbc:mysql://localhost:3306/connectdb";
  private static String dbUser = "connectuser";
  private static String dbpasswd = "";

  // SLECT - 하나의 데이터
  public Role getRole(Integer roleId) {
    Role role = null;
    Connection conn = null;
    PreparedStatement ps = null;
    ResultSet rs = null;

    try {
      Class.forName("com.mysql.jdbc.Driver");
      conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
      String sql = "SELECT description, role_id FROM role WHERE role_id = ?";
      ps = conn.prepareStatement(sql);
      ps.setInt(1, roleId); // 인덱스는 '?'의 인덱스
      rs = ps.executeQuery(); // executeQuery()는 SELECT문을 수행할 때 사용한다

      if(rs.next()) {
        String description = rs.getString(1); // 인덱스는 SELECT문에 작성한 순서
        int id = rs.getInt("role_id"); // 컬럼명으로도 값을 받아올 수 있다
        role = new Role(id, description);
      }
    } catch(Exception e) {
      e.printStackTrace();
    } finally {
      if(rs != null) {
        try {
          rs.close();
        } catch(SQLException e) {
          e.printStackTrace();
        }
      }

      if(ps != null) {
        try {
          ps.close();
        } catch(SQLException e) {
          e.printStackTrace();
        }
      }
      
      if(conn != null) {
        try {
          conn.close();
        } catch(SQLException e) {
          e.printStackTrace();
        }
      }
      
    }
    return role;
  }
}
