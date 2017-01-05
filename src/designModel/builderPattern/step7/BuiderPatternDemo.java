/**  
* @Title: BuiderPatternDemo.java
* @Package designModel.builderPattern.step7
* @Description: TODO
* @author 舒飞
* @date 2017-1-5 下午2:42:51 
*/ 
package designModel.builderPattern.step7;

import designModel.builderPattern.step5.Meal;
import designModel.builderPattern.step6.MealBuilder;

public class BuiderPatternDemo {

	/**
	 * @Title: main
	 * @Description: BuiderPatternDemo
	 * @param args
	 * @returnType void    
	 * @author 舒飞
	 * @date 2017-1-5下午6:42:51
	 */
	public static void main(String[] args) {
	  MealBuilder mealBuilder = new MealBuilder();

      Meal vegMeal = mealBuilder.prepareVegMeal();
      System.out.println("Veg Meal");
      vegMeal.showItems();
      System.out.println("Total Cost: " +vegMeal.getCost());

      Meal nonVegMeal = mealBuilder.prepareNonVegMeal();
      System.out.println("\n\nNon-Veg Meal");
      nonVegMeal.showItems();
      System.out.println("Total Cost: " +nonVegMeal.getCost());

	}

}
