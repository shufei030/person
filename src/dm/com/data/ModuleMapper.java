/**  
* @Title: ModuleMapper.java
* @Package com.data
* @Description: TODO
* @author 舒飞
* @date 2016-7-28 下午5:22:58 
*/ 
package dm.com.data;

import java.util.List;
import java.util.Map;

import dm.com.model.Module;

public interface ModuleMapper {
	List<Module> getModuleList(Map<String,Object> params);

}
