/**  
* @Title: Singleton.java
* @Package designModel.singletonPattern
* @Description: 步骤 1 创建一个 Singleton 类。
* @author 舒飞
* @date 2017-1-5 下午6:22:07 
*/ 
package designModel.singletonPattern;

public class SingleObject {
	//创建 SingleObject 的一个对象
	private static SingleObject instance = new SingleObject();
	//让构造函数为 private，这样该类就不会被实例化
    private SingleObject(){}
    
   
	public void showMessage(){
       System.out.println("Hello World!");
    }
	//获取唯一可用的对象
	public static SingleObject getInstance() {
		return instance;
	}
}
