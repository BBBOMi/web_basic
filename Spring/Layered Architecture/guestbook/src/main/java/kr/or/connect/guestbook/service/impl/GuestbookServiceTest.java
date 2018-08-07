package kr.or.connect.guestbook.service.impl;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import kr.or.connect.guestbook.config.ApplicationConfig;
import kr.or.connect.guestbook.dto.Guestbook;
import kr.or.connect.guestbook.service.GuestbookService;

public class GuestbookServiceTest {

  public static void main(String[] args) {
    ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);
    GuestbookService guestbookService = ac.getBean(GuestbookService.class);
    
    Guestbook guestbook = new Guestbook();
    guestbook.setName("kim bomi");
    guestbook.setContent("화이팅");
    Guestbook result = guestbookService.addGuestbook(guestbook, "127.0.0.1");
    System.out.println(result);
  }

}
