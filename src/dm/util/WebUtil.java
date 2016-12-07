/**  
* @Title: WebUtil.java
* @Package erp.util
* @Description: TODO
* @author 舒飞
* @date 2016-7-29 上午10:46:51 
*/ 
package dm.util;

import java.lang.reflect.Array;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Collection;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;

import dm.com.model.SortModel;

public class WebUtil {
	private static final String IS_URDMETHOD = "IS_URDMETHOD";
	private static final String QRY_PARAMS = "QRY_PARAMS";
	private static ObjectMapper objectMapper = new ObjectMapper();
//	public static ObjectMapper getObjectMapper() {
//		return objectMapper;
//	}
//
//	public static void setObjectMapper(ObjectMapper objectMapper) {
//		WebUtil.objectMapper = objectMapper;
//	}

	public static  <T> Map<String,Object> DynamicCallCURD(HttpServletRequest request,HttpServletResponse response,T bizService) throws Exception{
        Map<String,Object> respMap = WebUtil.getDefaultResponseMap();	//默认响应参数 格式:Map	
		Map<String,Object> paramMap = new HashMap<String,Object>(); //请求参数 格式:Map
		//需要指定服务方法名
		String callMethod = request.getParameter(Const.AJAX_SERVICE_METHOD);//获取method名字
		if(WebUtil.isEmpty(callMethod)){
			WebUtil.makeErrorMsg(new Exception("服务方法[method]未指定或不正确!"), respMap);
			return respMap;
		}else{
			paramMap.put(Const.AJAX_SERVICE_METHOD,callMethod);// eg {"method":"getUserMaterialList"}
		}
		//U.C.D服务方法必须指定data参数 增删改
		String callData = request.getParameter(Const.AJAX_DATA_ROOT); //获取前台传入的data参数值
		boolean isCUDMethod = callData==null?false:true;//如果data参数值为空则是增删改方法
		paramMap.put(IS_URDMETHOD,isCUDMethod); //请求Map eg:{"method":"addUserMaterial","IS_URDMETHOD":true}
		if(isCUDMethod){
			if(WebUtil.isEmpty(callData)){
				WebUtil.makeErrorMsg(new Exception("U.C.D服务方法所需参数[data]未指定或不正确!"), respMap);
				return respMap;
			}else{
				paramMap.put(Const.AJAX_DATA_ROOT,callData);//如果data参数值为不为空,则请求参数为 eg:{"method":"addUserMaterial","IS_URDMETHOD":true,"data":{a}}
			}
		}
		
		//制造查询参数Map
		Map<String,Object> qryParam = WebUtil.getDefaultParamsMap(request);
		//非CUD添加排序方法
		WebUtil.addOrderBySQL2(qryParam);
		paramMap.put(QRY_PARAMS, qryParam);
		@SuppressWarnings("unused")
		boolean callRsult = WebUtil.DynamicCall(bizService,paramMap, respMap);	
	   return respMap;
	}
	
	/**
	 * 
	* @Title: getDefaultResponseMap  
	* @Description: WebUtil STEP1:默认响应参数 格式:Map
	* @return
	* @returnType Map<String,Object>    
	* @author 舒飞
	* @date 2016-7-29上午10:53:12
	 */
	public static Map<String,Object> getDefaultResponseMap(){
		Map<String,Object> respMap = new HashMap<String,Object>();
		respMap.put(Const.AJAX_SERVICE_SUCCESS, true);//success
		respMap.put(Const.AJAX_SERVICE_MESSAGE,Const.AJAX_COMPLETE_MSG);//message
		respMap.put(Const.AJAX_SERVICE_TOTAL,0);//total
		respMap.put(Const.AJAX_ERR_CODE,Const.AJAX_ERR_CODE_200_OK);//200
		respMap.put(Const.AJAX_DATA_ROOT, "");//data
		return respMap;
	}
	
