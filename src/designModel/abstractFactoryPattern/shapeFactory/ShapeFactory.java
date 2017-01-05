/**  
* @Title: ShapeFactory.java
* @Package designModel.abstractFactoryPattern.shapeFactory
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午6:50:09 
*/ 
package designModel.abstractFactoryPattern.shapeFactory;

import designModel.abstractFactoryPattern.abstractFactory.AbstractFactory;
import designModel.abstractFactoryPattern.color.Color;
import designModel.abstractFactoryPattern.shape.Shape;

public class ShapeFactory extends AbstractFactory{
	public Shape getShape(String shapeType){
		return null;
	}
	public Color getColor(String color){
		return null;
	}
}
