package kr.or.connect.diexam01;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class ApplicationContextExam03 {

  public static void main(String[] args) {
    ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);
    // AnnotationConfigApplicationContext는 JavaConfig클래스를 읽어들여 Ioc와 DI를 적용하게 됨.
    // 설정파일 중에 @Bean이 붙어 있는 메소드들을 자동으로 실행하여 그 결과로 리턴하는 객체들을 기본적으로 싱글톤으로 관리하게 된다.
    
    //Car car = (Car)ac.getBean("car");
    Car car = (Car)ac.getBean(Car.class); // 위와 같은 의미. 파라미터로 요청하는 class타입으로 지정 가능
    car.run();
  }

}
