/**  
* @Title: AbstractFactory.java
* @Package designModel.abstractFactoryPattern.abstractFactory
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午6:35:04 
*/ 
package designModel.abstractFactoryPattern.abstractFactory;

import designModel.abstractFactoryPattern.color.Color;
import designModel.abstractFactoryPattern.shape.Shape;

/**
 * 步骤 5 为 Color 和 Shape 对象创建抽象类来获取工厂。
 */
public abstract class AbstractFactory {
	public abstract Color getColor(String color);
	public abstract Shape getShape(String shape);
}
