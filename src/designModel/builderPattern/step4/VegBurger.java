/**  
* @Title: VegBurger.java
* @Package designModel.builderPattern.step4
* @Description: 创建扩展了 Burger 和 ColdDrink 的实体类。
* @author 舒飞
* @date 2017-1-5 下午6:23:05 
*/ 
package designModel.builderPattern.step4;

import designModel.builderPattern.step3.Burger;

public class VegBurger extends Burger{

	@Override
	public String name() {
		return "Veg Burger";
	}

	@Override
	public float price() {		
		return 0.25f;
	}
	
}
