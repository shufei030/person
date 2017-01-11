/**  
* @Title: MediaAdapter.java
* @Package designModel.adapterPattern.step3
* @Description: TODO
* @author 舒飞
* @date 2017-1-11 上午10:47:41 
*/ 
package designModel.adapterPattern.step3;
//创建实现了 MediaPlayer 接口的适配器类。
import designModel.adapterPattern.step1.AdvancedMediaPlayer;
import designModel.adapterPattern.step1.MediaPlayer;
import designModel.adapterPattern.step2.Mp4Player;
import designModel.adapterPattern.step2.VlcPlayer;

public class MediaAdapter implements MediaPlayer {
	AdvancedMediaPlayer advancedMusicPlayer = null;
	@Override
	public void play(String audioType, String fileName) {
		 if(audioType.equalsIgnoreCase("vlc")){
	         advancedMusicPlayer.playVlc(fileName);
	      }else if(audioType.equalsIgnoreCase("mp4")){
	         advancedMusicPlayer.playMp4(fileName);
	      }
	}
	
	public MediaAdapter(String audioType){
	      if(audioType.equalsIgnoreCase("vlc") ){
	         advancedMusicPlayer = new VlcPlayer();			
	      } else if (audioType.equalsIgnoreCase("mp4")){
	         advancedMusicPlayer = new Mp4Player();
	      }	
	   }
}
