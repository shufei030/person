/**  
* @Title: FactoryDemo.java
* @Package designModel.factoryModel
* @Description: TODO
* @author 舒飞
* @date 2017-1-4 下午5:57:31 
*/ 
package designModel.factoryModel;

public class FactoryDemo {

	/**
	 * @Title: main
	 * @Description: 步骤 4 使用该工厂，通过传递类型信息来获取实体类的对象。
	 * @param args
	 * @returnType void    
	 * @author 舒飞
	 * @date 2017-1-4下午5:57:31
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ShapeFactory shapeFactory = new ShapeFactory();
		//获取 Circle 的对象，并调用它的 draw 方法
		Shape shape1 = shapeFactory.getShape("CIRCLE");
		//调用 Circle 的 draw 方法
		shape1.draw();
		
		//获取 Rectangle 的对象，并调用它的 draw 方法
        Shape shape2 = shapeFactory.getShape("RECTANGLE");
        //调用 Rectangle 的 draw 方法
        shape2.draw();

        //获取 Square 的对象，并调用它的 draw 方法
        Shape shape3 = shapeFactory.getShape("SQUARE");
        //调用 Square 的 draw 方法
        shape3.draw();
	}

}
