/**  
* @Title: Mp4Player.java
* @Package designModel.adapterPattern.step2
* @Description: TODO
* @author 舒飞
* @date 2017-1-11 上午10:44:58 
*/ 
package designModel.adapterPattern.step2;

import designModel.adapterPattern.step1.AdvancedMediaPlayer;
//创建实现了 AdvancedMediaPlayer 接口的实体类。
public class Mp4Player implements AdvancedMediaPlayer {

	@Override
	public void playVlc(String fileName) {
		 //什么也不做

	}

	@Override
	public void playMp4(String fileName) {
		System.out.println("Playing mp4 file. Name: "+ fileName);		

	}

}
