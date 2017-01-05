/**  
* @Title: Bottle.java
* @Package designModel.builderPattern.step2
* @Description: 创建实现 Packing 接口的实体类。
* @author 舒飞
* @date 2017-1-5 下午6:07:16 
*/ 
package designModel.builderPattern.step2;

import designModel.builderPattern.step1.Packing;

public class Bottle implements Packing {

	@Override
	public String pack() {	
		return "Bottle";
	}

}
