$(function() {
  //ページトップへのスクロール
  $('#pagetop').click(function () {
      //id名#pagetopがクリックされたら、以下の処理を実行
      $("html,body").animate({scrollTop:0},"300");
  });
  //ページトップの出現
  $('#pagetop').hide();
  $(window).scroll(function () {
      if($(window).scrollTop() > 0) {
          $('#pagetop').slideDown(600);
      } else {
          $('#pagetop').slideUp(600);
      }
  });
  //ホバーイベント
  $("#pagetop").mouseover(function(){
      $(this).animate({
          bottom:"0px"
      },300);
  });
  $("#pagetop").mouseout(function(){
      $(this).animate({
          bottom:"-60px"
      },300);
  });

var pos = 0;
  var header = $('header');
  $(window).on('scroll', function(){
    if($(this).scrollTop() < pos ){
      header.removeClass('hide');
    }else{
      header.addClass('hide');
    }
    pos = $(this).scrollTop();
  });


  $('.hamburger').click(function(){
    $('.nav').animate({'left': '0px',},{ duration: 100});
    $('html').addClass('scroll-prevent');
  });

  $('.hamburger-close').click(function(){
    $('.nav').animate({'left': '100%',},{ duration: 100});
    $('html').removeClass('scroll-prevent');
  });

  $('.banner-close').click(function(){
    $('.banner-area').remove();
  });

  $('.Order-flow-inner').slick({
    autoplay: false ,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    dotsClass: 'slide-dots'
  });


});


//メニュー遷移動作とspメニュー遷移後ドロワー移動
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var windowWidth = $(window).width();
    var windowSm =  768;
    $("html, body").animate({scrollTop:position}, speed, "swing");

    if(windowWidth <= windowSm){
      $('.nav').animate({'left': '100%',},{ duration: 100});
        $('html').removeClass('scroll-prevent');
    };
    return false;
  });
});



// バナー
var syncerTimeout = null ;

$( function(){
  $( window ).scroll( function(){
    // 1秒ごとに処理
    if( syncerTimeout == null ){
      // セットタイムアウトを設定
      syncerTimeout = setTimeout( function(){

        // 対象のエレメント
        var element = $( '.banner-area' );
        // 現在、表示されているか？
        var visible = element.is( ':visible' ) ;
        // 最上部から現在位置までの距離を取得して、変数[now]に格納
        var now = $( window ).scrollTop();
        // 最下部から現在位置までの距離を計算して、変数[under]に格納
        var under = $( 'body' ).height() - ( now + $(window).height() ) ;
        // 最上部から現在位置までの距離(now)が700以上かつ
        // 最下部から現在位置までの距離(under)が200px以上かつ…
        if( now > 700 && 200 < under ){
          // 非表示状態だったら
          if( !visible ){
            // ゆっくりフェードインする
            element.fadeIn( 'slow' ) ;
          }
        }
        // 700px以下かつ
        // 表示状態だったら
        else if( visible ){
          // ゆっくりフェードアウトする
          element.fadeOut( 'slow' ) ;
        }
        // フラグを削除
        syncerTimeout = null ;
      } , 700 ) ;
    }
  });
});
