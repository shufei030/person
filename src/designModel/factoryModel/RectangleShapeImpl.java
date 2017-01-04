/**  
* @Title: ShapeImpl.java
* @Package designModel.factoryModel
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午5:43:50 
*/ 
package designModel.factoryModel;
/**
 * 步骤 2
 *创建实现接口的实体类。
 */
public class RectangleShapeImpl implements Shape{
	public void draw(){
		System.out.println("长方形");
	}
}
