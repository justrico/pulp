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