	/**
	 * 判断对象是否Empty(null或元素为0)<br>
	 * 实用于对如下对象做判断:String Collection及其子类 Map及其子类
	 * 
	 * @param pObj
	 *            待检查对象
	 * @return boolean 返回的布尔值
	 */
	public static <T> boolean isEmpty(T pObj) {
		if (pObj == null)
			return true;
		if (pObj == "")
			return true;
		if (pObj instanceof String) {
			if (((String) pObj).length() == 0) {
				return true;
			}
		} else if (pObj instanceof Collection<?>) {
			if (((Collection<?>) pObj).size() == 0) {
				return true;
			}
		} else if (pObj instanceof Map<?,?>) {
			if (((Map<?,?>) pObj).size() == 0) {
				return true;
			}
		}
		return false;
	}
	
	//产生标准错误消息
	public static void makeErrorMsg(Exception e,Map<String,Object> respMap){
		StringBuilder sb = new StringBuilder();
		sb.append("错误发生在:<br/>");
		StackTraceElement[] stacks = e.getStackTrace();
		for(StackTraceElement stack:stacks){
			sb.append(stack.toString()).append("<br/>");
		}
		sb.append("错误详情:<br/>");
		sb.append(e.getMessage());
		respMap.put(Const.AJAX_SERVICE_SUCCESS, false);
		respMap.put(Const.AJAX_SERVICE_MESSAGE,sb.toString());
	}
	
	//从Request中一次读取参数到Map中
	public static Map<String,Object> getDefaultParamsMap(HttpServletRequest request){
		Map<String,Object> paramMap = new HashMap<String,Object>();
		/*
		 *  Enumeration是java.util中的一个接口类，在Enumeration中封装了有关枚举数据集合的方法。
　		 *  在Enumeration中提供了方法hawMoreElement()来判断集合中是束还有其它元素和方法nextElement()来获取下一个元素。
		 *  利用这两个方法可以依次获得集合中元素。
		 *  Enumeration req = request.getParameterNames();
		 *	 while (req.hasMoreElements()) {
		 *	     Object obj = (Object) req.nextElement();
		 *	     //System.out.println("obj.toString()==="+obj.toString());
		 *	     if (obj.toString().trim().equals("LastPage")) {   
		 *	         System.out.println("LastPage \n");
		 *	     } else if (obj.toString().trim().equals("NextPage")) {
		 *	        System.out.println("NextPage");
		 *	     }
		 *	 }
		 * */
		Enumeration<String> pNames = request.getParameterNames();
		while(pNames.hasMoreElements()){
			String pName =pNames.nextElement();
			paramMap.put(pName, request.getParameter(pName));
		}
		//清除掉几个非查询参数
		paramMap.remove(Const.AJAX_SERVICE_METHOD);//method
		paramMap.remove(Const.AJAX_SERVICE_MODEL);//model
		paramMap.remove(Const.VALIDATE_VTEXT0);//vText0
		paramMap.remove(Const.VALIDATE_VTEXT1);//vText1
		paramMap.remove(Const.VALIDATE_FIELDS);//valid_fields
		paramMap.remove(Const.AJAX_DATA_ROOT);//data
		return paramMap;
	}
	
	/**功能：给MAP查询参数添加 order by参数**/
	public static void addOrderBySQL2(Map<String,Object> params){
			if(params.get("sort")!=null && !"".equals(params.get("sort")) 
					&& params.get("sort").toString().contains("property") && params.get("sort").toString().contains("direction")){
				List<SortModel> sortList=MyJsonUtil.str2list(params.get("sort").toString(), SortModel.class);
				StringBuilder orderBySQL=new StringBuilder("");
				int length=sortList.size();
				for(int i=0;i<length-1;i++){
					orderBySQL.append(sortList.get(i).getProperty()).append(" ").append(sortList.get(i).getDirection()).append(",");
				}
				if(length>0){
					orderBySQL.append(sortList.get(length-1).getProperty()).append(" ").append(sortList.get(length-1).getDirection());
				}
				params.put("sort", orderBySQL.toString());
			}
	}
	
