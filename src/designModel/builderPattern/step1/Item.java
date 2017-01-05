/**  
* @Title: Item.java
* @Package designModel.builderPattern.step1
* @Description: 创建一个表示食物条目和食物包装的接口。
* @author 舒飞
* @date 2017-1-5 下午6:01:49 
*/ 
package designModel.builderPattern.step1;

public interface Item {
	public String name();
    public Packing packing();
    public float price();	
}
