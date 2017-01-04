/**  
* @Title: CircleShapeImpl.java
* @Package designModel.factoryModel
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午5:49:29 
*/ 
package designModel.factoryModel;

public class CircleShapeImpl implements Shape {

	/* (non-Javadoc)
	 * 步骤 2 创建实现接口的实体类。
	 * @see designModel.factoryModel.Shape#draw()
	 */
	@Override
	public void draw() {
		System.out.println("圆形");
	}

}
