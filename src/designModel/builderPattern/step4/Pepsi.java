/**  
* @Title: Pepsi.java
* @Package designModel.builderPattern.step4
* @Description: 创建扩展了ColdDrink 的实体类。
* @author 舒飞
* @date 2017-1-5 下午6:29:58 
*/ 
package designModel.builderPattern.step4;

import designModel.builderPattern.step3.ColdDrink;

public class Pepsi extends ColdDrink {

	@Override
	public String name() {
		return "Pepsi";
	}

	@Override
	public float price() {
		return 2.0f;
	}

}
