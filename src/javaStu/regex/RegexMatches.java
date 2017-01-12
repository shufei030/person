package javaStu.regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexMatches {

	/**
	 * @Title: main
	 * @Description: RegexMatches 下面的例子说明如何从一个给定的字符串中找到数字串：
	 * @param args
	 * @returnType void    
	 * @author 舒飞
	 * @date 2017-1-11下午6:33:07
	 */
	public static void main(String[] args) {
		// 按指定模式在字符串查找
        String line = "This order was placed for QT3000! OK?";
        String pattern = "(\\D*)(\\d+)(.*)";
        // 创建 Pattern 对象
        Pattern r = Pattern.compile(pattern);
    	// 现在创建 matcher 对象
        Matcher m = r.matcher(line);
        if(m.find()){
        	System.out.println("Found value:"+m.group(0));
        	System.out.println("Found value:"+m.group(1));
        	System.out.println("Found value:"+m.group(2));
        }else{
        	System.out.println("NO MATCHER");
        }
	}

}
