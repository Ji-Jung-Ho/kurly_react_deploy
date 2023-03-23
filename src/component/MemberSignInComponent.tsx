import React from 'react';
import SignInComponent from './member_signin/SignInComponent';
import ConfirmModalComponent from './member_signup/ConfirmModalComponent'

export default function MemberSignUpComponent ({introMainFn}: any) {

  // isConfirmModal, msg 상태관리 함수
  const [isConfirmModal, setIsConfirmModal] = React.useState({
    isConfirmModal: false,
    msg: '',
    isTimer: false
  });

  // isConfirmModal, msg 상태변경 함수
  const isConfirmModalFn=(msg: any)=>{
    setIsConfirmModal({
      ...isConfirmModal,
      isConfirmModal: true,
      msg: msg,
    })
  }

  //  confirmmodal 닫기 버튼 클릭 이벤트
  const isConfirmModalCloseFn=()=>{
    let isTimer: boolean = false;

    if (isConfirmModal.msg.indexOf('인증번호') >= 0) {
      isTimer = true;   // 타이머 작동
    }
    else {
      isTimer = false;  // 타이머 정지
    }

    setIsConfirmModal({
      ...isConfirmModal,
      isConfirmModal: false,
      msg: '',
      isTimer: isTimer,
    })
  }

  return (
    <>
      <SignInComponent isConfirmModalFn={isConfirmModalFn} isTimer={isConfirmModal.isTimer} introMainFn={introMainFn} />
      {isConfirmModal.isConfirmModal && <ConfirmModalComponent msg={isConfirmModal.msg} isConfirmModalCloseFn={isConfirmModalCloseFn}/>}
    </>
  );
};