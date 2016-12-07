/**  
* @Title: MenuSettingService.java
* @Package dm.menuSetting.service
* @Description: TODO
* @author 舒飞
* @date 2016-11-4 上午18:44:53 
*/ 
package dm.menuSetting.service;

import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dm.com.model.Module;
import dm.menuSetting.data.MenuSettingTreeMapper;

@Service
public class MenuSettingService {
	@Autowired
	private MenuSettingTreeMapper menuSettingTreeMapper;
	public List<Module> getMenuSettingTreeList(Map<String,Object> params){
		/*if(!SessionUtil.isAdmin()){
			params.put("u_id",SessionUtil.getCurrentUser().getU_id());
		}*/
		List<Module> modLists = menuSettingTreeMapper.getModuleWithParent(params);
		return modLists;
	}
	public void addModule(Module[] arr){
		for(Module obj:arr){
			menuSettingTreeMapper.addModule(obj);
		}
	}
	public void updateModule(Module[] arr){
		for(Module obj:arr){
			menuSettingTreeMapper.updateModule(obj);
		}
	}
	public void deleteModule(Module[] arr){
		for(Module obj:arr){
			menuSettingTreeMapper.deleteModule(obj);
		}
	}
	public int getCountByPId(Map<String,Object> params){
		return menuSettingTreeMapper.getCountByPId(params);
	}
}
