$(function(){

    // 画像スライダー

    // 5秒ごとにスライド
    var intervalId;
    setTimer();

    function setTimer(){
        intervalId = setInterval(autoClick,5000);
    }

    function autoClick(){
        $('.slide').children('a.next').click();
    }

    // 矢印をクリックするとスライド
    function changeImage($click){
        var $current=$click.siblings('.container').children('.current');
        var $new;
        var findSelector='';

        if($click.hasClass('next')){
            $new = $current.next();
            findSelector = ':first-child';
        }else{
            $new = $current.prev();
            findSelector = ':last-child';
        }

        if($new.length == 0){
            $new = $current.siblings(findSelector);
        }
        $current.removeClass('current');
        $new.addClass('current');
        // 手動で写真を切り替えた後にまた自動スライドに戻る
        setTimer();
    }

    // 最後までスライドした時に最初に戻る
    $('.slide')
    .on('click','>a',function(event){
        event.preventDefault();

        // 他のscliptに自動クリックが反映されないようにする
        event.stopPropagation();

        // クリックした時に自動スライドを停止する
        clearInterval(intervalId);

        changeImage($(this));
    });  
    
    $(function() {
        var $win = $(window),
            $main = $('main'),
            $nav = $('nav'),
            navHeight = $nav.outerHeight(),
            navPos = $nav.offset().menu,
            fixedClass = 'fixed';
      
        $win.on('load scroll', function() {
          var value = $(this).scrollTop();
          if ( value > navPos ) {
            $nav.addClass(fixedClass);
            $main.css('menu', navHeight);
          } else {
            $nav.removeClass(fixedClass);
            $main.css('menu', '0');
          }
        });
      });

});