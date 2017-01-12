package springStu.springAOP.step6;
//增加一个横切关注点，打印日志，Java类为：
public class LogHandler {
	 public void LogBefore()
	    {
	        System.out.println("Log before method");
	    }
	    
	    public void LogAfter()
	    {
	        System.out.println("Log after method");
	    }
}
