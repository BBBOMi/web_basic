package kr.or.connect.diexam01;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration // 스프링 설정 클래스라는 의미
              // JavaConfig로 설정을 할 클래스 위에는 @Configuration가 붙어 있어야 한다
public class ApplicationConfig {
  @Bean
  public Car car(Engine e) {
    Car c = new Car();
    c.setEngine(e);
    return c;
  }
  
  @Bean
  public Engine engine() {
    return new Engine();
  }
}
