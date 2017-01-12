package springStu.springAOP.step2;

import springStu.springAOP.step1.HelloWorld;

public class HelloWorldImpl1 implements HelloWorld {

	@Override
	public void printHelloWorld() {
		System.out.println("Enter HelloWorldImpl1.printHelloWorld()");

	}

	@Override
	public void doPrint() {
		System.out.println("Enter HelloWorldImpl1.doPrint()");
        return ;

	}

}
