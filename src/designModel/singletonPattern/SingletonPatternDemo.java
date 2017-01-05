/**  
* @Title: SingletonPatternDemo.java
* @Package designModel.singletonPattern
* @Description: TODO
* @author 舒飞
* @date 2017-1-5 下午6:28:46 
*/ 
package designModel.singletonPattern;

public class SingletonPatternDemo {

	/**
	 * @Title: main
	 * @Description: 步骤 2 从 singleton 类获取唯一的对象。
	 * @param args
	 * @returnType void    
	 * @author 舒飞
	 * @date 2017-1-5下午6:28:46
	 */
	public static void main(String[] args) {
		//不合法的构造函数
	    //编译时错误：构造函数 SingleObject() 是不可见的
        //SingleObject object = new SingleObject();
		
		//获取唯一可用的对象
		SingleObject object = SingleObject.getInstance();
		//显示消息
		object.showMessage();
	}

}
