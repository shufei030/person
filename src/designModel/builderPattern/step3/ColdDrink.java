/**  
* @Title: ColdDrink.java
* @Package designModel.builderPattern.step3
* @Description: 创建实现 Item 接口的抽象类，该类提供了默认的功能。
* @author 舒飞
* @date 2017-1-5 下午6:17:55 
*/ 
package designModel.builderPattern.step3;

import designModel.builderPattern.step1.Item;
import designModel.builderPattern.step1.Packing;
import designModel.builderPattern.step2.Bottle;

public abstract class ColdDrink implements Item{
	
	@Override
	public Packing packing(){
		return new Bottle();
	}
	@Override
	public abstract float price();
}
