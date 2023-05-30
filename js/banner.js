(($)=>{

    function bannerFn(){
            let txt = '';
            // $.ajax({
            //     url:"./data/banner.json",
            //     dataType:"JSON",
            //     success(res){
            //         res.특가혜택.map(function(item,idx){
            //             const {번호, 제목, 이미지, 소개} = item;
            //             txt += `<li ${번호}"><a href="#" title="${제목}"><img src="./img/${이미지}" alt="${소개}"></a></li>`;
            //         });

            //         $('.banner-list').append(txt);

            //     },
            //     error(err){
            //         console.log('AJAX 오류!!',err);
            //     }
            // });
        }

    bannerFn();

})(jQuery)