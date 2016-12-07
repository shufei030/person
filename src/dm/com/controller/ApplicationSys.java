/**  
* @Title: ApplicationSys.java
* @Package com.controller
* @Description: TODO
* @author 舒飞
* @date 2016-7-28 下午4:49:14 
*/ 
package dm.com.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import dm.com.model.Module;
import dm.com.service.ApplicationSysService;
import dm.util.WebUtil;


@Controller
@RequestMapping("main")
public class ApplicationSys {
//	@Resource(name="applicationSysService")
	@Autowired
	private ApplicationSysService applicationSysService;
	
	@RequestMapping(value="/Modules.act",method=RequestMethod.POST)
	@ResponseBody 
	public Map<String,Object> applicationSys(HttpServletRequest request,HttpServletResponse response) throws Exception{
		return WebUtil.DynamicCallCURD(request, response, applicationSysService);
	}
	
   @RequestMapping("/showUser")  
   public String toIndex(HttpServletRequest request,Model model){  
//       int userId = Integer.parseInt(request.getParameter("id"));  
       Map<String,Object> params = null;
       List<Module> modulelist = this.applicationSysService.getModuleListByLoginId(params);
//       Module user = (Module) this.applicationSysService.getModuleListByLoginId(params); 
       Module user = modulelist.get(0);
       System.out.println(user);
       System.out.println(user.getId());
       model.addAttribute("user", user);  
       return "show";  
   } 

}
