package dm.users.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import dm.users.service.UserInfoService;
import dm.util.WebUtil;
@Controller
@RequestMapping("users")
public class UsersController {

	@Autowired
	private UserInfoService userInfoService; 
	
	//
	@RequestMapping(value="/usersInfo.act",method=RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> MenuSetting(HttpServletRequest request,HttpServletResponse response) throws Exception{
		return WebUtil.DynamicCallCURD(request, response, userInfoService);
	}
}
