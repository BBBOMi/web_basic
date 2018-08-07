package kr.or.connect.guestbook.dao;

import java.util.Date;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import kr.or.connect.guestbook.config.ApplicationConfig;
import kr.or.connect.guestbook.dto.Guestbook;

public class GuestbookDaoTest {

  public static void main(String[] args) {
    ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);
    GuestbookDao guestbookDao = ac.getBean(GuestbookDao.class);
    
    Guestbook guestbook = new Guestbook();
    guestbook.setName("김보미");
    guestbook.setContent("반갑습니다.");
    guestbook.setRegdate(new Date());
    Long id = guestbookDao.insert(guestbook);
    
    System.out.println("id: " + id);
  }

}
