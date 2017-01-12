package springStu.springAOP.step5;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import springStu.springAOP.step1.HelloWorld;

public class HelloWorldDemo {
	public static void main(String[] args) {
		
		ApplicationContext ctx = 
	            new  FileSystemXmlApplicationContext("WebRoot/WEB-INF/classes/springStu/springAOP/step4SpringAOP.xml");
		    HelloWorld hw1 = (HelloWorld)ctx.getBean("helloWorldImpl1");
		    HelloWorld hw2 = (HelloWorld)ctx.getBean("helloWorldImpl2");
		    hw1.printHelloWorld();
		    System.out.println();
		    hw1.doPrint();
		    
		    System.out.println();
		    hw2.printHelloWorld();
		    System.out.println();
		    hw2.doPrint();

	}

}
