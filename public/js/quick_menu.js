(function($,window,document){

    const Kurly = {
        init:function(){
            this.quickMenu();
        },
        quickMenu: function(){
            let quickTop = 0;
            let quickMenu = 554;

            function quickMenuFn(){
                // console.log($(window).scrollTop());
                // try catch 추가 해야함 
                // section2 or setion1 slide-container이 있을때만 실행함으로
                // try catch 예외처리로 section2 및 slide-container이 없을때도 실행할 수 있게 해야함
                try {
                    if($(window).scrollTop() >= $('#section2 .slide-container').offset().top){ 
                        quickTop = ($(window).height()-quickMenu)/2 + $(window).scrollTop();
                        $('#quickMenu').stop().animate({top:quickTop}, 300, 'easeOutExpo');
                    }
                    else{
                        $('#quickMenu').stop().animate({top:$('#section2 .slide-container').offset().top }, 300, 'easeOutExpo');
                    }
                }

                catch {
                    if($(window).scrollTop() >= 198) {
                        quickTop = ($(window).height()-quickMenu)/2 + $(window).scrollTop();
                        $('#quickMenu').stop().animate({top:quickTop}, 300, 'easeOutExpo');
                    }
                    else {
                        $('#quickMenu').stop().animate({top: 198}, 300, 'easeOutExpo');
                    }
                }
                
            }
            quickMenuFn();

            $(window).scroll(function(){
                quickMenuFn();
            });
        }
    }
    Kurly.init();

})(jQuery,window,document);