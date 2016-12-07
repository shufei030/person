/**  
* @Title: MyJsonUtil.java
* @Package erp.util
* @Description: TODO
* @author 舒飞
* @date 2016-7-29 上午11:11:18 
*/ 
package dm.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

import org.codehaus.jackson.map.DeserializationConfig;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.JavaType;

public class MyJsonUtil {
	private static ObjectMapper objectMapper=initObjectMapper();
	private static ObjectMapper initObjectMapper(){
		ObjectMapper objectMapper = new ObjectMapper();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
		objectMapper.setDateFormat(dateFormat);
		
		// 设置输入时忽略在JSON字符串中存在但Java对象实际没有的属性  
		//deserConfig.set(DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES,false);
		objectMapper.configure(DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		return objectMapper;
	}
	/**
	 * 将字符串转list对象
	 * 
	 * @param <T>
	 * @param jsonStr
	 * @param cls
	 * @return
	 */
	public static <T> List<T> str2list(String jsonStr, Class<T> cls) {
		List<T> objList = null;
		try {
			JavaType t = objectMapper.getTypeFactory().constructParametricType(
					List.class, cls);
			objList = objectMapper.readValue(jsonStr, t);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return objList;
	}


}
