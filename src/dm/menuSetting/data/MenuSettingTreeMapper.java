/**  
* @Title: MenuSettingTreeMapper.java
* @Package dm.menuSetting.data
* @Description: TODO
* @author 舒飞
* @date 2016-11-4 上午8:55:49 
*/ 
package dm.menuSetting.data;

import java.util.List;
import java.util.Map;

import dm.com.model.Module;

public interface MenuSettingTreeMapper {

	List<Module> getModuleWithParent(Map<String,Object> params);
	void addModule(Module obj);
	void updateModule(Module obj);
	void deleteModule(Module obj);
	int getCountByPId(Map<String,Object> params);
}
