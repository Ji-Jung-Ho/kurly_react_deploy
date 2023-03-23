import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainModalComponent from './MainModalComponent';
import ModalComponent from './ModalComponent';
import HeaderComponent from './HeaderComponent';
import IntroMainComponent from './IntroMainComponent';
import SubMain1Component from './SubMain1Component';
import SubMain2Component from './SubMain2Component';
import SubMain3Component from './SubMain3Component';
import SubMain4Component from './SubMain4Component';
import MemberSignUpComponent from './MemberSignUpComponent';
import MemberSignInComponent from './MemberSignInComponent';
import FooterComponent from './FooterComponent';
import QuickMenuComponent from './QuickMenuComponent';
import GoTopComponent from './GoTopComponent';

// 서브페이지 메인1 타입스크립트 선언
// 타입스크립트 객체이름과 속성 == default props 객체이름과 속성
interface newProductType {
  신상품: {
    상품코드: string;
    상품이미지: string;
    카트이미지: string;
    배송구분: string;
    제조사: string;
    상품명: string;
    상품정보: string;
    할인율: number;
    정가: number;
    후기: string;
    판매처?: string;
  }
}
// 서브페이지 메인2 타입스크립트 선언
interface bestProductType {
  베스트: {
    상품코드: string;
    상품이미지: string;
    카트이미지: string;
    배송구분: string;
    제조사: string;
    상품명: string;
    상품정보: string;
    할인율: number;
    정가: number;
    후기: string;
    판매처?: string;
  }
}
// 서브페이지 메인3 타입스크립트 선언
interface savingProductType {
  알뜰쇼핑: {
    상품코드: string;
    상품이미지: string;
    카트이미지: string;
    배송구분: string;
    제조사: string;
    상품명: string;
    상품정보: string;
    할인율: number;
    정가: number;
    판매처?: string;
  }
}
// 서브페이지 메인4 타입스크립트 선언
interface bannerProductType {
  특가혜택: {
    번호: number,
    제목: string,
    이미지: string,
    소개: string
  }
}

