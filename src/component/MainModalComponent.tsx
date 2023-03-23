import React from 'react';

export default function MainModalComponent ({mainModalState}: any) {
  const onClickMainModalClose=(e: any)=>{
    e.preventDefault();
    mainModalState();
  }

  const onClickMainModalForeverClose=(e: any)=>{
    e.preventDefault();
    mainModalState();
    // 다시 안보기 클릭시 로컬 스토리지에 저장
    let newDate = new Date();
    let obj = {
      모달이름:'mainModal',
      날짜:newDate.toUTCString()
    }

    localStorage.setItem('JHMAINMODAL', JSON.stringify(obj));

  }

  return (
    <div id="mainmodal">
      <div className="wrap">
        <div className="container">
          <div className="img-box">
            <a href="#!">
              <img src="./img/modal/main_modal.jpg" alt="" />
            </a>
          </div>
          <div className="button-box">
            <button onClick={onClickMainModalForeverClose}>다시 안보기</button>
            <button onClick={onClickMainModalClose}>닫기</button>
          </div>
        </div>
      </div>
    </div>
  );
};