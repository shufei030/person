/**  
* @Title: PrototypePatternDemo.java
* @Package designModel.prototypePattern.step3
* @Description: TODO
* @author 舒飞
* @date 2017-1-5 下午6:17:07 
*/ 
package designModel.prototypePattern.step3;

import designModel.prototypePattern.step1.Shape;
import designModel.prototypePattern.step2.ShapeCache;

public class PrototypePatternDemo {

	/**
	 * @Title: main
	 * @Description: PrototypePatternDemo 使用 ShapeCache 类来获取存储在 Hashtable 中的形状的克隆。
	 * @param args
	 * @returnType void    
	 * @author 舒飞
	 * @date 2017-1-5下午6:17:07
	 */
	public static void main(String[] args) {
		  ShapeCache.loadCache();

	      Shape clonedShape = (Shape) ShapeCache.getShape("1");
	      System.out.println("Shape : " + clonedShape.getType());		

	      Shape clonedShape2 = (Shape) ShapeCache.getShape("2");
	      System.out.println("Shape : " + clonedShape2.getType());		

	      Shape clonedShape3 = (Shape) ShapeCache.getShape("3");
	      System.out.println("Shape : " + clonedShape3.getType());	

	}

}
