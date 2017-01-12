package springStu.springAOP.step3;
//横切关注点，这里是打印时间：
public class TimeHandler {
	 public void printTime()
	    {
	        System.out.println("CurrentTime = " + System.currentTimeMillis());
	    }
}
