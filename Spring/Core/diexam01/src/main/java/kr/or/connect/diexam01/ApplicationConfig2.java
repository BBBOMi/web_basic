package kr.or.connect.diexam01;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("kr.or.connect.diexam01") // package명 명시
/* 
  @ComponentScan은 파라미터로 들어온 패키지 이하에서 
  @Controller, @service, @Repository, @Component
    어노테이션이 붙어있는 클래스를 찾아 메모리에 올려준다.
    
 * @Controller, @service, @Repository, @Component 어노테이션이 붙어있는 객체들은
   @ComponentScan을 이용해서 읽어들여 메모리에 올리고  DI를 주입하도록 하고,
      이러한 어노테이션이 붙어 있지 않은 객체는 @Bean어노테이션을 이용하여 직접 생성해주는 방식으로 클래스들을 관리
 */
public class ApplicationConfig2 {
  

}
