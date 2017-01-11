/**  
* @Title: SessionUtil.java
* @Package dm.util
* @Description: session工具
* @author 舒飞
* @date 2017-1-10 下午9:14:31 
*/ 
package dm.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class SessionUtil {
	/**
	 * 
	* @Title: getHttpRequest
	* @Description: 获得当前http请求
	* @returnType HttpServletRequest    
	* @author 舒飞
	* @date 2017-1-10下午9:21:43
	 */
	public static HttpServletRequest getHttpRequest(){
		//RequestContextHolder 要依赖于 org.springframework.web.context.request.RequestContextListener
		Object reqObj = RequestContextHolder.getRequestAttributes();
		return reqObj==null?null:((ServletRequestAttributes)reqObj).getRequest();
	}
	/**
	 * 
	* @Title: getSession
	* @Description: 获得当前session(如果有的话)
	* @returnType HttpSession    
	* @author 舒飞
	* @date 2017-1-10下午9:26:24
	 */
	public static HttpSession getSession(){
		HttpServletRequest request = getHttpRequest();
		if(request!=null){
			return request.getSession();
		}else{
			return null;
		}
	}
	/**
	 * 
	* @Title: getExistSession
	* @Description: 获得当前session(如果有的话)
	* @returnType HttpSession    
	* @author 舒飞
	* @date 2017-1-10下午9:30:13
	 */
	public static HttpSession getExistSession(){
		HttpServletRequest request = getHttpRequest();
		if(request!=null){
			//getSession(boolean create)
			//如果create设置true,返回当前的HttpSession,如果没有会话，创建一个新的会话
			//如果create设置false,如果当前有会话那就返回，如果没有会话，就返回null
			return request.getSession(false);
		}else{
			return null;
		}
	}
	/**
	 * 
	* @Title: setAttribute
	* @Description: SessionUtil
	* @param attrName
	* @param attr 
	* @author 舒飞
	* @date 2017-1-10下午9:37:51
	 */
	public static void setAttribute(String attrName,Object attr){
		if(attr!=null){
			HttpSession httpSession = getSession();
			if(httpSession!=null){
				httpSession.setAttribute(attrName,attr);
			}
		}else{
			HttpSession session = getExistSession();
			if(session!=null){
				session.removeAttribute(attrName);
			}
		}
	}
}