	@SuppressWarnings("unchecked")
	private static  <T>  boolean DynamicCall(Object bizService,Map<String,Object> paramMap,Map<String,Object> respMap)throws Exception{
		String callMethod =paramMap.get(Const.AJAX_SERVICE_METHOD)!=null?paramMap.get(Const.AJAX_SERVICE_METHOD).toString():"";
		boolean isCUDMethod = paramMap.get(IS_URDMETHOD)!=null?(Boolean)paramMap.get(IS_URDMETHOD):false;
		//找到目标方法，
		//这里约定: 	1.所需的服务的方法都只有一个Map类型的参数
		//         	2.C.U.D方法建议分别以add/update/delete开头
		Class<T[]> modelArrayType = null;
		Method tarMethod = null;
		boolean isArrayParam = false;
		//根据方法名和参数类型查找服务方法
		Method[] mArray=bizService.getClass().getMethods();
		for(Method method:mArray){
			if(method.getName().equals(callMethod)){
				Class<?>[] pClassArray= method.getParameterTypes();
				if(pClassArray.length ==1){
					//只能一个参数
					if(isCUDMethod){
						//C.U.D方法
						if(pClassArray[0].isArray()){
							modelArrayType = (Class<T[]>)pClassArray[0];
							isArrayParam = true;
						}
						else{
							modelArrayType = (Class<T[]>)Array.newInstance(pClassArray[0],0).getClass();
						}
						tarMethod = method;	
					}else if(pClassArray[0].equals(Map.class))
						//查询方法必须是Map为参数
						tarMethod = method;
					break;
				}
			}
		}
		if(WebUtil.isEmpty(tarMethod)){
			WebUtil.makeErrorMsg(new Exception("指定的服务方法[method="+callMethod+"]不存在或参数不匹配."), respMap);
			return false;
		}
		
		if(!isCUDMethod){
			//非C.U.D 类的方法
			try{
				Map<String,Object> qryParams = paramMap.get(QRY_PARAMS)!=null?(Map<String,Object>)paramMap.get(QRY_PARAMS):null;
				Object result = null;
				try{					
					result =tarMethod.invoke(bizService,new Object[]{qryParams});
				}catch(InvocationTargetException e){
					 System.out.println("此处接收被调用方法内部未被捕获的异常");  
					 Throwable t = e.getTargetException();// 获取目标异常  
			         e.printStackTrace(); 
					respMap.put(Const.AJAX_ERR_CODE,Const.AJAX_ERR_CODE_300_ERROR);
					throw new Exception(e.getTargetException().getMessage());
				}
				if(result instanceof Integer||result instanceof Long)
					respMap.put(Const.AJAX_SERVICE_TOTAL, result);
				else if(qryParams.get(Const.AJAX_SERVICE_TOTAL)!=null){
					respMap.put(Const.AJAX_SERVICE_TOTAL, qryParams.get(Const.AJAX_SERVICE_TOTAL));
				} 
				respMap.put(Const.AJAX_DATA_ROOT, result);
			}catch(Exception e){
				WebUtil.makeErrorMsg(e, respMap);
				//throw new Exception(e.getMessage());
				//logger1.error(e.getMessage());
				return false;
			}
		}else{
			//C.U.D 类的方法
			try{
				String postData = paramMap.get(Const.AJAX_DATA_ROOT)!=null?paramMap.get(Const.AJAX_DATA_ROOT).toString():null;
				if(WebUtil.isEmpty(postData)){
					throw new Exception("提交的数据不符合标准!正确的样例如下{data=[{xxxx:yyyy}]}");
				}
				T[] paramArray =objectMapper.readValue(postData,modelArrayType);
				
				//插入一个数据库类型参数
				//for (T t : paramArray) {
				//	if(t instanceof gp.common.Model){
				//		((gp.common.Model)t).setDB_TYPE(WebUtil.getDB_TYPE());
				//	}
				//}
				//支持两种模式调用，
				//如果服务方法本身支持数组那么直接调用
				//否则根据数组循环调用服务方法
				try{
					if(isArrayParam)
						tarMethod.invoke(bizService,new Object[]{paramArray});
					else
						for(T item:paramArray){
							tarMethod.invoke(bizService,new Object[]{item});
						}
				}catch(InvocationTargetException e){
					respMap.put(Const.AJAX_ERR_CODE,Const.AJAX_ERR_CODE_300_ERROR);
					throw new Exception(e.getTargetException().getMessage());
				}
				respMap.put(Const.AJAX_DATA_ROOT, paramArray);
			}catch(Exception e){
				System.out.println("此处接收被调用方法内部未被捕获的异常");   
		         e.printStackTrace();
				WebUtil.makeErrorMsg(e, respMap);
				return false;
			}
		}	
		
		return true;
	}
	
	

}
