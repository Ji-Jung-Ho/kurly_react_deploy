import React, {MouseEvent } from 'react';
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

  const onChangeUserId=(e: any)=>{
    setState(e.target.value);
  }

  // 비밀번호 입력칸 값 변경 이벤트 핸들러
  const onChangeUserPw=(e: any)=>{
    setState(e.target.value);
  }

  // 로그인 버튼 클릭 이벤트 구현`
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
                    onChange={onChangeUserId}
                    />
                </li>
                <li>
                  <input 
                  type="password" 
                  id="pw" 
                  name="pw" 
                  placeholder="비밀번호를 입력해주세요"
                  maxLength={50}
                  onChange={onChangeUserPw}
                  />
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