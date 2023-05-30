(function($, window, document){

    const Kurly = {
        init: function(){
            this.goTop();            
        },
        goTop: function(){
          let offsetTop = 0;

          try{
            offsetTop = $('#section2  .slide-container').offset().top;
          }
          catch{
            offsetTop = 248;
          }
            // 마우스 올리면 이미지 변경
            $('.go-top-btn').on({
               mouseenter: function(){
                 $(this).find('img').attr('src', '../img/go_top/go_top_on.png');
               },
               mouseleave: function(){
                 $(this).find('img').attr('src', '../img/go_top/go_top.png');
               },
               click: function(){
                 $('html, body').stop().animate({scrollTop: 0}, 600, 'easeInOutExpo');
               }
            });
 
            //스크롤탑값이 690 이상이면 고탑버튼 보이기 미만이면 안보이기
            $(window).scroll(function(){
               scrollEvent();
            });
            

            // 섹션2의 컨테이너 박스 offset().top 이 없어서
            // 오류가 발생한다. 그래서 예외처리 try{} catch{}
           
            function eventFn(z){
                if( $(window).scrollTop() >= z ){
                  $('#goTop').stop().fadeIn(600);
                }
                else{
                  $('#goTop').stop().fadeOut(600);
                }
            }

            function scrollEvent(){
                try{
                  eventFn(offsetTop); //아규먼트 전달인자
                }
                catch{
                  eventFn(offsetTop); //아규먼트 전달인자 
                }
            }
            scrollEvent(); //로딩시
        }
    }

    Kurly.init();
 

})(jQuery, window, document);