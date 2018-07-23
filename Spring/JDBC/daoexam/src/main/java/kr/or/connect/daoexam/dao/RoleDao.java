package kr.or.connect.daoexam.dao;

import java.util.Collections;
import java.util.List;
import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import kr.or.connect.daoexam.dto.Role;
import static kr.or.connect.daoexam.dao.RoleDaoSqls.*;

@Repository
public class RoleDao {
  private NamedParameterJdbcTemplate jdbc; 
  private RowMapper<Role> rowMapper = BeanPropertyRowMapper.newInstance(Role.class);
  
  public RoleDao(DataSource dataSource) {
    this.jdbc = new NamedParameterJdbcTemplate(dataSource);
  }
  
  public List<Role> selectAll() {
    return jdbc.query(SELECT_ALL, Collections.emptyMap(), rowMapper);
    // Collections.emptyMap() : sql문에 바인딩할 값이 있을 경우에, 이 바인딩할 값을 전달할 목적으로 사용
    // rowMapper : select 한 건 한 건을 dto에 저장할 목적으로 사용. BeanPropertyRowMapper 객체를 이용해서 컬럼의 값을 자동으로 dto에 담아준다.
    // BeanPropertyRowMapper는 결과가 여러 건이었을 때, 내부적으로 반복해서 dto를 생성. 생성한 dto를 list에 담아주고 해당 list를 반환
  }
}
