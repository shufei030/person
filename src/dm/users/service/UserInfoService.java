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
}
