/**  
* @Title: ShapeFactory.java
* @Package designModel.factoryModel
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午5:51:03 
*/ 
package designModel.factoryModel;
/**
 * 步骤 3创建一个工厂，生成基于给定信息的实体类的对象。
 */
public class ShapeFactory {
	public Shape getShape(String shapeType){
		if(shapeType==null){
			return null;
		}
		if(shapeType.equalsIgnoreCase("CIRCLE")){
			return new CircleShapeImpl();
		}else if(shapeType.equalsIgnoreCase("RECTANGLE")){
			return new RectangleShapeImpl();
		}else if(shapeType.equalsIgnoreCase("SQUARE")){
	         return new SquareShapeImpl();
	    }
		return null;
	}
}
