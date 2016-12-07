/**  
* @Title: Module.java
* @Package com.model
* @Description: TODO
* @author 舒飞
* @date 2016-7-28 下午5:19:34 
*/ 
package dm.com.model;

import java.util.Date;
import java.util.List;

public class Module {
	private int      id;         
	private int      parentId;   
	private String   mod_type;   
	private String   mod_code;   
	private String   text;       
	private String   textCls;    
	private String   expanded;   
	private String   leaf;
	private String   isvalid;
	private String   urltype;
	private String   url;        
	private String   urltarget;  
	private String   icon;       
	private String   iconCls;    
	private String   qtip;       
	private String   qtitle;     
	private int      order_seq;  
	private String   remark;     
	private Date     create_date;
	private Date     modify_date;
	private String ctrller;
	private String jsview;
	private String extraCfg;
	private String show_type;
	private int[] roles;
	private String module;
	private String rolesStr;
	private List<Module> subItem;
	
	
	public String getShow_type() {
		return show_type;
	}
	public void setShow_type(String show_type) {
		this.show_type = show_type;
	}
	public List<Module> getSubItem() {
		return subItem;
	}
	public void setSubItem(List<Module> subItem) {
		this.subItem = subItem;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getParentId() {
		return parentId;
	}
	public void setParentId(int parentId) {
		this.parentId = parentId;
	}
	public String getMod_type() {
		return mod_type;
	}
	public void setMod_type(String mod_type) {
		this.mod_type = mod_type;
	}
	public String getMod_code() {
		return mod_code;
	}
	public void setMod_code(String mod_code) {
		this.mod_code = mod_code;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getTextCls() {
		return textCls;
	}
	public void setTextCls(String textCls) {
		this.textCls = textCls;
	}
	public String getExpanded() {
		return expanded;
	}
	public void setExpanded(String expanded) {
		this.expanded = expanded;
	}
	public String getLeaf() {
		return leaf;
	}
	public void setLeaf(String leaf) {
		this.leaf = leaf;
	}
	public String getIsvalid() {
		return isvalid;
	}
	public void setIsvalid(String isvalid) {
		this.isvalid = isvalid;
	}
	public String getUrltype() {
		return urltype;
	}
	public void setUrltype(String urltype) {
		this.urltype = urltype;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUrltarget() {
		return urltarget;
	}
	public void setUrltarget(String urltarget) {
		this.urltarget = urltarget;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getIconCls() {
		return iconCls;
	}
	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}
	public String getQtip() {
		return qtip;
	}
	public void setQtip(String qtip) {
		this.qtip = qtip;
	}
	public String getQtitle() {
		return qtitle;
	}
	public void setQtitle(String qtitle) {
		this.qtitle = qtitle;
	}
	public int getOrder_seq() {
		return order_seq;
	}
	public void setOrder_seq(int order_seq) {
		this.order_seq = order_seq;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Date getCreate_date() {
		return create_date;
	}
	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}
	public Date getModify_date() {
		return modify_date;
	}
	public void setModify_date(Date modify_date) {
		this.modify_date = modify_date;
	}
	public String getCtrller() {
		return ctrller;
	}
	public void setCtrller(String ctrller) {
		this.ctrller = ctrller;
	}
	public String getJsview() {
		return jsview;
	}
	public void setJsview(String jsview) {
		this.jsview = jsview;
	}
	public String getExtraCfg() {
		return extraCfg;
	}
	public void setExtraCfg(String extraCfg) {
		this.extraCfg = extraCfg;
	}
	public int[] getRoles() {
		return roles;
	}
	public void setRoles(int[] roles) {
		this.roles = roles;
	}
	public String getModule() {
		return module;
	}
	public void setModule(String module) {
		this.module = module;
	}
	public String getRolesStr() {
		return rolesStr;
	}
	public void setRolesStr(String rolesStr) {
		this.rolesStr = rolesStr;
	}
	/**
	* @Title: addAttribute
	* @Description: Module
	* @param string
	* @param user
	* @returnType void    
	* @author 舒飞
	* @date 2016-8-1上午11:01:57
	*/
	public void addAttribute(String string, Module user) {
		// TODO Auto-generated method stub
		
	}
	
	

}
