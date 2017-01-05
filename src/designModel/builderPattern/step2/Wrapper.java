/**  
* @Title: Wrapper.java
* @Package designModel.builderPattern.step2
* @Description: 创建实现 Packing 接口的实体类。
* @author 舒飞
* @date 2017-1-5 下午6:05:54 
*/ 
package designModel.builderPattern.step2;

import designModel.builderPattern.step1.Packing;

public class Wrapper implements Packing {

	@Override
	public String pack() {		
		return "Wrapper";
	}

}
