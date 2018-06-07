package kr.or.connect.jdbcexam.dto;

public class Role {
  //Role 테이블에 있는 컬럼들
  Integer roleId;
  String description;
  
  public Role() {
    
  }
  
  public Role(Integer roleId, String description) {
    super();
    this.roleId = roleId;
    this.description = description;
  }

  public Integer getRoleId() {
    return roleId;
  }

  public void setRoleId(Integer roleId) {
    this.roleId = roleId;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  @Override
  public String toString() {
    return "Role [roleId=" + roleId + ", description=" + description + "]";
  }
}
