//メニューのタブ切り替え
$(function(){
  $('#menu_contents div[id != "tab1"]').hide();
  $(".menu_tab a").click(function(){
    $("#menu_contents div").hide();
    $($(this).attr("href")).show();

    $(".current").removeClass("current");
    $(this).addClass("current");
    return false;
  });
});
//h2の動き
$(function(){
  $(window).on('scroll load',function(){
    $('.animated').each(function(){
      var $scrollBottom = $(window).scrollTop() + $(window).height();
      var $torigger = $(this).offset().top;
      if( $scrollBottom > $torigger) $(this).addClass('swing');
    });
  });
});
//スムーススクロール
$(function(){
  $("a[href^=#]:not([href=#], #menu a)").click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -= 30;
    $("html, body").animate({scrollTop: target}, 500);
    return false;
  });
});
/* 幅が640px以下の場合 */
if (window.matchMedia( "(max-width: 640px)" ).matches) {
  $(function(){

  });
  /* 幅が640px以上の場合 */
} else {
  //メニューのキャプションエフェクト
  $(function(){
    $("#menu figcaption").hide();
    $("#menu figure").hover(function(){
      $(this).children("figcaption").stop().fadeIn(300);
    }, function() {
      $(this).children("figcaption").stop().fadeOut(300);
    });
  });
}
