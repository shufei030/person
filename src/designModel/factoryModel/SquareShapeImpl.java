/**  
* @Title: SquareShapeImpl.java
* @Package designModel.factoryModel
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午5:48:37 
*/ 
package designModel.factoryModel;

public class SquareShapeImpl implements Shape {

	/* (non-Javadoc)
	 * 步骤 2 创建实现接口的实体类。
	 */
	@Override
	public void draw() {
		System.out.println("正方形");
	}

}
