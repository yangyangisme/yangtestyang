/*document.querySelector('html').onclick = function(){
	alert('要加油加油鸭ヾ(◍°∇°◍)ﾉﾞ')
}*/
/*此处注释掉的是点击后弹窗提示*/
/*
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/001.jpg') {
		myImage.setAttribute('src','images/002.jpg');
	} else {
		myImage.setAttribute('src','images/001.jpg');
	}
}
*/
/*此处注释掉的为点击图片切换的功能*/
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
/*此处注释掉的为切换按钮，输入名字 定制显示*/
/*
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = '以下是一个动态列表，点击列表外任意位置可添加新的列表项，点击已有的列表项可修改内容。';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('希望列表中显示什么内容？');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
  	e.stopPropagation();
  	const listContent = prompt('为列表项输入新的内容');
  	this.textContent = listContent;
  };
};
*/
/* 此处注释的是JavaScript在页面中添加了一个空列表。
点击列表中的任何地方，浏览器会弹出一个对话框要求你为新列表项输入一些文本内容。
当你点击OK按钮，刚刚那个新的列表项会添加到页面上，
当你点击那些已有的列表项，会弹出一个对话框允许你修改列表项的文本。*/