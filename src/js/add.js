
var banner_ul=document.getElementsByClassName('banner_ul')[0];
var banner_li= banner_ul.getElementsByTagName('li');
var pic_list = document.getElementById('piclist').getElementsByTagName('li');


//隐藏所有图片
function imgHidden() {
  for( var i= 0 ; i<banner_li.length; i++){
    banner_li[i].style.display='none';
    pic_list[i].style.backgroundColor  ='transparent';
  }

}

//初始化第一张图片
imgHidden();
banner_li[0].style.display='block';
pic_list[0].style.backgroundColor ='#FF9C00';

//图片下方点的点击事件


for(var i=0;i<pic_list.length; i++ ){
  pic_list[i].index=i;
  pic_list[i].onclick = function (event) {
//    console.log(this.index);
    imgHidden();
    banner_li[this.index].style.display='block';
  }

}
(function () {
  var t=0;
  var pictimeer=setTimeout(function () {
    t = t >= pic_list.length-1 ? 0 : ++t;
    imgHidden();
//    console.log(t);
    banner_li[t].style.display='block';
    pic_list[t].style.background ='#FF9C00';
    setTimeout(arguments.callee,2000);  //循环图片
  },2000)

}())


//project 轮播
var project_pic = document.getElementsByClassName('project4')[0];
var pic_li = project_pic.getElementsByTagName('li') ;

function changePic() {
  for(var i=0;i<pic_li.length; i++){
    pic_li[i].style.width = project_pic.clientWidth+'px';

  }
}
changePic();

var de1=  document.getElementById('picg1');
var de2=  document.getElementById('picg2');
de2.innerHTML = de1.innerHTML;

function Changemove() {
  //console.log(project_pic.scrollLeft);
  if(project_pic.scrollLeft - de2.offsetWidth >=0){
        project_pic.scrollLeft -= de1.offsetWidth;
  }
  else project_pic.scrollLeft++;
}

var scrollTimer = setInterval(Changemove,20);
project_pic.onmouseover=function () {
  clearInterval(scrollTimer);
};
project_pic.onmouseout=function () {
  scrollTimer = setInterval(Changemove,20);
};









