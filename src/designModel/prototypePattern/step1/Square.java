/**  
* @Title: Square.java
* @Package designModel.prototypePattern.step1
* @Description: TODO
* @author 舒飞
* @date 2017-1-5 下午6:11:12 
*/ 
package designModel.prototypePattern.step1;

public class Square extends Shape{
	   public Square(){
	     type = "Square";
	   }
	  @Override
	   public void draw() {
	      System.out.println("Inside Square::draw() method.");
	   }
}
