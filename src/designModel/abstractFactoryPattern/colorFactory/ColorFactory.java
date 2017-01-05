/**  
* @Title: ColorFactory.java
* @Package designModel.abstractFactoryPattern.colorFactory
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午6:54:08 
*/ 
package designModel.abstractFactoryPattern.colorFactory;

import designModel.abstractFactoryPattern.abstractFactory.AbstractFactory;
import designModel.abstractFactoryPattern.color.Blue;
import designModel.abstractFactoryPattern.color.Color;
import designModel.abstractFactoryPattern.color.Green;
import designModel.abstractFactoryPattern.color.Red;
import designModel.abstractFactoryPattern.shape.Shape;

public class ColorFactory extends AbstractFactory{
		public Shape getShape(String shapeType) {
		      return null;
		   }
	   
	   public Color getColor(String color) {
	      if(color == null){
	         return null;
	      }		
	      if(color.equalsIgnoreCase("RED")){
	         return new Red();
	      } else if(color.equalsIgnoreCase("GREEN")){
	         return new Green();
	      } else if(color.equalsIgnoreCase("BLUE")){
	         return new Blue();
	      }
	      return null;
	   }
}
