/* Cute Browser Tab Title */
var OriginTitile = document.title, titleTime;
document.addEventListener('visibilitychange', function() {
if (document.hidden) {
  document.title = '(*/ω＼*) 我藏好了噢~';
  clearTimeout(titleTime);
} else {
    document.title = '٩(ˊᗜˋ )ﻭ 被你发现啦~';
    titleTime = setTimeout(function() {
      document.title = OriginTitile;
    },3000);
  }
});

// Back to top button
function getScroll(){
  return {
    top: window.pageYoffset ||
	  document.documentElement.scrollTop||document.body.scrollTop,

    left: window.pageXoffset||document.documentElement.scrollLeft
	  ||document.body.scrollLeft
  }
}

// 鼠标点击显24字社会主义核心价值观
$(document).ready(function(){
  var a_index = 0;
  var c_index = 0;
  $("body").click(function(e){
    var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
    var c = new Array("#ff4088", "#0594cb", "#33ba91", "#e5b54f", "#c9177e", "#0083c0", "#00a88a", "#fcd804");
    var $i = $("<span/>").text(a[a_index]);
    a_index = (a_index + 1) % a.length;
    c_index = (c_index + 1) % c.length;
    var x = e.pageX,y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "normal",
      "color": c[c_index],
      "-webkit-user-select" : "none",
      "-moz-user-select" : "none",
      "-ms-user-select" : "none",
      "user-select" : "none"
    });
    $("body").append($i);
    $i.animate({"top": y-180,"opacity": 0},1500,function() {
      $i.remove();
    });
  });
});
