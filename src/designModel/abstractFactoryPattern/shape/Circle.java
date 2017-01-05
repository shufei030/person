/**  
* @Title: Circle.java
* @Package designModel.abstractFactoryPattern.shape
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午6:29:46 
*/ 
package designModel.abstractFactoryPattern.shape;

public class Circle implements Shape {

	/* (non-Javadoc)
	 * 步骤 2 创建实现接口的实体类。
	 */
	@Override
	public void draw() {
		System.out.println("Inside Circle::draw() method.");
	}

}
