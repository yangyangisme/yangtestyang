/*document.querySelector('html').onclick = function(){
	alert('要加油加油鸭ヾ(◍°∇°◍)ﾉﾞ')
}*/
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/001.jpg') {
		myImage.setAttribute('src','images/002.jpg');
	} else {
		myImage.setAttribute('src','images/001.jpg');
	}
}
/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
	var myName = prompt('请输入你的名字');
	if(!myName || myName === null){
		setUserName();
	} else {
		localStorage.setItem('name',myName);
		myHeading.textContent = '一只大象的网站',+ myName;
	}
}
if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storeName = localStorage.getItem('name');
	myHeading.textContent = '一只大象的网站' + storeName;
}
myButton.onclick = function(){
	setUserName();
}
*/