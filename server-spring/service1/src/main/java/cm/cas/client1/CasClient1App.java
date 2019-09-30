package cm.cas.client1;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication(
        exclude ={MongoAutoConfiguration.class, MongoDataAutoConfiguration.class}
)
@EnableSwagger2
public class CasClient1App implements CommandLineRunner{
    public static void main(String[] args){
        SpringApplication.run(CasClient1App.class,args);
    }
    public void run(String... args){
        System.out.println("running .........");
    }
}
