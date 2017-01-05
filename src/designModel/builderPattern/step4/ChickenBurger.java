/**  
* @Title: ChickenBurger.java
* @Package designModel.builderPattern.step4
* @Description: 创建扩展了 Burger的实体类。
* @author 舒飞
* @date 2017-1-5 下午6:26:37 
*/ 
package designModel.builderPattern.step4;

import designModel.builderPattern.step3.Burger;

public class ChickenBurger extends Burger {

	@Override
	public String name() {
		return "Chicken Burger";
	}

	@Override
	public float price() {		
		return 0.3f;
	}

}
