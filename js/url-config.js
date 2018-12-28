//var b_url = 'http://192.168.0.112:4001';
//var b_url = 'http://139.199.72.65:8850/v1/mk/backstage';
var b_url ='http://123.207.96.219:8850/v1/mk';
var f_url = 'http://123.207.96.219:81';
var menuStr = '';
var jsonMenu;

//创建菜单树
function createMenu(menus) {
	if(menus.length < 1) {
		return;
	}

	menuStr = "<ul class=\"layui-nav layui-nav-tree layui-inline\" lay-filter=\"demo\" style=\"margin-right: 10px;\">";

	for(var i = 0; i < menus.length; i++) {
		var url = '#';
		if(menus[i].menuUrl !== null && menus[i].menuUrl !== '') {
			url = f_url + menus[i].menuUrl;
		}
		var id = menus[i].menuId;
		var path = menus[i].path;
		var count = menus[i].children.length;
		//添加第一级菜单
		menuStr += '<li class="layui-nav-item"  id="' + 'menu' + id + '"' + ' path="' + path + '"' + ' count="' + count + '"  >';
		menuStr += '<a href="' + url + '"' + 'id="' + menus[i].menuId + '" >' + menus[i].name + '</a>';

		for(var j = 0; j < menus[i].children.length; j++) {
			var child = menus[i].children[j];
			//console.log('menus['+i+'].children['+j+']:'+JSON.stringify(child));
			addChildNode(child);
			//alert(JSON.stringify(child));
		}
		menuStr += '</li>';
	}

	menuStr += '</ul>';
}

//采用递归添加子菜单
function addChildNode(d) {
	var url = '#';
	if(d.menuUrl !== null && d.menuUrl !== '') {
		url = f_url + d.menuUrl;
	}
	var id = d.menuId;
	var path = d.path;
	var c_count = d.children.length;

	menuStr += '<dl class="layui-nav-child">';
	menuStr += '<dd id="' + 'menu' + d.menuId + '"' + ' path="' + path + '" ' + ' count="' + c_count + '" >';
	menuStr += '<a href="' + url + '"' + 'id="' + d.menuId + '" >' + d.name + '</a>';
	for(var k = 0; k < d.children.length; k++) {
		addChildNode(d.children[k]);
	}
	menuStr += '</dd>';
	menuStr += '</dl>';
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toUTCString();
	var path = 'path=/';
	document.cookie = cname + '=' + cvalue + '; ' + expires + ';' + path;
	///monkey/index.html
}
//获取cookie
/*function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}*/

function getCookie(cname) //取cookies函数        
{   
	var arr = document.cookie.match(new RegExp("(^| )" + cname + "=([^;]*)(;|$)"));    
	if(arr != null)
		return unescape(arr[2]);
	return null;

}

//删除cookie  
function deleteCookie(cname) {
	setCookie(cname, "", -1);
}

//字符串操作
function stringOpr() {
	//获取子串
	//stringObject.substr(start[,length])

	//查找子串
	//indexOf(string) 返回子串第一次出现的位置，从0开始，若没有则返回-1；
}
//设置节点
function SetNodes() {
	//关键节点属性：节点id,路径，孩子数量

	//若果是根节点

	//如果是中间节点

	//如果是叶子节点

}
