/**  
* @Title: ApplicationSysService.java
* @Package com.service
* @Description: TODO
* @author 舒飞
* @date 2016-7-28 下午4:53:09 
*/ 
package dm.com.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dm.com.data.ModuleMapper;
import dm.com.model.Module;
@Service
public class ApplicationSysService {
	@Autowired
	private ModuleMapper moduleMapper;
	
	public List<Module> getModuleListByLoginId(Map<String,Object> params){
		List<Module> allModule=moduleMapper.getModuleList(params);
		return MakeModuleTree(0,allModule);
	}
	public List<Module> MakeModuleTree(int parentId,List<Module> allModule){
		//找出该节点id下属的所有子节点
		List<Module> mList = new ArrayList<Module>();
		for(Module module : allModule)	
		{
			if(module.getParentId()==parentId){
				mList.add(module);
			if( !module.getLeaf().equalsIgnoreCase("true")){
				module.setSubItem(MakeModuleTree(module.getId(),allModule));
			 }
			}
		}
		return mList;
	}

}
