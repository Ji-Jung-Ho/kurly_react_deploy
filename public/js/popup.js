(($)=>{

  const Popup = {
    init(){
      this.detailButtonFn();
      this.unavailableList();
    },

    detailButtonFn(){
      $(".detail").on({
        click(e){
          e.preventDefault();
          if($(this).text() === "자세히 보기") {
            $(this).text("간략히 보기").append()
          }
          else {
            $(this).text("자세히 보기");
          }
          $(".info-tootip").toggleClass("on");
          $("img").toggleClass("on");
        }
      });
    },
    
    unavailableList(){
      // let list = '가락동농수산물도매시장, 가락동농수산물시장, 가천대학교, 고려대학교안암캠퍼스, 고매동 일부(일부지역만 배송가능), 국립중앙박물관, 국민대학교, 덕성여자대학교, 덕양구 신원동 일부(일부지역만 배송가능), 도내동 일부(원흥지구만 배송가능), 동덕여자대학교, 반월특수지구, 서경대학교, 서울사이버대학교, 서울시립대학교, 서울여자대학교, 성균관대학교, 성신여자대학교, 세종대학교, 연세대학교, 이화여자대학교, 한국외국어대학교, 홍익대학교'

      let txt = '';
      $.ajax({
          url:"./data/popup.json",
          dataType:"JSON",
          success(res){
              res.배달불가지역리스트.map(function(item){
                txt += `<li ${item.번호} class="unavailableList">${item.배달불가지역}</li>`;
              });

              $('.info-tootip').append(txt);

          },
          error(err){
              console.log('AJAX 오류!!',err);
          }
      });

    }

  }

  Popup.init();


})(jQuery);