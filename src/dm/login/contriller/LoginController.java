/**  
* @Title: LoginController.java
* @Package dm.login.contriller
* @Description: 
* @author 舒飞
* @date 2017-1-7 下午6:41:35 
*/ 
package dm.login.contriller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import dm.util.SessionUtil;
import dm.util.VerifyCodeUtils;


@Controller
@RequestMapping("login")
public class LoginController {
	
	@RequestMapping(value="/getVerifyCode.act",method=RequestMethod.GET)
	public void getVerifyCode(HttpServletRequest request,HttpServletResponse response) throws Exception{
		//设置浏览器不缓存本页
		response.setHeader("Pragma", "No-cache");  
        response.setHeader("Cache-Control", "no-cache");  
        response.setDateHeader("Expires", 0);  
        response.setContentType("image/jpeg");  
		//生成验证码，写入用户session
		String verifyCode=VerifyCodeUtils.generateVerifyCode(4);
		SessionUtil.setAttribute("verify_code",verifyCode);
		
		//输出验证码给客户端
		//生成图片  
        int w = 90, h = 37;  
		VerifyCodeUtils.outputImage(w, h, response.getOutputStream(), verifyCode); 
	}	

}
