/**  
* @Title: MealBuilder.java
* @Package designModel.builderPattern.step5
* @Description: 创建一个 MealBuilder 类，实际的 builder 类负责创建 Meal 对象。
* @author 舒飞
* @date 2017-1-5 下午6:32:28 
*/ 
package designModel.builderPattern.step6;

import designModel.builderPattern.step4.ChickenBurger;
import designModel.builderPattern.step4.Coke;
import designModel.builderPattern.step4.Pepsi;
import designModel.builderPattern.step4.VegBurger;
import designModel.builderPattern.step5.Meal;

public class MealBuilder {
	public Meal prepareVegMeal (){
	      Meal meal = new Meal();
	      meal.addItem(new VegBurger());
	      meal.addItem(new Coke());
	      return meal;
	   }   

	   public Meal prepareNonVegMeal (){
	      Meal meal = new Meal();
	      meal.addItem(new ChickenBurger());
	      meal.addItem(new Pepsi());
	      return meal;
	   }
}
