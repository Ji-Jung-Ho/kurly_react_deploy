(($)=>{

    const NewProduct = {
        init(){
            this.mainFn();
        },
        mainFn(){
           let txt = '';

            // $.ajax({
            //     url:'./data/product.json',
            //     dataType:'JSON',
            //     success( res ){
                   
            //         function commaRegExp(z){
            //             let str = z.toString();
            //             const regExp = /(^\d+)(\d{3})/;
            //             while( regExp.test(str) ){
            //                 str = str.replace(regExp, '$1,$2');
            //             }
                       
            //            return str;  
            //         }

            //         res.알뜰쇼핑.map(function(item,idx){

            //             const {상품코드,상품이미지,카트이미지,배송구분,제조사,상품명,상품정보,할인율,정가,판매처} = item;  

            //             txt += `<li data-key=${상품코드}>`;
            //             txt += `    <div class="col-gap">`;
            //             txt += `        <div class="wrap">`;
            //             txt += `            <div class="img-box">`;
            //             txt += `                <img src="./img/${상품이미지}" alt=""/>`;
            //             txt += `                <a href="#" class='cart-btn'><img src="./img/${카트이미지}" alt=""></a>`;
            //             txt += `            </div>`;
            //             txt += `            <div class="caption">`;
            //             txt += `                <h6>${배송구분}</h6>`;
            //             txt += `                <h2><strong>[${제조사}]</strong> <em>${상품명}</em></h2>`;
            //             txt += `                <h5>${상품정보}</h5>`;
            //             txt += `                <h3>
            //                                         ${    
            //                                             할인율 > 0 ? `<strong>${Math.round(할인율*100)}%</strong>` : ``   
            //                                         }
            //                                         <em>${ commaRegExp(Math.round(정가*(1-할인율))) }원</em>
            //                                     </h3>`;
                        
            //             할인율 > 0 && (txt += `<h3><s>${commaRegExp(정가)}원</s></h3>`);
                      

            //             판매처 === 'Kurly Only' ? txt += `<h4>${판매처}</h4>` : '';
            //             txt += `            </div>`;
            //             txt += `        </div>`;
            //             txt += `    </div>`;
            //             txt += `</li>`;
            //         });

            //         $('#newProduct').append( txt );

            //     },
            //     error( err ){
            //         console.log('AJAX 실패! ' + err);
            //     }
            // });

        }
    }
    NewProduct.init();

})(jQuery);