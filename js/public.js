var domain = "";
/*
 * 截取Url后的参数
 */
function GetQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
   	var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = ""; 
    if (r != null) 
       	context = r[2]; 
    	reg = null; 
    	r = null; 
    	return context == null || context == "" || context == "undefined" ? "" : context; 
}

/*
 * 时间戳转化为2010-10-20 10:00:00格式
 */
 function getDate(time) {
 	var date = new Date(parseInt(time) * 1000);
 	var year = date.getFullYear();
 	var month = date.getMonth()+1;
 	var day = date.getDate();
 	var hour = date.getHours();
 	var min = date.getMinutes();
 	var sec = date.getSeconds();
	return year+"/"+month+"/"+day+" "+hour+":"+min+":"+sec;  
 }   