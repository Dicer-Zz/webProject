function getPositionMap() {
	var map = createMap(getPos());
	map.on('click', function(e) {
    	document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
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