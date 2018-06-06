package kr.or.connect.jdbcexam.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
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

  // INSERT - 하나의 데이터
  public int addRole(Role role) {
    int insertCount = 0;

    try {
      Class.forName("com.mysql.jdbc.Driver");
    } catch(ClassNotFoundException e) {
      e.printStackTrace();
    }

    String sql = "INSERT INTO role(role_id, description) VALUES (?, ?)";

    try(Connection conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
        PreparedStatement ps = conn.prepareStatement(sql)) {

      ps.setInt(1, role.getRoleId());
      ps.setString(2, role.getDescription());

      insertCount = ps.executeUpdate(); // INSERT, DELETE, UPDATE문을 실행할때 사용

    } catch(Exception ex) {
      ex.printStackTrace();
    }
    return insertCount;
  }

  // SELECT - 여러개의 데이터
  public List<Role> getRoles() {
    List<Role> list = new ArrayList<>();

    try {
      Class.forName("com.mysql.jdbc.Driver");
    } catch(ClassNotFoundException e) {
      e.printStackTrace();
    }

    String sql = "SELECT * FROM role ORDER BY role_id DESC";

    try(Connection conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
        PreparedStatement ps = conn.prepareStatement(sql)) {

      try(ResultSet rs = ps.executeQuery()) {

        while(rs.next()) {
          int id = rs.getInt(1);
          String description = rs.getString("description");
          Role role = new Role(id, description);
          list.add(role);
        }
      } catch(Exception e) {
        e.printStackTrace();
      }
    } catch(SQLException ex) {
      ex.printStackTrace();
    }
    return list;
  }
  
  // DELETE - 하나의 데이터
  public int deleteRole(Integer roleId) {
    int deleteCount = 0;
    
    Connection conn = null;
    PreparedStatement ps = null;
    
    try {
      Class.forName("com.mysql.jdbc.Driver");
      conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
      String sql = "DELETE FROM role WHERE role_id = ?";
      ps = conn.prepareStatement(sql);
      ps.setInt(1, roleId);
      deleteCount = ps.executeUpdate();
    } catch(Exception e) {
      e.printStackTrace();
    } finally {
      if(ps != null) {
        try {
          ps.close();
        } catch(Exception e) { }
      }
      
      if(conn != null) {
        try {
          conn.close();
        } catch(Exception e) { }
      }
    }
    
    return deleteCount;
  }
  
  // UPDATE - 하나의 데이터
  public int UpdateRole(Role role) {
    int updateCount = 0;
    
    try {
      Class.forName("com.mysql.jdbc.Driver");
    } catch(Exception e) {
      e.printStackTrace();
    }
    
    String sql = "UPDATE role SET description = ? WHERE role_id = ?";
    
    try(Connection conn = DriverManager.getConnection(dburl, dbUser, dbpasswd);
        PreparedStatement ps = conn.prepareStatement(sql)) {
      ps.setString(1, role.getDescription());
      ps.setInt(2, role.getRoleId());
      
      updateCount = ps.executeUpdate();
      
    } catch(SQLException e) {
      e.printStackTrace();
    }
    return updateCount;
  }
}
