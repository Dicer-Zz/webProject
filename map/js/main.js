function getPositionMap() {
	var map = createMap(getPos());
	map.on('click', function(e) {
    	document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
	});
    AMap.plugin('AMap.ToolBar',function(){//异步加载插件
        var toolbar = new AMap.ToolBar();
        map.addControl(toolbar);
    });
    AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
        var autoOptions = {
            city: "", //城市，默认全国
            input: "tipinput"//使用联想输入的input的id（也就是上边那个唯一的id）
        };
        autocomplete= new AMap.Autocomplete(autoOptions);
        var placeSearch = new AMap.PlaceSearch({
            city:'',
            map:map
        })
        AMap.event.addListener(autocomplete, "select", function(e){
            //TODO 针对选中的poi实现自己的功能
            placeSearch.setCity(e.poi.adcode);
            placeSearch.search(e.poi.name)
        });
    });
	return map
}

function createMap(pos){
	var map = new AMap.Map('container', {
    zoom:13,//级别
    center: pos,//中心点坐标
    viewMode:'3D'//使用3D视图
    });
    return map
}

function getPos() {
	var s = document.getElementById("position").value;
	var sep = s.indexOf(',');
	var pos = [s.substring(0, sep), s.substring(sep+1, s.length)];
	return pos;
}

function getCopy() {
	const input = document.getElementById("lnglat");
	input.select();
	if(document.execCommand('copy')) {
		document.execCommand('copy');
		alert("复制成功!");
	} else {
		alert("复制失败!");
	}
}

function goTo(pos) {
    var s = window.location.href;
    s = s.substr(0, s.lastIndexOf('/'));
    s = s.substr(0, s.lastIndexOf('/'));
    // console.log(s);
    window.location.href = s + "/index.html?" + pos;
}

function changePos() {
    // console.log(window.location.href);
    var s = window.location.href;
    var sep = s.indexOf('?');
    if(sep == -1)   return;
    // console.log(s.substr(sep + 1, s.length));
    // console.log(sep);
    document.getElementById("position").value = s.substr(sep + 1, s.length);
}