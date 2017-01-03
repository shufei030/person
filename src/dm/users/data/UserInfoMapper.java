package dm.users.data;

import java.util.List;
import java.util.Map;

import dm.users.model.UserInfo;

public interface UserInfoMapper {
	public List<UserInfo> getUserInfoList(Map<String,Object> params);
	public void addUserInfo(UserInfo obj);
	public void updateUserInfo(UserInfo obj);
	public void deleteUserInfo(UserInfo obj);
	public int getUserCount(Map<String,Object> params);
}