export default function WrapComponent (props: any) {
  // 상태관리 함수
  const [isTopModal, setIsTopModal] = React.useState(true);           // 탑모달
  const [isMainModal, setIsMainModal] = React.useState(true);         // 메인모달
  const [isMemberSignIn, setIsMemberSignIn] = React.useState(false);  // 로그인

  const [product1, setProduct1] = React.useState<newProductType>(props.product);      // 서브메인1 신상품 상태관리
  const [product2, setProduct2] = React.useState<bestProductType>(props.product);     // 서브메인2 베스트 상태관리
  const [product3, setProduct3] = React.useState<savingProductType>(props.product);   // 서브메인3 알뜰쇼핑 상태관리
  const [banner, setBanner] = React.useState<bannerProductType>(props.product);       // 서브메인4 알뜰쇼핑 상태관리

  // 서브페이지 메인1 신상품 비동기식 AXIOS 구현
  React.useEffect(()=>{
    axios({
      url:'./data/new_product.json',
      method:'GET'
    })
    .then((res: any)=>{

      setProduct1({신상품:res.data.신상품});
      
    })
    .catch((err: any)=>{
      console.log(`AXIOS 실패 ${err}`);
    });
  },[]);

  // 서브메인2 베스트 비동기식 AXIOS 구현
  React.useEffect(()=>{
    axios({
        url:"./data/best_product.json",
        method:"GET",
    })
    .then((res: any)=>{
      setProduct2({베스트: res.data.베스트});

    })
    .catch((err: any)=>{
        console.log(`AXIOS 실패 ${err}`);
    })
  },[])

  // 서브메인3 알뜰쇼핑 비동기식 AXIOS 구현
  React.useEffect(()=>{
    axios({
        url:"./data/saving_product.json",
        method:"GET",
    })
    .then((res: any)=>{
      setProduct3({알뜰쇼핑: res.data.알뜰쇼핑});

    })
    .catch((err: any)=>{
        console.log(`AXIOS 실패 ${err}`);
    })
  },[])

  // 서브메인4 특가/혜택 비동기식 AXIOS 구현
  React.useEffect(()=>{
    axios({
      url:"./data/banner.json",
      method:'GET'
    })
    .then((res)=>{
      setBanner({특가혜택: res.data.특가혜택});
    })
    .catch((err)=>{
      console.log(`AXIOS 실패 ${err}`);
    })
  },[])

  // 탑모달 상태변경 함수
  const topModalState=()=>{
    setIsTopModal(false);
  }
  // 메인모달 상태변경 함수
  const mainModalState=()=>{
    setIsMainModal(false);
  }

  // 홈페이지 접속 시 topmodal 쿠키 이름과 값이 존재하면 탑 모달 숨기기
  const topModalFn=()=>{
    if (document.cookie === '') return;

    let result = document.cookie.split(';');
    let obj : Array<any> = []; //배열처리 타입지정

    result.map((item, idx)=>{
      return obj[idx] = {
        쿠키이름: item.split('=')[0].trim(),
        쿠키값:  item.split('=')[1].trim()
      }
    });
    // 쿠키이름, 쿠키값이 존재하면 topmodal 숨기기
    obj.map((item)=>{
      if(item.쿠키이름 === 'JHTOPMODAL' && item.쿠키값 === 'topmodalclose1day') {
        return setIsTopModal(false);   // 탑모달 안보임
      }
      else {
        return setIsTopModal(true);     // 탑모달 보임
      }
  })
  }

  // 홈페이지 접속 시 로컬스토리지에 mainmodal 키가 존재하면 숨기기
  const mainModalFn=()=>{
    let result: any = null;
    for(let i = 0; i < localStorage.length; i++) {
      result = JSON.parse(`${localStorage.getItem('JHMAINMODAL')}`);
    }
    if (result === null || result === '') return;

    if (result.모달이름 === 'mainModal') {
      setIsMainModal(false);
    }
    else {
      setIsMainModal(true);
    }
  }

  React.useEffect(()=>{
    topModalFn();
    mainModalFn();
  },[]);

// 로그인 상태변경 함수
const memberSignInFn=()=>{
  setIsMemberSignIn(true);   // 로그인 보임
}

  return (
    <div id="wrap">
      { // 탑모달
      isTopModal && <ModalComponent $path={props.$path} topModalState={topModalState}/>
      }
      { // 메인모달
       isMainModal && <MainModalComponent mainModalState={mainModalState}/>
      }
       
       <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<HeaderComponent  $path={props.$path}/>}>
              <Route index  element={<IntroMainComponent />}/>
              <Route path='/신상품' element={<SubMain1Component 신상품={product1.신상품} /> }/>
              <Route path='/베스트' element={<SubMain2Component 베스트={product2.베스트} /> }/>
              <Route path='/알뜰쇼핑' element={<SubMain3Component 알뜰쇼핑={product3.알뜰쇼핑} /> }/>
              <Route path='/특가혜택' element={<SubMain4Component 특가혜택={banner.특가혜택} /> }/>
              <Route path='/회원가입' element={<MemberSignUpComponent/>}/>
              <Route path='/로그인' element={<MemberSignInComponent />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      
      
      { // 푸터
        <FooterComponent $path={props.$path}/>
      }
      { // 퀵메뉴
        <QuickMenuComponent $path={props.$path}/>
      }
      { // 고탑
        <GoTopComponent $path={props.$path}/>
      }
    </div>
  );
};

WrapComponent.defaultProps = {
  $path: './',
  product: {
    신상품: {
      상품코드: '',
      상품이미지: '',
      카트이미지: '',
      배송구분: '',
      제조사: '',
      상품명: '',
      상품정보: '',
      할인율: 0,
      정가: 0,
      후기: '',
      판매처: ''
    },
    베스트: {
      상품코드: '',
      상품이미지: '',
      카트이미지: '',
      배송구분: '',
      제조사: '',
      상품명: '',
      상품정보: '',
      할인율: 0,
      정가: 0,
      후기: '',
      판매처: ''
    },
    알뜰쇼핑: {
      상품코드: '',
      상품이미지: '',
      카트이미지: '',
      배송구분: '',
      제조사: '',
      상품명: '',
      상품정보: '',
      할인율: 0,
      정가: 0,
      판매처: ''
    },
    특가혜택: {
      번호: 0,
      제목: '',
      이미지: '',
      소개: '',
    }
  }
}


