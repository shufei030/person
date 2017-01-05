/**  
* @Title: Rectangle.java
* @Package designModel.abstractFactoryPattern.shape
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午6:27:56 
*/ 
package designModel.abstractFactoryPattern.shape;

public class Rectangle implements Shape {

	/* (non-Javadoc)
	 * 步骤 2 创建实现接口的实体类。
	 */
	@Override
	public void draw() {
		System.out.println("长方形");

	}

}
