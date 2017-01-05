/**  
* @Title: Rectangle.java
* @Package designModel.prototypePattern
* @Description: 创建扩展了上面抽象类的实体类。
* @author 舒飞
* @date 2017-1-5 下午6:01:17 
*/ 
package designModel.prototypePattern.step1;

import designModel.prototypePattern.step1.Shape;

public class Rectangle extends Shape{
	public Rectangle(){
		type = "Rectangle";
	}
	@Override
	public void draw() {
	      System.out.println("Inside Rectangle::draw() method.");
	   }
}
