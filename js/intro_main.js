(function($, window, document){
    const Kurly = {
        init: function(){
            this.section1();
            this.section2();
            this.section3();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
        },
        section1: function(){
            let cnt = 0;    
            let setId = 0;
            // 선택자 변수 $접두어 사용
            const $s1SlideWrap      = $('#section1 .slide-wrap');
            const $s1Slide          = $('#section1 .slide');
            const $slideView        = $('#section1 .slide-view');
            const $s1CountNumber    = $('#section1 .count-number');
            const $s1TotalNumber    = $('#section1 .total-number');
            const $s1SlideContainer = $('#section1 .slide-container');
            const $s1NextBtn        = $('#section1 .next-btn');
            const $s1PrevBtn        = $('#section1 .prev-btn');
            const n                 = $('#section1 .slide').length-2;

            mainSlide();  //로딩시 곧바로 실행

            //1. 메인슬라이드 함수
            function mainSlide(){
                $s1SlideWrap.stop().animate({ left: `${-100*cnt}%` }, 1000,"easeOutExpo",   function(){
                    if(cnt >= n){  //first
                        cnt=0; 
                        $s1SlideWrap.animate({ left: `${-100*cnt}%` }, 0);
                    }
                    
                    if(cnt <= -1){  //last
                        cnt=n-1; 
                        $s1SlideWrap.animate({ left: `${-100*cnt}%` }, 0);
                    }
                });

                // 페이지 번호 출력
                // 전체 갯수를 셀때 자바스크립트 length 
                let total = $s1Slide.length-2; //13-2
                $s1CountNumber.text( cnt === n ? 1 : (cnt + 1 === 0 ? n : cnt+1) );
                $s1TotalNumber.text( total ); //11

            }

            //2. 다음(next)카운트 함수
            function nextCount(){
                cnt++; //1 2 3 ....
                mainSlide();
            }
            //2. 이전(preiew)카운트 함수
            function prevCount(){
                cnt--; //1 2 3 ....
                mainSlide();
            }

            //3. 자동타이머 함수
            function autoTimer(){
                clearInterval( setId );
                setId = setInterval(nextCount, 3000); //3초 뒤에서 다음카운트 함수 호출 계속(포에버)
            }
            autoTimer();

            //4. 슬라이드 컨테이너박스 위에 마우스 올리면
            //   슬라이드 일시정지
            //   마우스가 떠나면 슬라이드 타이머함수 실행
            $s1SlideContainer.on({
                mouseenter: function(){
                    clearInterval( setId );  //타이머지 일시정지
                    $s1NextBtn.stop().fadeIn(1000);
                    $s1PrevBtn.stop().fadeIn(1000);                   
                },
                mouseleave: function(){
                    autoTimer(); //자동타이머 함수 호출 실행
                    $s1NextBtn.stop().fadeOut(1000);
                    $s1PrevBtn.stop().fadeOut(1000);
                }
            })

            $s1NextBtn.on({
                mouseenter: function(){
                    clearInterval( setId );  //타이머지 일시정지
                },
                mouseleave: function(){
                    autoTimer(); //자동타이머 함수 호출 실행
                }
            })

            $s1PrevBtn.on({
                mouseenter: function(){
                    clearInterval( setId );  //타이머지 일시정지
                },
                mouseleave: function(){
                    autoTimer(); //자동타이머 함수 호출 실행
                }
            })

            //5-1. 다음화살버튼(next-btn) 클릭(click) 이벤트 : 다음슬라이드 구현
            //5-2. 빠른속도로 클릭하면 클릭한 횟수대로 애니메이션이 진행이 된다.
            //   이미지 애니메이션이 진행중인경우에도 클릭되어 버그가 발생한다.
            //   그래서 애니메이션이 진행안될때만 클릭을 가능하게 해준다.
            $s1NextBtn.on({
                click: function(e){
                    e.preventDefault();
                    
                    if( $s1SlideWrap.is(':animated') === false ){
                        nextCount();
                    }
                }
            });

            //5. 이전화살버튼(next-btn) 클릭(click) 이벤트 : 이전슬라이드 구현
            $s1PrevBtn.on({
                click: function(e){
                    e.preventDefault();
                    if ( $s1SlideWrap.is(':animated') === false  ){
                        prevCount();
                    }
                }
            });

            // 터치 스와이프 : 오른족에서 왼쪽으로 터치하면 다음슬라이드
            // 터치 스와이프 : 왼족에서 오른쪽으로 터치하면 이전슬라이드
            let touchStart = null;
            let touchEnd = null;
            let dragStart = null;
            let dragEnd = null;
            let mouseDown = false;
            let winW = $(window).innerWidth();
           
            $slideView.on({

                mousedown(e){
                    clearInterval(setId);
                    winW = $(window).innerWidth();
                    touchStart = e.clientX;
                    dragStart = e.clientX - $s1SlideWrap.offset().left-winW;
                    mouseDown = true;
                },
                mouseup(e){
                    touchEnd = e.clientX;
                    if( touchStart - touchEnd > 300){
                        nextCount();
                    }
                    else {
                        mainSlide();
                    }
                    if( touchStart - touchEnd < -300){
                        prevCount();
                    }
                    else {
                        mainSlide();
                    }
                    mouseDown = false;
                },
                mouseleave(e){
                    touchEnd = e.clientX;
                    autoTimer();
                    mouseDown = false;
                },
                mousemove(e){
                    if(mouseDown===false) return;
                    dragEnd = e.clientX;
                    $s1SlideWrap.css({left: dragEnd-dragStart});
                }    
            });

            // 모바일용
            $slideView.on({
                touchstart(e){
                    clearInterval(setId);
                    winW = $(window).innerWidth();
                    touchStart = e.originalEvent.changedTouches[0].clientX;
                    dragStart = e.originalEvent.changedTouches[0].clientX - $s1SlideWrap.offset().left-winW;
                    mouseDown = true;
                },
                touchend(e){
                    touchEnd = e.originalEvent.changedTouches[0].clientX;
                    if( touchStart - touchEnd > 0){
                        nextCount();
                    }
                    if( touchStart - touchEnd < 0){
                        prevCount();
                    }
                    mouseDown = false;
                },
                touchmove(e){
                    if(mouseDown===false) return;
                    dragEnd = e.originalEvent.changedTouches[0].clientX;
                    $s1SlideWrap.css({left: dragEnd-dragStart});
                }    
            });
            
        },
        section2: function(){
            let cnt = 0;
            const $s2NextBtn = $('#section2 .next-btn');
            const $s2PrevBtn = $('#section2 .prev-btn');
            const $s2SlideWrap = $('#section2 .slide-wrap');
            const $s2SlideView = $('#section2 .slide-view');

           //1. 메인슬라이드 함수 
           function mainSlide(){  
                if(cnt >= 4){
                    cnt = 4
                    $s2NextBtn.stop().fadeOut(300);
                }
                else{
                    $s2NextBtn.stop().fadeIn(300);
                }
                if(cnt <= 0){
                    cnt = 0
                    $s2PrevBtn.stop().fadeOut(300);
                }
                else {
                    $s2PrevBtn.stop().fadeIn(300);
                }             
                $s2SlideWrap.stop().animate({left:`${-100*cnt}%`}, 1000, 'easeOutExpo');
           }
           mainSlide();

           //2. 다음카운트 함수 
           function nextCount(){
                cnt++;                
                mainSlide();
           }
           //2. 이전카운트 함수 
           function prevCount(){
                cnt--;                
                mainSlide();
           }

           //3. 다음화살버튼클릭 이벤트
           $s2NextBtn.on({
                click: function(e){          
                    e.preventDefault();

                    if( $s2SlideWrap.is(':animated') === false ){
                        nextCount();
                    }
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec2/arrow_perple.svg');                    
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec2/arrow_white.svg');
                },

           });
           //3. 이전화살버튼클릭 이벤트
           $s2PrevBtn.on({
                click: function(e){                    
                    e.preventDefault(); 
                    if ( $s2SlideWrap.is(':animated') === false  ){
                        prevCount();
                    }
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec2/arrow_perple.svg');
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec2/arrow_white.svg');
                },
           });

            let touchStart = null;
            let touchEnd = null;
            let dragStart = null;
            let dragEnd = null;
            let mouseDown = false;
           
            $s2SlideView.on({
                mousedown(e){
                    touchStart = e.clientX;
                    dragStart = e.clientX - $s2SlideWrap;
                    mouseDown = true;
                },
                mouseup(e){
                    touchEnd = e.clientX;
                    if( touchStart - touchEnd > 0){
                        nextCount();
                    }
                    if( touchStart - touchEnd < 0){
                        prevCount();
                    }
                    mouseDown = false;
                },
                mouseleave(e){
                    touchEnd = e.clientX;
                    mouseDown = false;
                },
                mousemove(e){
                    if(mouseDown===false) return;
                    dragEnd = e.clientX;
                    $s2SlideWrap.css({left: dragEnd-dragStart});
                }    
            });

            $s2SlideView.on({
                touchstart(e){
                    touchStart = e.originalEvent.changedTouches[0].clientX;
                    dragStart = e.originalEvent.changedTouches[0].clientX - $s2SlideWrap.offset();
                    mouseDown = true;
                },
                touchend(e){
                    touchEnd = e.originalEvent.changedTouches[0].clientX;
                    if( touchStart - touchEnd > 0){
                        nextCount();
                    }
                    if( touchStart - touchEnd < 0){
                        prevCount();
                    }
                    mouseDown = false;
                },
                touchmove(e){
                    if(mouseDown===false) return;
                    dragEnd = e.originalEvent.changedTouches[0].clientX;
                    $s2SlideWrap.css({left: dragEnd-dragStart});
                }    
            });
        },
        section3: function(){

        },
        section5: function(){
            let cnt = 0;
            const $sNextBtn =   $('#section5 .next-btn');
            const $sPrevBtn =   $('#section5 .prev-btn');
            const $sSlideWrap = $('#section5 .slide-wrap');



           //1. 메인슬라이드 함수 
           function mainSlide(){  
                if(cnt>=4){
                    cnt=4
                    $sNextBtn.stop().fadeOut(300);
                }
                else{
                    $sNextBtn.stop().fadeIn(300);
                }
                if(cnt<=0){
                    cnt=0
                    $sPrevBtn.stop().fadeOut(300);
                }
                else {
                    $sPrevBtn.stop().fadeIn(300);
                }             
                $sSlideWrap.stop().animate({left:-1064*cnt},600);
           }
           mainSlide(); //로딩시 실행 1회

           //2. 다음카운트 함수 
           function nextCount(){
                cnt++;                
                mainSlide();
           }
           //2. 이전카운트 함수 
           function prevCount(){
                cnt--;                
                mainSlide();
           }

           //3. 다음화살버튼클릭 이벤트
           $sNextBtn.on({
                click: function(e){                    
                    e.preventDefault();
                    nextCount();
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec5/arrow_perple.svg');                    
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec5/arrow_white.svg');
                },

           });
           //3. 이전화살버튼클릭 이벤트
           $sPrevBtn.on({
                click: function(e){                    
                    e.preventDefault(); //프리벤트디폴트
                    prevCount();
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec5/arrow_perple.svg');
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec5/arrow_white.svg');
                },
           });

        },
        section6: function(){
            let cnt = 0;
            const $sNextBtn =   $('#section6 .next-btn');
            const $sPrevBtn =   $('#section6 .prev-btn');
            const $sSlideWrap = $('#section6 .slide-wrap');



           //1. 메인슬라이드 함수 
           function mainSlide(){  
                if(cnt>=4){
                    cnt=4
                    $sNextBtn.stop().fadeOut(300);
                }
                else{
                    $sNextBtn.stop().fadeIn(300);
                }
                if(cnt<=0){
                    cnt=0
                    $sPrevBtn.stop().fadeOut(300);
                }
                else {
                    $sPrevBtn.stop().fadeIn(300);
                }             
                $sSlideWrap.stop().animate({left:-1064*cnt},600);
           }
           mainSlide(); //로딩시 실행 1회

           //2. 다음카운트 함수 
           function nextCount(){
                cnt++;                
                mainSlide();
           }
           //2. 이전카운트 함수 
           function prevCount(){
                cnt--;                
                mainSlide();
           }

           //3. 다음화살버튼클릭 이벤트
           $sNextBtn.on({
                click: function(e){                    
                    e.preventDefault(); //프리벤트디폴트
                    nextCount();
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec6/arrow_perple.svg');                    
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec6/arrow_white.svg');
                },

           });
           //3. 이전화살버튼클릭 이벤트
           $sPrevBtn.on({
                click: function(e){                    
                    e.preventDefault(); //프리벤트디폴트
                    prevCount();
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec6/arrow_perple.svg');
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec6/arrow_white.svg');
                },
           });

        },   
        section7: function(){
            let cnt = 0;
            const $sNextBtn =   $('#section7 .next-btn');
            const $sPrevBtn =   $('#section7 .prev-btn');
            const $sSlideWrap = $('#section7 .slide-wrap');



           //1. 메인슬라이드 함수 
           function mainSlide(){  
                if(cnt>=4){
                    cnt=4
                    $sNextBtn.stop().fadeOut(300);
                }
                else{
                    $sNextBtn.stop().fadeIn(300);
                }
                if(cnt<=0){
                    cnt=0
                    $sPrevBtn.stop().fadeOut(300);
                }
                else {
                    $sPrevBtn.stop().fadeIn(300);
                }             
                $sSlideWrap.stop().animate({left:-1064*cnt},600);
           }
           mainSlide(); //로딩시 실행 1회

           //2. 다음카운트 함수 
           function nextCount(){
                cnt++;                
                mainSlide();
           }
           //2. 이전카운트 함수 
           function prevCount(){
                cnt--;                
                mainSlide();
           }

           //3. 다음화살버튼클릭 이벤트
           $sNextBtn.on({
                click: function(e){                    
                    e.preventDefault();
                    nextCount();
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec7/arrow_perple.svg');                    
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec7/arrow_white.svg');
                },

           });
           //3. 이전화살버튼클릭 이벤트
           $sPrevBtn.on({
                click: function(e){                    
                    e.preventDefault();
                    prevCount();
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec7/arrow_perple.svg');
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec7/arrow_white.svg');
                },
           });

        },
        section8: function(){
            let cnt = 0;
            const $sNextBtn =   $('#section8 .next-btn');
            const $sPrevBtn =   $('#section8 .prev-btn');
            const $sSlideWrap = $('#section8 .slide-wrap');

           //1. 메인슬라이드 함수 
           function mainSlide(){  
                if(cnt>=4){
                    cnt=4
                    $sNextBtn.stop().fadeOut(300);
                }
                else{
                    $sNextBtn.stop().fadeIn(300);
                }
                if(cnt<=0){
                    cnt=0
                    $sPrevBtn.stop().fadeOut(300);
                }
                else {
                    $sPrevBtn.stop().fadeIn(300);
                }             
                $sSlideWrap.stop().animate({left:-1064*cnt},600);
           }
           mainSlide(); //로딩시 실행 1회

           //2. 다음카운트 함수 
           function nextCount(){
                cnt++;                
                mainSlide();
           }
           //2. 이전카운트 함수 
           function prevCount(){
                cnt--;                
                mainSlide();
           }

           //3. 다음화살버튼클릭 이벤트
           $sNextBtn.on({
                click: function(e){                    
                    e.preventDefault();
                    nextCount();
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec7/arrow_perple.svg');                    
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec7/arrow_white.svg');
                },

           });
           //3. 이전화살버튼클릭 이벤트
           $sPrevBtn.on({
                click: function(e){                    
                    e.preventDefault();
                    prevCount();
                },
                mouseenter: function(){
                    $(this).attr('src','./img/sec7/arrow_perple.svg');
                },
                mouseleave: function(){
                    $(this).attr('src','./img/sec7/arrow_white.svg');
                },
           });
        }
    }

    Kurly.init();




})(jQuery, window, document);