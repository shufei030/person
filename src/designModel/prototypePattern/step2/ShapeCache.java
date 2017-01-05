/**  
* @Title: ShapeCache.java
* @Package designModel.prototypePattern.step2
* @Description: 创建一个类，从数据库获取实体类，并把它们存储在一个 Hashtable 中。
* @author 舒飞
* @date 2017-1-5 下午6:13:38 
*/ 
package designModel.prototypePattern.step2;

import java.util.Hashtable;

import designModel.prototypePattern.step1.Circle;
import designModel.prototypePattern.step1.Rectangle;
import designModel.prototypePattern.step1.Shape;
import designModel.prototypePattern.step1.Square;

public class ShapeCache {
	private static Hashtable<String, Shape> shapeMap = new Hashtable<String, Shape>();
	 public static Shape getShape(String shapeId) {
      Shape cachedShape = shapeMap.get(shapeId);
      return (Shape) cachedShape.clone();
   }
	   // 对每种形状都运行数据库查询，并创建该形状
	   // shapeMap.put(shapeKey, shape);
	   // 例如，我们要添加三种形状
	   public static void loadCache() {
	      Circle circle = new Circle();
	      circle.setId("1");
	      shapeMap.put(circle.getId(),circle);

	      Square square = new Square();
	      square.setId("2");
	      shapeMap.put(square.getId(),square);

	      Rectangle rectangle = new Rectangle();
	      rectangle.setId("3");
	      shapeMap.put(rectangle.getId(),rectangle);
	   }
}
