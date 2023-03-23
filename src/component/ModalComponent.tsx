import React from 'react';

export default function ModalComponent ({$path, topModalState}: any) {
  // 닫기 누르면 1일동안 열리지 않는 쿠키 설정
  const onClickTopModalClose=(e: any)=>{
    e.preventDefault();
    topModalState();
    let newDate = new Date();
    newDate.setDate(newDate.getDate()+1); // 오늘날짜+1
    document.cookie = `JHTOPMODAL=topmodalclose1day; path=/; expires=${newDate.toUTCString()};`;
  }

  return (
    <div id="modal">
    <div className="container">
        <h1><a href="#!" title="모달">지금 가입하고 인기상품 <strong>100원</strong>에 받아가세요!</a></h1>
        <button className="modal-close-btn" onClick={onClickTopModalClose} title="하루동안 열리지 않음"><img src={`${$path}img/modal/ico_close_fff_84x84.png`} alt=""/></button>
    </div>
  </div>
  );
};
