Ext.define('dm.view.main.menu.MainMenuTree', {  
            extend : 'Ext.tree.Panel',  
            alias : 'widget.mainmenutree',  
            title : '系统菜单',  
            glyph : 0xf0c9,  
            rootVisible : false,  
            lines : true,  
            viewModel : 'main',  
  
            initComponent : function() {  
                this.store = Ext.create('Ext.data.TreeStore', {  
                            root : {  
                                text : '系统菜单',  
                                leaf : false,  //设置为true表明本节点没有子节点。 不会为本节点渲染展开图标或箭头。
                                expanded : true  //True如果节点是展开的。
                            }  
                        }); 
                console.log(this.store);
                var menus = this.getViewModel().get('systemMenu');  
                console.log(menus);
                var root = this.store.getRootNode();  
                console.log(root);
                for (var i in menus) {  
                    var menugroup = menus[i];  
                    var menuitem = root.appendChild({  
                                text : menugroup.text,  
                                expanded : menugroup.expanded,  
                                icon : menugroup.icon,  
                                glyph : menugroup.glhpy  
                            });  
                    for (var j in menugroup.items) {  
                        var menumodule = menugroup.items[j];  
                        var childnode = {  
                            moduleId : menumodule.text,  
                            moduleName : menumodule.module,  
                            text : menumodule.text,  
                            leaf : true  
                        };  
                        menuitem.appendChild(childnode);  
                    }  
                }  
                this.callParent(arguments);  
            }  
        })  