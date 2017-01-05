/**  
* @Title: Blue.java
* @Package designModel.abstractFactoryPattern.color
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午6:33:10 
*/ 
package designModel.abstractFactoryPattern.color;

public class Blue implements Color {

	/* (non-Javadoc)
	 * 步骤 4 创建实现接口的实体类。
	 */
	@Override
	public void fill() {
		System.out.println("Inside Blue::fill() method.");
	}

}
