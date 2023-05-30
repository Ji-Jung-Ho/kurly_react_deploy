(($)=>{
    
    const Category = {
        init(){
            this.mainFn();
        },
        mainFn(){
            const $categoryBtn = $('.category-btn');

            $categoryBtn.on({
                click(e){
                    e.preventDefault();
                    $(this).toggleClass('on');
                    $(this).next().stop().slideToggle(300);
                }
            });
        }
    }
    Category.init();

})(jQuery);