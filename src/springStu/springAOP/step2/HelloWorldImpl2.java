package springStu.springAOP.step2;

import springStu.springAOP.step1.HelloWorld;

public class HelloWorldImpl2 implements HelloWorld {

	@Override
	public void printHelloWorld() {
		System.out.println("Enter HelloWorldImpl2.printHelloWorld()");

	}

	@Override
	public void doPrint() {
		System.out.println("Enter HelloWorldImpl2.doPrint()");
        return ;

	}

}
