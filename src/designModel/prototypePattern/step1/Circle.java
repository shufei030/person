/**  
* @Title: Circle.java
* @Package designModel.prototypePattern.step1
* @Description: TODO
* @author 舒飞
* @date 2017-1-5 下午6:12:09 
*/ 
package designModel.prototypePattern.step1;

public class Circle extends Shape{
	 public Circle(){
	     type = "Circle";
	   }

    @Override
    public void draw() {
      System.out.println("Inside Circle::draw() method.");
    }
}
