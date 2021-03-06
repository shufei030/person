package dm.users.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dm.users.data.UserInfoMapper;
import dm.users.model.UserInfo;

@Service
public class UserInfoService {
	@Autowired
	private UserInfoMapper mapper;


	public List<UserInfo> getUserInfoList(Map<String,Object> params) {
		return mapper.getUserInfoList(params);
	}
	public void addUserInfo(UserInfo[] arr) {
		for(UserInfo obj: arr) {
			mapper.addUserInfo(obj);
		}
	}
	public void updateUserInfo(UserInfo[] arr) {
		for(UserInfo obj: arr) {
			mapper.updateUserInfo(obj);
		}
	}
	public void deleteUserInfo(UserInfo[] arr) {
		for(UserInfo obj: arr) {
			mapper.deleteUserInfo(obj);
		}
	}
	/**
	 * 
	* @Title: isExistsUser
	* @Description: 判断用户登录id是否存在
	* @param paramsMap
	* @return
	* @returnType boolean    
	* @author 舒飞
	* @date 2017-1-3上午18:18:31
	 */
	public boolean isExistsUser(Map<String, Object> paramsMap) {
		return mapper.getUserCount(paramsMap)>0;
	}
}
