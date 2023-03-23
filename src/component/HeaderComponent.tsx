import React from 'react';
import {Outlet, Link} from 'react-router-dom'

export default function HeaderComponent ({$path}: any) {

    // 주소검색 버튼 클릭 이벤트 구현
    const onClickAddressSearchBtn=()=>{
        // 팝업창 띄우기
        const _fileName: string = "./popup.html";
        const _winName: string = "_address_api";
        const _width: number = 530;
        const _height: number = 569;
        const _top: number = (window.innerHeight - _height) / 2; // 769-569=200/2=100
        const _left: number = (window.innerWidth - _width) / 2; // 1903-530=1373/2=686.5
        window.open(_fileName,_winName,`width=${_width},height=${_height},top=${_top},left=${_left}`);
    }
    
    
  return (
    <>
      <header id="header">
        <div className="row1">
            <div className="row1-1">
                <ul id="topMenu" className="member-bar">
                    <li><Link to="/회원가입" className="on" >회원가입</Link></li>
                    <li><i>|</i></li>
                    <li><Link to="/로그인">로그인</Link></li>
                    <li><i>|</i></li>
                    <li><a href="#!">고객센터<img src={`${$path}img/header/ico_down_16x10.png`} alt=""/></a>
                        <ul className="service-center">
                            <li><a href="#!">공지사항</a></li>
                            <li><a href="#!">자주하는 질문</a></li>
                            <li><a href="#!">1:1 문의</a></li>
                            <li><a href="#!">대량주문 문의</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="row1-2">
                <div className="left">
                    <ul>
                        <li>
                            <h1>
                                <Link to="/" title='kurly Home'><img src={`${$path}img/header/logo_kurly.svg`} alt="홈으로"/><span>마켓컬리</span></Link>
                            </h1>
                        </li>
                        <li>
                            <i>|</i>
                        </li>
                        <li>
                            <a href="#!">뷰티컬리<img src={`${$path}img/header/n.svg`} alt=""/></a>
                        </li>
                    </ul>
                </div>
                <div className="center">
                    <input type="text" name="search" id="search" placeholder="검색어를 입력해주세요"/>
                    <a href="#!" className="search-btn"><img src={`${$path}img/header/search.svg`} alt=""/></a>
                </div>
                <div className="right">
                    <div className="map-btn"><img src={`${$path}img/header/map.svg`} alt=""/>
                        <div className='tooltip' >
                            <p>
                                <strong>배송지를 등록</strong>하고
                                <br/>
                                <span>구매 가능한 상품을 확인하세요!</span>
                            </p>
                            <div className='tooltip-button'>
                                <Link to='/로그인' className="login-btn"><button type="button"><span>로그인</span></button></Link>
                                <button type="button" onClick={onClickAddressSearchBtn} className="addr-btn"><span><img src={`${$path}img/header/info_search.png`}alt=""/>주소검색</span></button>
                            </div>
                        </div>
                    </div>
                    <a href="#!" className="heart-btn"><img src={`${$path}img/header/heart.svg`} alt=""/></a>
                    <a href="#!" className="cart-btn"><img src={`${$path}img/header/cart.svg`} alt=""/></a>
                </div>
            </div>
        </div>
        <div className="row2">
            <div className="row2-container">
                <div className="left">
                    <a href="#!" className="menu-bar-btn">
                        <img src={`${$path}img/header/menu_bar.svg`}  alt=""/>
                        <span>카테고리</span>
                        <div className="category-tooltip">
                            <div className="category-option">
                                <ul>
                                    <li className="newyear">
                                        <div className="wrap">
                                            <img src={`${$path}img/header/2023year.webp`} className="newyear" alt=""/>
                                            <span>2023 새해 선물세트</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>건강식품·홍삼</span></div></li>
                                            <li><div className="title"><span>뷰티</span></div></li>
                                            <li><div className="title"><span>베이커리·디저트</span></div></li>
                                            <li><div className="title"><span>오일·가공·소스</span></div></li>
                                            <li><div className="title"><span>과일·견과</span></div></li>
                                            <li><div className="title"><span>정육</span></div></li>
                                            <li><div className="title"><span>수산</span></div></li>
                                            <li><div className="title"><span>주방·생활</span></div></li>
                                            <li><div className="title"><span>음료·전통주</span></div></li>
                                            <li><div className="title"><span>3만원이하 선물세트</span></div></li>
                                            <li><div className="title"><span>5만원이하 선물세트</span></div></li>
                                            <li><div className="title"><span>7만원이하 선물세트</span></div></li>
                                            <li><div className="title"><span>10만원이하 선물세트</span></div></li>
                                        </ul>
                                    </li>
                                    <li className="vegetable">
                                        <div className="wrap">
                                            <div className="vegetable"><img src="./img/header/vegetable.webp"   alt=""/></div>
                                            <span>채소</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>친환경</span></div></li>
                                            <li><div className="title"><span>고구마·감자·당근</span></div></li>
                                            <li><div className="title"><span>시금치·쌈채소·나물</span></div></li>
                                            <li><div className="title"><span>브로콜리·파프리카·양배추</span></div></li>
                                            <li><div className="title"><span>양파·대파·마늘·배추</span></div></li>
                                            <li><div className="title"><span>오이·호박·고추</span></div></li>
                                            <li><div className="title"><span>냉동·이색·간편채소</span></div></li>
                                            <li><div className="title"><span>콩나물·버섯</span></div></li>
                                        </ul>
                                    </li>
                                    <li className="fruit">
                                        <div className="wrap">
                                            <img src="./img/header/fruit.webp" className="fruit"  alt=""/>
                                            <span>과일·견과·쌀</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>친환경</span></div></li>
                                            <li><div className="title"><span>제철과일</span></div></li>
                                            <li><div className="title"><span>국산과일</span></div></li>
                                            <li><div className="title"><span>수입과일</span></div></li>
                                            <li><div className="title"><span>간편과일</span></div></li>
                                            <li><div className="title"><span>냉동·건과일</span></div></li>
                                            <li><div className="title"><span>견과류</span></div></li>
                                            <li><div className="title"><span>쌀·잡곡</span></div></li>
                                        </ul>
                                    </li>
                                    <li className="seafood">
                                        <div className="wrap">
                                            <img src="./img/header/seafood.webp" className="seafood"  alt=""/>
                                            <span>수산·해산·건어물</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>제철수산</span></div></li>
                                            <li><div className="title"><span>생선류</span></div></li>
                                            <li><div className="title"><span>굴비·반건류</span></div></li>
                                            <li><div className="title"><span>오징어·낙지·문어</span></div></li>
                                            <li><div className="title"><span>새우·게·랍스터</span></div></li>
                                            <li><div className="title"><span>해산물·조개류</span></div></li>
                                            <li><div className="title"><span>수산가공품</span></div></li>
                                            <li><div className="title"><span>김·미역·해조류</span></div></li>
                                            <li><div className="title"><span>건우물·다시팩</span></div></li>
                                        </ul>
                                    </li>
                                    <li className="meat">
                                        <div className="wrap">
                                            <img src="./img/header/meat.webp" className="meat"  alt=""/>
                                            <span>정육·계란</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>국내산 소고기</span></div></li>
                                            <li><div className="title"><span>수입산 소고기</span></div></li>
                                            <li><div className="title"><span>돼지고기</span></div></li>
                                            <li><div className="title"><span>계란류</span></div></li>
                                            <li><div className="title"><span>닭·오리고기</span></div></li>
                                            <li><div className="title"><span>양념육·돈까스</span></div></li>
                                            <li><div className="title"><span>양고기</span></div></li>
                                        </ul>
                                    </li>
                                    <li className="soup">
                                        <div className="wrap">
                                            <img src="./img/header/soup.webp" className="soup"  alt=""/>
                                            <span>국·반찬·메인요리</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>국·탕·찌개</span></div></li>
                                            <li><div className="title"><span>밀키트·메인요리</span></div></li>
                                            <li><div className="title"><span>밑반찬</span></div></li>
                                            <li><div className="title"><span>김치·젓갈·장류</span></div></li>
                                            <li><div className="title"><span>두부·어묵·부침개</span></div></li>
                                            <li><div className="title"><span>베이컨·햄·통조림</span></div></li>
                                        </ul>
                                    </li>
                                    <li className="salad">
                                        <div className="wrap">
                                            <img src="./img/header/salad.webp" className="salad"  alt=""/>
                                            <span>샐러드·간편식</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>샐러드·닭가슴살</span></div></li>
                                            <li><div className="title"><span>도시락·밥류</span></div></li>
                                            <li><div className="title"><span>파스타·면류</span></div></li>
                                            <li><div className="title"><span>떡볶이·튀김·순대</span></div></li>
                                            <li><div className="title"><span>피자·핫도그·만두</span></div></li>
                                            <li><div className="title"><span>폭립·떡갈비·안주</span></div></li>
                                            <li><div className="title"><span>죽·스프·카레</span></div></li>
                                            <li><div className="title"><span>선식·시리얼</span></div></li>
                                        </ul>
                                    </li>
                                    <li className="seasoning">
                                        <div className="wrap">
                                            <img src="./img/header/seasoning.webp" className="seasoning"  alt=""/>
                                            <span>면·양념·오일</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>파스타·면류</span></div></li>
                                            <li><div className="title"><span>식초·소스·드레싱</span></div></li>
                                            <li><div className="title"><span>양념·액젓·장류</span></div></li>
                                            <li><div className="title"><span>식용유·참기름·오일</span></div></li>
                                            <li><div className="title"><span>소금·설탕·향신류</span></div></li>
                                            <li><div className="title"><span>밀가루·가루·믹스</span></div></li>
                                        </ul>
                                    </li>
                                    <li className="coffee">
                                        <div className="wrap">
                                            <img src="./img/header/coffee.webp" className="coffee"  alt=""/>
                                            <span>생수·음료·우유·커피</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>생수·탄산수</span></div></li>
                                            <li><div className="title"><span>음료·주스</span></div></li>
                                            <li><div className="title"><span>우유·두유·요거트</span></div></li>
                                            <li><div className="title"><span>커피</span></div></li>
                                            <li><div className="title"><span>차</span></div></li>
                                        </ul>
                                    </li>
                                    <li className="cookie">
                                        <div className="wrap">
                                            <img src="./img/header/cookie.webp" className="cookie"  alt=""/>
                                            <span>간식·과자·떡</span>
                                        </div>
                                        <ul>
                                            <li><div className="title"><span>과자·스낵·쿠키</span></div></li>
                                            <li><div className="title"><span>초콜릿·젤리·캔디</span></div></li>
                                            <li><div className="title"><span>떡·한과</span></div></li>
                                            <li><div className="title"><span>아이스크림</span></div></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    
                </div>
                <div className="center">
                    <nav id="nav">
                        <span><Link to="/신상품">신상품</Link></span>
                        <span><Link to="/베스트">베스트</Link></span>
                        <span><Link to="/알뜰쇼핑">알뜰쇼핑</Link></span>
                        <span><Link to="/특가혜택">특가/혜택</Link></span>
                    </nav>
                </div>
                <div className="right">
                    <a href="#!">
                        <strong>샛별・낮</strong>
                        <span>배송안내</span>
                    </a>
                </div>
            </div>
        </div>
      </header>
    <Outlet/>
    </>
  );
};