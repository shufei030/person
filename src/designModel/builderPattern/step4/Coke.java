/**  
* @Title: Coke.java
* @Package designModel.builderPattern.step4
* @Description: 创建扩展了 ColdDrink 的实体类。
* @author 舒飞
* @date 2017-1-5 下午6:28:30 
*/ 
package designModel.builderPattern.step4;

import designModel.builderPattern.step3.ColdDrink;

public class Coke extends ColdDrink {

	@Override
	public String name() {		
		return "Coke";
	}

	@Override
	public float price() {	
		return 1.5f;
	}

}
