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
    
    // メニューの固定
    $(function() {
        var _window = $(window),
        main = $('.nav-wrap'),
        heroBottom;
     
        _window.on('scroll',function(){     
            heroBottom = $('#js-header').height();
            if(_window.scrollTop() > heroBottom){
                main.addClass('is-fixed');   
            }
            else{
                main.removeClass('is-fixed');   
            }
        });
     
        _window.trigger('scroll');
    });

    // メニューに付いてくるアンダーライン
    currentItem = $(".current");
    if (currentItem[0]) {
    currentItem.css({
        "width": currentItem.width(),
        "left": currentItem.position().left
    });
    }
    
    $("#nav li").hover(
        // ホバー時
        function(){ 
          // ホバーしているメニューの幅と左位置に変更
          $("#slide-line").css({
            "width": $(this).width(),
            "left": $(this).position().left
          });
        },
        // ホバーが外れたとき
        function(){
            // 下線を消す
            $("#slide-line").width(0);
        }
       );


    // shopリストが横からスライドしてくる

    $(function(){
        $('.shop-list').addClass('move');
        $(window).scroll(function(){
          $(".shop").each(function(){
            var imgPos = $(this).offset().top;    
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/2){
              $(this).find(".shop-list").removeClass('move');
            } else {
              $(this).find(".shop-list").addClass('move');
            }
          });
        });
      });

      $(function(){
        $('.shop-list2').addClass('move');
        $(window).scroll(function(){
          $(".shop").each(function(){
            var imgPos = $(this).offset().top;    
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/2){
              $(this).find(".shop-list2").removeClass('move');
            } else {
              $(this).find(".shop-list2").addClass('move');
            }
          });
        });
      });

      $(function(){
        $('.shop-list3').addClass('move');
        $(window).scroll(function(){
          $(".shop").each(function(){
            var imgPos = $(this).offset().top;    
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/2){
              $(this).find(".shop-list3").removeClass('move');
            } else {
              $(this).find(".shop-list3").addClass('move');
            }
          });
        });
      });

    //   ハンバーガーメニュー
    
    $('#menu-trigger').on('click',function(){
      if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('body').removeClass('open');
        $('.res_nav').removeClass('open');
        $('.overlay').removeClass('open');
      } else {
        $(this).addClass('active');
        $('body').addClass('open');
        $('.res_nav').addClass('open');
        $('.overlay').addClass('open');
      }
    });
    $('.overlay').on('click',function(){
      if($(this).hasClass('open')){
        $(this).removeClass('open');
        $('#menu-trigger').removeClass('active');
        $('body').removeClass('open');
        $('.res_nav').removeClass('open');      
      }
    });
    
});