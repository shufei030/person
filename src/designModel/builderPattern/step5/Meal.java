/**  
* @Title: Meal.java
* @Package designModel.builderPattern.step5
* @Description: 创建一个 Meal 类，带有上面定义的 Item 对象。
* @author 舒飞
* @date 2017-1-5 下午6:34:19 
*/ 
package designModel.builderPattern.step5;

import java.util.ArrayList;
import java.util.List;

import designModel.builderPattern.step1.Item;

public class Meal {
	private List<Item> items = new ArrayList<Item>();
	public void addItem(Item item){
		items.add(item);
	}
	public float getCost(){
		float cost = 0.0f;
		for(Item item:items){
			cost += item.price();
		}
		return cost;
	}
	 public void showItems(){
	      for (Item item : items) {
	         System.out.print("Item : "+item.name());
	         System.out.print(", Packing : "+item.packing().pack());
	         System.out.println(", Price : "+item.price());
	      }		
	   }	
}
