import React, { ChangeEvent, MouseEvent } from 'react';
import {Outlet, Link} from 'react-router-dom'

interface MemberTypes {
  loginId:        string,
  loginIdErrMsg:  string,
  isLogin:        boolean,

  loginPw:        string,
  loginPwErrMsg:  string,
  isLoginPw:      boolean
}

export default function MemberSignInComponent ({login, isConfirmModalFn} :any) {

  const[state, setState] = React.useState<MemberTypes>(login);

  // 아이디 입력상자 온체인지 이벤트 구현
  const onChangeId=(e: ChangeEvent<HTMLInputElement>)=>{
    const regExp1: RegExp = /[`~!@#$^&*()\-_=+\\|[\]{};:'",<.>/?]/g;
    const regExp2: RegExp = /.{6,16}/g;
    const regExp3: RegExp = /(?=.*[A-Za-z])+(?=.*[0-9])*/g;
    const regExp4: RegExp = /\s/g;
    const regExp5: RegExp = /([a-zA-Z0-9])+([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])|([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])+([a-zA-Z0-9])/;

    let {value} = e.target;
    let loginId: string = '';
    let isLogin: boolean = false;
    let loginIdErrMsg: string = '';

    loginId = value.replace(regExp1, '');

    if (regExp2.test(loginId) === false || regExp3.test(loginId) === false || regExp4.test(loginId) === true) {
      isLogin = true;
      loginIdErrMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
    }
    else if (regExp5.test(loginId) === true) {
      isLogin = true;
      loginIdErrMsg = '한글 입력 불가';
    }
    else {
      isLogin = false;
      loginIdErrMsg = '';
    }
    
    setState({
      ...state,
      loginId: value,
      isLogin: isLogin,
      loginIdErrMsg: loginIdErrMsg
    })

  }

  // 비밀번호 입력상자 온체인지 이벤트 구현
  const onChangePw=(e: ChangeEvent<HTMLInputElement>)=>{
    const regExp1: RegExp = /.{10,}/g;
    const regExp2: RegExp = /((?=.*[A-Za-z]+)(?=.*[0-9]+))|((?=.*[A-Za-z]+)(?=.*[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]+))|((?=.*[0-9]+)(?=.*[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]+))/g;
    const regExp3: RegExp = /\s/g;                    
    const regExp4: RegExp = /(\d)\1\1/g;
    const {value} = e.target;

    let loginPwErrMsg: string = '';
    let isLoginPw: boolean = false;

    if(regExp1.test(value)===false){
        loginPwErrMsg = '최소 10자 이상 입력';
        isLoginPw = true;
    }
    else if(regExp2.test(value)===false || regExp3.test(value)===true){
        loginPwErrMsg = '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합';
        isLoginPw = true;
    }
    else if(regExp4.test(value)===true){
        loginPwErrMsg = '동일한 글자 3개 이상 연속 사용 불가';
        isLoginPw = true;
    }
    else { // 정상
        loginPwErrMsg = '';
        isLoginPw = false;
    }

    setState({
        ...state,
        loginPw : value,
        loginPwErrMsg : loginPwErrMsg,
        isLoginPw : isLoginPw
    })
  }

  // 로그인 버튼 클릭 이벤트 구현
  const onClickLogin=(e:MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    
    isConfirmModalFn('준비중입니다.');
    
  }
  return (
  <>
    <main id="main">
      <section id="signIn">
        <div className="container">
          <div className="title">
            <h2>로그인</h2>
          </div>
          <div className="content">
            <form id="signIn" name="sign_in" method="post" action="./member_sign_in.php">
              <ul>
                <li>
                  <input 
                    type="text" 
                    id="id" 
                    name="login_id" 
                    placeholder="아이디를 입력해주세요"
                    maxLength={16}
                    onChange={onChangeId}
                    value={state.loginId}
                    />
                  <p className={`error-message loginId-error-message${state.isLogin ? ' on' : ''}`}>{state.loginIdErrMsg}</p>
                </li>
                <li>
                  <input 
                  type="password" 
                  id="pw" 
                  name="pw" 
                  placeholder="비밀번호를 입력해주세요"
                  maxLength={50}
                  onChange={onChangePw}
                  value={state.loginPw}
                  />
                  <p className={`error-message loginPw-error-message${state.isLoginPw ? ' on' : ''}`}>{state.loginPwErrMsg}</p>
                </li>
                <li><a href="#!">아이디찾기</a><i>|</i><a href="#!">비밀번호찾기</a></li>
                <li><button type="submit" className="submit-btn" onClick={onClickLogin}>로그인</button></li>
                <li><Link to='/회원가입'><button type="button" className="member-signin-btn">회원가입</button></Link></li>
              </ul>    
            </form>
          </div>
        </div>
      </section>
    </main>
  <Outlet/>
  </>
  );
};

MemberSignInComponent.defaultProps = {
  login : {
    loginId: '',
    loginIdErrMsg: '',
    isLogin: false,
    loginPw: '',
    loginPwErrMsg: '',
    isLoginPw: false
  }
}