/**  
* @Title: MenuSettingController.java
* @Package dm.menuSetting.controller
* @Description: TODO
* @author 舒飞
* @date 2016-11-4 上午18:37:18 
*/ 
package dm.menuSetting.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import dm.menuSetting.service.MenuSettingService;
import dm.util.WebUtil;

@Controller
@RequestMapping("menuSetting")
public class MenuSettingController {
	@Autowired
	private MenuSettingService menuSettingService;
	
	@RequestMapping(value="/menuSetting.act",method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> MenuSetting(HttpServletRequest request,HttpServletResponse response) throws Exception{
		return WebUtil.DynamicCallCURD(request, response, menuSettingService);
	}

}
