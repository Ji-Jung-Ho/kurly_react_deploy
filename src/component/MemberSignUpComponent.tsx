import React from 'react';
import ConfirmModalComponent from './member_signup/ConfirmModalComponent'
import SignUpComponent from './member_signup/SignUpComponent'
import TermsViewComponent from './member_signup/TermsViewComponent';

export default function MemberSignUpComponent ({introMainFn}: any) {

  // isConfirmModal, msg 상태관리 함수
  const [isConfirmModal, setIsConfirmModal] = React.useState({
    isConfirmModal: false,
    msg: '',
    isTimer: false
  });

  const [isTermsView, setIsTermsView] = React.useState({
    isTermsView: false,
    msg: '',
    isTimer: false
  });

  // isTermsView, msg 상태변경 함수
  const isTermsViewFn=()=>{
    setIsTermsView({
      ...isTermsView,
      isTermsView: true,
    })
  }

  //  TermsViewFn 닫기 버튼 클릭 이벤트
  const isTermsViewFnCloseFn=()=>{
    setIsTermsView({
      ...isTermsView,
      isTermsView: false,
    })
  }

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
    <> {/* // 빈태그 : div태그를 사용하면 중간에 태그요소가 삽입되어 스타일이나 경로에 영향을 끼칠수있으므로, 가상태그요소인 빈태그를 사용하여 방지한다. */}
      <SignUpComponent isConfirmModalFn={isConfirmModalFn} isTimer={isConfirmModal.isTimer} isTermsViewFn={isTermsViewFn} introMainFn={introMainFn} />
      {isConfirmModal.isConfirmModal && <ConfirmModalComponent msg={isConfirmModal.msg} isConfirmModalCloseFn={isConfirmModalCloseFn}/>}
      {isTermsView.isTermsView && <TermsViewComponent isTermsViewFnCloseFn={isTermsViewFnCloseFn}/>}
    </>
  );
};