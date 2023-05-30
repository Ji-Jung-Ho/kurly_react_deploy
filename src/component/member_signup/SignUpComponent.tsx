import React, { ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

// interface object
interface MemberTypes {
    아이디:                 string,
    isId:                   boolean,
    아이디중복확인:         boolean,
    idErrMsg:               string,

    비밀번호:               string,
    pwErrMsg:               string,
    isPw:                   boolean,
    비밀번호확인:           string,
    pwOkErrMsg:             string,
    isPwOk:                 boolean,

    이름:                   string,
    nameErrMsg:             string,
    isName:                 boolean,

    이메일:                 string,
    emailErrMsg:            string,
    isEmail:                boolean,
    이메일중복확인:         boolean,

    휴대폰:                 string,
    isHp:                   boolean,
    휴대폰인증확인:         boolean,
    인증번호:               number,
    인증번호입력상자:       string,
    isHpOkBox:              boolean,
    isInputHp:              boolean,
    isHpNum2Btn:            boolean,
    isHpNumOkBtn:           boolean,
    hpErrMsg:               string,
    setId:                  number,
    minute:                 number,
    second:                 number,

    주소1:                  string,
    주소2:                  string,
    isAddrHide:             boolean,
    isAddrApiBtn:           boolean,

    성별:                   string,

    생년:                   string,
    생월:                   string,
    생일:                   string,
    isBirth:                boolean,
    birthErrMsg:            string,

    추가입력사항:           string,
    추가입력사항입력상자:   string,
    isAddInput:             boolean,
    placeholderTxt:         string,
    addInputInfoMsg:        string,
    isAddInputIdOk:         boolean,
    아이디확인:             boolean,

    이용약관내용:           Array<string>,
    이용약관동의:           Array<string>
}

export default function SignUpComponent ({회원, isConfirmModalFn, isTimer, isTermsViewFn}: any) {

    // 회원가입 상태관리 변수
    // props 변수값을 상태관리 변수로 지정 (제네릭)
    const [state, setState] = React.useState<MemberTypes>(회원);
    const navigate: any = useNavigate();

    // 1. 아이디 입력상자 온체인지 이벤트 구현
    // 입력상자 돔 요소 타입설정 : change event
    const onChangeId=(e:ChangeEvent<HTMLInputElement>)=>{

        const regExp1: RegExp = /[`~!@#$^&*()\-_=+\\|[\]{};:'",<.>/?]/g;
        const regExp2: RegExp = /.{6,16}/g;
        const regExp3: RegExp = /(?=.*[A-Za-z])+(?=.*[0-9])*/g;
        const regExp4: RegExp = /\s/g;
        const regExp5: RegExp = /([a-zA-Z0-9])+([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])|([ㄱ-ㅎ|ㅏ-ㅣ|가-힣])+([a-zA-Z0-9])/;  // 영문/숫자 앞에 한글이 한글자 이상, 한글 뒤에 영문/숫자가 한글자 이상

        let {value} = e.target;     // 비구조화
        let 아이디: string = '';            // 임시변수
        let isId: boolean = false;        // 임시변수
        let idErrMsg: string = '';

        아이디 = value.replace(regExp1,'');

        if( regExp2.test(아이디)=== false || regExp3.test(아이디) === false || regExp4.test(아이디) === true ){
            isId = true;
            idErrMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
        }
        else if (regExp5.test(아이디) === true) {
            isId = true;
            idErrMsg = '한글 입력 불가';
        }
        else { // 정상
            isId = false;
            idErrMsg = '';
        }

        setState({
            ...state,
            아이디: 아이디,
            isId: isId,
            idErrMsg: idErrMsg
        })
    }
    
    // 2. 아이디 중복확인 버튼 클릭 이벤트 구현
    // 버튼 타입 설정 : 버튼 클릭은 Mouse로 (HTMLbuttonElement)
    const onClickidOkBtn=(e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();

        const regExp2: RegExp = /.{6,16}/g;
        const regExp3: RegExp = /(?=.*[A-Za-z])+(?=.*[0-9])*/g;
        const regExp4: RegExp = /\s/g;
        const {아이디} = state;
        let 아이디중복확인: boolean = false;

        if( regExp2.test( 아이디 ) === false || regExp3.test(아이디) === false || regExp4.test(아이디) === true ){
            isConfirmModalFn('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합');
        }
        else {
            axios({
                url: 'https://kiik52.com/kurly_study/member_select.php',
                method: 'GET'
            })
            .then((res)=>{
                let result: Array<boolean> = res.data.map((item: any)=>item.아이디 === state.아이디);
    
                if (result.includes(true)) {
                    isConfirmModalFn('사용 불가능한 아이디 입니다.');
                    아이디중복확인 = false;
                }
                else {
                    isConfirmModalFn('사용 가능한 아이디 입니다.');
                    아이디중복확인 = true;
                }
                
                setState({
                    ...state,
                    아이디중복확인 : 아이디중복확인
                })
            })
            .catch((err)=>{
                console.log('AXIOS 실패' + err);
            });
        }
    }

    // 3. 비밀번호 입력상자 온체인지 이벤트 구현
    const onChangePw=(e:ChangeEvent<HTMLInputElement>)=>{

        const regExp1: RegExp = /.{10,}/g;
        const regExp2: RegExp = /((?=.*[A-Za-z]+)(?=.*[0-9]+))|((?=.*[A-Za-z]+)(?=.*[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]+))|((?=.*[0-9]+)(?=.*[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]+))/g;
        const regExp3: RegExp = /\s/g;                    
        const regExp4: RegExp = /(\d)\1\1/g;
        const {value} = e.target;

        let pwErrMsg: string = '';
        let isPw: boolean = false;

        if( regExp1.test(value)===false ){
            pwErrMsg = '최소 10자 이상 입력';
            isPw = true;
        }
        else if( regExp2.test(value)===false || regExp3.test(value)===true  ){
            pwErrMsg = '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합';
            isPw = true;
        }
        else if(regExp4.test(value)===true){
            pwErrMsg = '동일한 글자 3개 이상 연속 사용 불가';
            isPw = true;
        }
        else { // 정상
            pwErrMsg = '';
            isPw = false;
        }

        setState({
            ...state,
            비밀번호 : value,
            pwErrMsg : pwErrMsg,
            isPw : isPw
        })
    }

    // 비밀번호확인 입력상자 온체인지 이벤트 구현
    const onChangePwOk=(e:ChangeEvent<HTMLInputElement>)=>{

        const {value} = e.target;
        let pwOkErrMsg: string = '';
        let isPwOk: boolean = false;

        if( state.비밀번호 !== value ){
            pwOkErrMsg = '동일한 비밀번호를 입력';
            isPwOk = true;
        }
        else{
            pwOkErrMsg = '';
            isPwOk = false;
        }

        setState({
            ...state,
            비밀번호확인: value,
            pwOkErrMsg: pwOkErrMsg,
            isPwOk: isPwOk
        })
    }

    // 이름 입력상자 온체인지 이벤트 구현
    const onChangeName=(e:ChangeEvent<HTMLInputElement>)=>{
        const regExp1: RegExp = /[`~!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?]/g;
        const regExp2: RegExp = /[^0-9]/g;
        const regExp3: RegExp = /[^a-z|A-Z]/g;
        let {value} = e.target;
        let 이름: string = '';
        let nameErrMsg: string = '';
        let isName: boolean = false;

        이름 = value.replace(regExp1, '');

        if(value === ''){
            nameErrMsg = '이름을 입력해 주세요.'
            isName = true;
        }
        else if (regExp2.test(이름) === false || regExp3.test(이름) === false) {
            nameErrMsg = '이름을 한글로 작성해 주세요.'
            isName = true;
        }
        else{
            nameErrMsg = ''
            isName = false;
        }

        setState({
            ...state,
            이름: 이름,
            nameErrMsg: nameErrMsg,
            isName: isName
        })
    }

    // 이메일 입력상자 온체인지 이벤트 구현
    const onChangeEmail=(e:ChangeEvent<HTMLInputElement>)=>{
        const regExp1: RegExp = /\s/g;
        const regExp2: RegExp = /^[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+@[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+\.[A-Za-z]{2,3}$/g;
        const regExp3: RegExp = /[@()\\[\]":;,<>]/g;
        let {value} = e.target;
        let emailErrMsg: string = '';
        let isEmail: boolean = false;

        if ( regExp1.test(value)===true || regExp2.test(value)===false || regExp3.test(value) === false ){
            emailErrMsg = '이메일 형식으로 입력해 주세요.'
            isEmail = true;
            if (value === '') {
                emailErrMsg = '이메일을 입력해 주세요.';
                isEmail = true;
            }
        }
        else {
            emailErrMsg = ''
            isEmail = false;
        }

        setState({
            ...state,
            이메일: value,
            emailErrMsg: emailErrMsg,
            isEmail: isEmail
        })
    }

    // 이메일 중복확인 버튼 클릭 이벤트 구현
    const onClickEmailOk=(e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const regExp1: RegExp = /\s/g;
        const regExp2: RegExp = /^[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+@[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+(\.)*[A-Za-z0-9`~!#$%^&*\-_=+|{}'/?]+\.[A-Za-z]{2,3}$/g;
        const regExp3: RegExp = /[@()\\[\]":;,<>]/g;
        const {이메일} = state;
        let 이메일중복확인: boolean = false;

        if(이메일 === ''){
            isConfirmModalFn('이메일을 입력해 주세요.');
        }
        else if( regExp1.test(이메일) === true || regExp2.test(이메일) === false || regExp3.test(이메일) === false){
            isConfirmModalFn('이메일 형식으로 입력해 주세요.');                
        }
        else{        
            axios({
                url: 'https://kiik52.com/kurly_study/member_select.php',
                method: 'GET'
            })
            .then((res)=>{
                let result: Array<boolean> = res.data.map((item: any)=>item.이메일 === state.이메일);
                if (result.includes(true)) {
                    isConfirmModalFn('사용 불가능한 이메일 입니다.');
                    이메일중복확인 = false;
                }
                else {
                    isConfirmModalFn('사용 가능한 이메일 입니다.');
                    이메일중복확인 = true;
                }
                setState({
                    ...state,
                    이메일중복확인: 이메일중복확인
                })
            })
            .catch((err)=>{
                console.log('AXIOS 실패' + err);
            });
        }
    }

    // 휴대폰 입력상자 온체인지 이벤트 구현
    const onChangeHp=(e:ChangeEvent<HTMLInputElement>)=>{

        const regExp1: RegExp = /[^\d]/g;
        const {value} = e.target;
        let 휴대폰: string = '';
        let isHp: boolean = false;

        휴대폰 = value.replace(regExp1,'');
        
        if( value.length > 1 ){
            isHp = true;
        }
        else {
            isHp = false;
        }
        setState({
            ...state,
            휴대폰: 휴대폰,
            isHp: isHp
        })

    }

    // 휴대폰 인증번호 받기 버튼 클릭 이벤트 구현
    const onClickHpNum=(e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();

        const regExp2: RegExp = /^01[0|1|2|6|7|8|9]+[0-9]{3,4}[0-9]{4}$/g;
        let num: number = 0;
        let isHpOkBox: boolean = false;
        let isHp: boolean = true;
        let isInputHp: boolean = false;
        let 인증번호입력상자: string = '';

        num = Math.floor(Math.random()*900000+100000);

        if( regExp2.test( state.휴대폰 )===false ){
            isConfirmModalFn('잘못된 휴대폰 번호 입니다. \n 확인 후 다시 시도해 주세요.');
            isHpOkBox = false;
            isInputHp = false;
            isHp = true;
        }
        else {
            isConfirmModalFn(`인증번호가 발송되었습니다. \n ${num}`);
            isHpOkBox = true;
            isInputHp = true;
            isHp = false;
            인증번호입력상자 = '';
        }

        setState({
            ...state,
            인증번호: num,
            isHpOkBox: isHpOkBox,
            isInputHp: isInputHp,
            isHp: isHp,
            인증번호입력상자: 인증번호입력상자
        })

    }

    // 휴대폰 인증번호 입력상자 온체인지 이벤트 구현
    const onChangeInputHpOk=(e:ChangeEvent<HTMLInputElement>)=>{
        const regExp1: RegExp = /[^\d]/g;
        const {value} = e.target;
        let 인증번호입력상자: string = '';
        
        if(value.length >= 1){
            clearInterval(state.setId);
        }

        인증번호입력상자 = value.replace(regExp1, '');

        setState({
            ...state,
            인증번호입력상자: 인증번호입력상자
        })
    }

    // 휴대폰 인증번호 확인 버튼 클릭 이벤트 구현
    const onClickHpOk=(e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        let 휴대폰인증확인: boolean = false;
        let isHpOkBox: boolean  = true;
        let isHpNum2Btn: boolean = false;
        let isHpNumOkBtn: boolean = false;
        // hp-num-btn, hp-num2-btn은 서로 반대라서 부정문을 사용한다

        if (Number(state.인증번호입력상자) === state.인증번호) {
        // Number(숫자(문자열)) === 숫자(정수)
            isConfirmModalFn('인증에 성공 하였습니다.');
            isHpOkBox = false;
            휴대폰인증확인 = true;
            isHpNum2Btn = true;
        } else {
            isConfirmModalFn('잘못된 인증 코드 입니다.');
            isHpOkBox = true;
            휴대폰인증확인 = false;
            isHpNum2Btn = false;
        }
        setState({
            ...state,
            isHp: false,
            isHpNumOkBtn: isHpNumOkBtn,
            isHpOkBox: isHpOkBox,
            isHpNum2Btn: isHpNum2Btn,
            휴대폰인증확인: 휴대폰인증확인
        })
    }

    // 다른번호 인증 버튼 클릭 이벤트 구현
    const onClickHpNumBtn=(e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();

        setState ({
            ...state,
            isInputHp: false,
            isHpNum2Btn: false,
            isHpNumOkBtn: false,
            isHp: false,
            휴대폰: '',
            hpErrMsg: '휴대폰 번호를 입력해주세요.'
        })
    } 

    // 휴대폰 타이머 카운트 함수
    function hpTimerCount(){
        let setId: any = 0;
        let minute: number = 2;
        let second: number = 59;
        
        setId = setInterval(function(){
            second--;
            if(second < 0){
                second = 59;
                minute--;
                if(minute < 0){
                    clearInterval(setId);
                    minute = 0;
                    second = 0;
                    isConfirmModalFn('유효 시간이 만료되었습니다. \n 다시 시도해 주세요.');
                }
            }
            setState({
                ...state,
                setId: setId,
                minute: minute,
                second: second,
            })

        },1000);
    }

    React.useEffect(()=>{
        isTimer && hpTimerCount();    // istimer 변수가 true 이면 타이머 실행, 아니면 정지
    },[isTimer]);   // isTimer가 변경되면 실행

    // 카카오 주소검색 api 팝업창
    const addressSearchFn=()=>{
        const _fileName: string = './popup.html';
        const _winName: string = '_address_api';
        const _width: number = 530;
        const _height: number = 569;
        const _top: number =  (window.innerHeight-_height)/2;
        const _left: number = (window.innerWidth-_width)/2;
        window.open( _fileName , _winName ,`width=${_width},height=${_height},top=${_top},left=${_left}`);
    }
    // 주소검색 버튼 클릭 이벤트 구현
    const onClickAddressSearchBtn=(e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addressSearchFn();
    }

    // 주소1 입력상자 온체인지 이벤트 구현
    const onChangeInputAddr1=(e:ChangeEvent<HTMLInputElement>)=>{
        // const {value} = e.target;

        // setState({
        //     ...state,
        //     주소1: value
        // })
    }

    // 주소2 입력상자 온체인지 이벤트 구현
    const onChangeInputAddr2=(e:ChangeEvent<HTMLInputElement>)=>{
        // const {value} = e.target;

        // setState({
        //     ...state,
        //     주소2: value
        // })
    }

    // 주소 재검색 버튼 클릭 이벤트 구현
    const onClickAddrReBtn=(e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addressSearchFn();
    }

    // 로딩시 세션스토리지에 저장된 값(kurly_search_address) 불러오고 유지하기
    // 비동기 방식으로 처리 (Promise)
    const getSessionAddress=()=>{
        function getPromise(){
            return new Promise((success, error) => {

                let 주소1: string = '';
                let 주소2: string = '';
                let isAddrHide: boolean = false;
                let isAddrApiBtn: boolean = false;
                
                if ( sessionStorage.getItem('kurly_search_address') !== null ) {
                    try {
                        주소1 = JSON.parse(`${sessionStorage.getItem('kurly_search_address')}`).주소1
                        주소2 = JSON.parse(`${sessionStorage.getItem('kurly_search_address')}`).주소2
                        isAddrHide = true;
                        isAddrApiBtn = true;

                        // 주소 객체 생성
                        const Obj = {
                            주소1: 주소1,
                            주소2: 주소2,
                            isAddrHide: isAddrHide,
                            isAddrApiBtn: isAddrApiBtn
                        }
                        success(Obj);
                    }
                    catch {
                        error('검색 주소가 없습니다.')
                    }
                }
                else {
                    주소1 = '';
                    주소2 = '';
                    isAddrHide = false;
                    isAddrApiBtn = false;

                    error('주소가져오기 오류(주소값 없음)');
                }
            });
        }
        // 세션에서 주소를 가져오고 성공하면 성공 객체 데이터를 가져와서 state에 저장
        getPromise()
        .then((res: any)=>{
            setState({
                ...state,
                주소1: res.주소1,
                주소2: res.주소2,
                isAddrHide: res.isAddrHide,
                isAddrApiBtn: res.isAddrApiBtn
            });
        })
        .catch((err: any)=>{
            return console.log(err);
        });
    }

    React.useEffect(()=>{
        getSessionAddress();
    },[state.주소1, state.주소2])

    // 성별 라디오버튼 온체인지 이벤트 구현
    const onChangeGender=(e:ChangeEvent<HTMLInputElement>)=>{

        const {checked} = e.target;
        const {value} = e.target;
        let 성별: string = '';

        if(checked === true){
            성별 = value;
        }
        else {
            성별 = value;
        }

        setState({
            ...state,
            성별: 성별
        })
    }

    React.useEffect(()=>{
        const regExp1: RegExp = /^(?:0?[1-9]|1[0-2])$/g;
        const regExp2: RegExp = /^(?:0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/g;
        const newYear: any = new Date().getFullYear();

        let isBirth: boolean = false;
        let birthErrMsg: string = '';

        // 1. 생년, 생월, 생일 모두 빈칸이면 === 공백
        // 2. 미래년도 입력 불가
        // 3. 만 14세 미만은 가입 불가

        if (state.생년 === '' && state.생월 === '' && state.생일 === '') {
            isBirth = false;
            birthErrMsg = '';
        }
        else {
            if (Number(state.생년) > newYear) {
                isBirth = true;
                birthErrMsg = '생년월일이 미래로 입력 되었습니다.';
                }
                // 100세 초과 입력 불가
                else if (Number(state.생년) < newYear - 100) {
                isBirth = true;
                birthErrMsg = '태어난 년도 4자리를 정확하게 입력해주세요.';
                }
                // 14세 미만 입력 불가
                else if (Number(state.생년) >= newYear - 14) {
                isBirth = true;
                birthErrMsg = '만 14세 미만은 가입이 불가합니다.';
                }
                else {
                    if(regExp1.test(state.생월) === false) {
                        isBirth = true;
                        birthErrMsg = '태어난 월을 정확하게 입력해주세요.';
                    }
                    // 생월이 이상 없을 경우 생일 체크
                    else {
                        if(regExp2.test(state.생일) === false) {
                            isBirth = true;
                            birthErrMsg = '태어난 일을 정확하게 입력해주세요.';
                        }
                        else {
                            isBirth = false;
                            birthErrMsg = '';
                        }
                    }
                }
        }

        setState({
            ...state,
            isBirth: isBirth,
            birthErrMsg: birthErrMsg
        })
    },[state.생년, state.생월, state.생일]);


    // 생년 입력상자 온체인지 이벤트 구현
    const onChangeYear=(e:ChangeEvent<HTMLInputElement>)=>{

        const regExp1: RegExp = /[^\d]/g;

        const {value} = e.target
        let 생년: string = '';

        생년 = value.replace(regExp1, '');
        
        setState({
            ...state,
            생년: 생년,
            
        })
    }
    // 생월 입력상자 온체인지 이벤트 구현
    const onChangeMonth=(e:ChangeEvent<HTMLInputElement>)=>{

        const regExp1: RegExp = /[^\d]/g;

        const {value} = e.target
        let 생월: string = '';

        생월 = value.replace(regExp1, '');

        setState({
            ...state,
            생월: 생월
        })
    }
    // 생일 입력상자 온체인지 이벤트 구현
    const onChangeDate=(e:ChangeEvent<HTMLInputElement>)=>{

        const regExp1: RegExp = /[^\d]/g;

        const {value} = e.target
        let 생일: string = '';

        생일 = value.replace(regExp1, '');

        setState({
            ...state,
            생일: 생일
        })
    }

    // 추가입력사항 라디오버튼 온체인지 이벤트 구현
    const onChangeAddInput=(e:ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        let isAddInput: boolean = false;
        let isAddInputIdOk: boolean = false;
        let placeholderTxt: string = '';
        let addInputInfoMsg: string = '';

        isAddInput = true;
        placeholderTxt = value;

        if( value === '추천인 아이디를 입력해 주세요.' ){
            addInputInfoMsg = '가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.'
            isAddInputIdOk = true;
        }
        else{
            addInputInfoMsg = '추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.\n가입 이후는 수정이 불가능 합니다.\n대소문자 및 띄어쓰기에 유의해주세요.';
            isAddInputIdOk = false;
        }

        setState({
            ...state,
            isAddInput: isAddInput,
            isAddInputIdOk: isAddInputIdOk,
            placeholderTxt: placeholderTxt,
            addInputInfoMsg: addInputInfoMsg,
            추가입력사항: value
        })
    }

    // 추가입력사항 입력상자 이벤트 구현
    const onChangeAddInputBox=(e:ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target

        setState({
            ...state,
            추가입력사항입력상자: value
        })
    }

    // 추가입력사항 아이디확인 버튼 클릭 이벤트 구현
    const onClickAddInputIdOk=(e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();

        const {추가입력사항입력상자} = state;
        let 아이디확인 = false;

        if (추가입력사항입력상자 === '') {
            isConfirmModalFn('아이디를 입력해 주세요.');
        }
        else {
            axios({
                url: 'https://kiik52.com/kurly_study/member_select.php',
                method: 'GET'
            })
            .then((res)=>{
                let result: Array<boolean> = res.data.map((item: any)=>item.아이디 === state.추가입력사항입력상자);
    
                if (result.includes(true)) {
                    isConfirmModalFn('존재하는 아이디 입니다.\n친구초대 이벤트에 참여 가능해요.');
                    아이디확인 = false;
                }
                else {
                    isConfirmModalFn('존재하지 않은 아이디 입니다.');
                    아이디확인 = true;
                }
                
            })
            .catch((err)=>{
                console.log('AXIOS 실패' + err);
            });
        }

        setState({
            ...state,
            아이디확인: 아이디확인
        })
    }

    // 이용약관동의 전체동의체크 온체인지 이벤트 구현
    const onChangeServiceAllChk=(e:ChangeEvent<HTMLInputElement>)=>{
        const {checked} = e.target;
        let 이용약관동의: Array<string> = [];
        
        if (checked === true) {    // 전체동의가 체크되면
            이용약관동의 = state.이용약관내용;
        }
        else {                     // 전체동의가 체크해제되면
            이용약관동의=[];
        }

        setState({
            ...state,
            이용약관동의: 이용약관동의,
        })

    }

    // 이용약관동의 개별체크 온체인지 이벤트 구현
    const onChangeServiceChk=(e:ChangeEvent<HTMLInputElement>)=>{
        const {value, checked} = e.target;
        let imsi: Array<string> = [];
        
        if (checked === true) {     // 체크되면 배열안에 값 저장

            // 무료배송 체크 시 (SNS, 이메일) 상태변수 저장
            if (value === '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)') {
                // SNS와 이메일 모두 이용약관동의에 없다면 저장
                if (state.이용약관동의.includes('SNS') === false && state.이용약관동의.includes('이메일') === false) {
                    setState({...state, 이용약관동의: [...state.이용약관동의, value, 'SNS', '이메일']});
                }
                else if (state.이용약관동의.includes('SNS') === true && state.이용약관동의.includes('이메일') === false) {
                    setState({...state, 이용약관동의: [...state.이용약관동의, value, '이메일']});
                }
                else if (state.이용약관동의.includes('SNS') === false && state.이용약관동의.includes('이메일') === true) {
                    setState({...state, 이용약관동의: [...state.이용약관동의, value, 'SNS']});
                }
                else if (state.이용약관동의.includes('SNS') === true && state.이용약관동의.includes('이메일') === true) {
                    setState({...state, 이용약관동의: [...state.이용약관동의, value]});
                }
            }
            // SNS, 이메일이 둘다 체크 되면 무료배송 체크 
            // SNS === false, 이메일 === true 인 경우
            // 이메일 체크되있고, SNS은 체크가 안되어 있는 상태
            else if (value === 'SNS' && state.이용약관동의.includes('이메일') === true) {   
                setState({...state,이용약관동의: [...state.이용약관동의, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)', value]})
            }
            // SNS === true, 이메일 === false 인 경우
            // SNS 체크되있고, 이메일은 체크가 안되어 있는 상태
            else if (value === '이메일' && state.이용약관동의.includes('SNS') === true) {
                setState({...state,이용약관동의: [...state.이용약관동의, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)', value]})
            }
            // 그외 체크박스
            else {
                setState({...state, 이용약관동의: [...state.이용약관동의, value]});
            }
        }
        else {  // 체크해제되면 배열에서 삭제

            // 전체 체크 해제
            if (value === '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)') {
                // 무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택) 제거
                // SNS 제거
                // 이메일 제거
                // 재배열 저장
                imsi = state.이용약관동의.filter((item)=>item !== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
                imsi = imsi.filter((item)=>item !== 'SNS')
                imsi = imsi.filter((item)=>item !== '이메일')
                setState({...state,이용약관동의: imsi});
            }
            // SNS, 이메일 둘중 하나만 체크 해제되면 무료배송은 무조건 배열안에서 삭제
            // SNS, 이메일 둘다 체크되어 있을 때 SNS만 체크 해제했을 경우
            else if (value === 'SNS' && state.이용약관동의.includes('이메일') === true) {
                imsi = state.이용약관동의.filter((item)=>item !== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
                imsi = imsi.filter((item)=>item !== 'SNS');
                setState({...state,이용약관동의: imsi});
            }
            // 이메일, SNS 둘다 체크되어 있을 때 이메일만 체크 해제했을 경우
            else if (value === '이메일' && state.이용약관동의.includes('SNS') === true) {
                imsi = state.이용약관동의.filter((item)=>item !== '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
                imsi = imsi.filter((item)=>item !== '이메일');
                setState({...state,이용약관동의: imsi});
            }
            else {
                imsi = state.이용약관동의.filter((item)=>item !== value);
                setState({...state,이용약관동의: imsi});
            }
        }
    }

    // 이용약관동의 약관보기 버튼 클릭 이벤트 구현
    const onClickTermsView=(e: MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();

        isTermsViewFn();
    }

    // 가입하기 버튼 클릭 이벤트 => 폼에서 onSubmit 이벤트 사용
    // 폼데이터 비동기 전송
    // 폼데이터 요소들 값중 필수입력사항 / 선택입력사항 구분하여 유효성검사 후 전송
    const onSubmitEvent=(e:React.FormEvent)=>{
        e.preventDefault();

        let cnt: number = 0;

        state.이용약관동의.map((item: any)=>{
            if (item.indexOf("필수") !== -1) {
                cnt++;
            }
        });

        if (state.아이디 === '') {
            isConfirmModalFn('아이디를 입력 해주세요.')
        }
        else if (state.아이디중복확인 === false) {
            isConfirmModalFn('아이디 중복 체크를 해주세요.')
        }
        else if (state.비밀번호 === '') {
            isConfirmModalFn('비밀번호를 입력 해주세요.')
        }
        else if (state.비밀번호확인 === '') {
            isConfirmModalFn('한번더 비밀번호를 입력 해주세요.')
        }
        else if (state.이름 === '') {
            isConfirmModalFn('이름을 입력 해주세요.')
        }
        else if (state.이메일 === '') {
            isConfirmModalFn('이메일을 입력 해주세요.')
        }
        else if (state.이메일중복확인 === false) {
            isConfirmModalFn('이메일 중복 체크를 해주세요.')
        }
        else if (state.휴대폰 === '') {
            isConfirmModalFn('휴대폰 번호를 입력 해주세요.')
        }
        else if (state.휴대폰인증확인 === false) {
            isConfirmModalFn('휴대폰 인증을 진행 해주세요')
        }
        else if (state.주소1 === '') {
            isConfirmModalFn('주소를 입력 해주세요.')
        }
        else if (state.주소2 === '') {
            isConfirmModalFn('나머지 주소를 입력 해주세요.')
        }
        else if (cnt !== 3) {
            isConfirmModalFn('이용약관동의 필수 항목을 체크해 주세요.')
        }
        else {
            // isConfirmModalFn('구현중')
            const regExp: RegExp = /^(\d{3})(\d{3,4})(\d{4})$/g;

            // 폼데이터 객체 생성 후 전송
            const newFormData: any = new FormData();
            newFormData.append('id',        state.아이디)
            newFormData.append('pw',        state.비밀번호)
            newFormData.append('irum',      state.이름)
            newFormData.append('email',     state.이메일)
            newFormData.append('hp',        state.휴대폰.replace(regExp, '$1-$2-$3'))
            newFormData.append('addr',      `${state.주소1} ${state.주소2}`)
            newFormData.append('gender',    state.성별)
            newFormData.append('birth',     `${state.생년}-${state.생월}-${state.생일}`)
            newFormData.append('addInput',  `${state.추가입력사항} ${state.추가입력사항입력상자}`)
            newFormData.append('service',   state.이용약관동의)
            newFormData.append('gaibDate',  `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`)

            axios({
                url: 'https://kiik52.com/kurly_study/member_insert.php',
                method:'POST',
                data: newFormData
            })
            .then((res)=>{
                if(res.data.indexOf('성공') !== -1) {
                    navigate("/");
                }
            })
            .catch((err)=>{
                console.log('AXIOS 실패', err);
            })
        }
    }

  return (
    <main id='main'>
        <section id="signUp">
            <div className="container">
                <div className="title">
                    <div className="main-title">
                        <h2>회원가입</h2>
                    </div>                    
                    <div className="sub-title">
                        <span><i>*</i>필수입력사항</span>
                    </div>
                </div>
                <div className="content">
                    <form name='form_sign_up' onSubmit={onSubmitEvent} autoComplete='off' id='formSignUp' method='post' action="./member_sign_up.php">
                        <ul>
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputId"><strong>아이디</strong><i>*</i></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <input type="text" maxLength={16} name='input_id' id='inputId' placeholder='아이디를 입력해주세요'
                                         onChange={onChangeId} 
                                         value={state.아이디}
                                         />
                                        <button type="button" className='id-ok-btn' onClick={onClickidOkBtn}>중복확인</button>
                                        <p className={`error-message${state.isId ? ' on' : ''}`}>{state.idErrMsg}</p>
                                    </div>
                                </div>
                            </li>                        
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputPw"><strong>비밀번호</strong><i>*</i></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <input type="password" maxLength={50} name='input_pw1' id='inputPw1' autoComplete="off" placeholder='비밀번호를 입력해주세요'
                                        onChange={onChangePw}
                                        />
                                        <p className={`error-message${state.isPw ? ' on' : ''}`}>{state.pwErrMsg}</p>
                                    </div>
                                </div>
                            </li>                        
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputPw"><strong>비밀번호확인</strong><i>*</i></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <input type="password" name='input_pw2' id='inputPw2' autoComplete="off" placeholder='비밀번호를 한번더 입력해주세요'
                                        onChange={onChangePwOk}/>
                                        <p className={`error-message${state.isPwOk ? ' on' : ''}`}>{state.pwOkErrMsg}</p>
                                    </div>
                                </div>
                            </li>                        
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputName"><strong>이름</strong><i>*</i></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <input type="text" maxLength={20} name='input_name' id='inputName' placeholder='이름을 입력해주세요'
                                        onChange={onChangeName}
                                        value={state.이름}/>
                                        <p className={`error-message${state.isName ? ' on' : ''}`}>{state.nameErrMsg}</p>
                                    </div>
                                </div>
                            </li>                        
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputEmail"><strong>이메일</strong><i>*</i></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <input type="text" name='input_email' id='inputEmail' placeholder='예: marketkurly@kurly.com'
                                        onChange={onChangeEmail}/>
                                        <button type="button" className='email-ok-btn' onClick={onClickEmailOk}>중복확인</button>
                                        <p className={`error-message${state.isEmail ? ' on' : ''}`}>{state.emailErrMsg}</p>
                                    </div>
                                </div>
                            </li>                        
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputHp"><strong>휴대폰</strong><i>*</i></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <input type="text" maxLength={11} name='input_hp' id='inputHp' placeholder='숫자만 입력해주세요'
                                        disabled={state.isInputHp}
                                        onChange={onChangeHp}
                                        value={state.휴대폰}
                                        />
                                        <button disabled={!state.isHp} type="button" 
                                        className={`hp-num-btn${state.isHp ? ' on' : ''}`}
                                        onClick={onClickHpNum}
                                        >
                                        인증번호 받기</button>
                                        <button type="button"
                                        className={`hp-num2-btn${state.isHpNum2Btn ? ' on' : ''}`}
                                        onClick={onClickHpNumBtn}
                                        >
                                        다른번호 인증</button>
                                        <p className={`error-message hp-error-message${state.isHpNum2Btn ? '' : ' on'}`}>{state.hpErrMsg}</p>
                                    </div>
                                </div>
                            </li>                        
                            <li className={`hp-ok-box${state.isHpOkBox ? ' on' : ''}`}>
                            {/* <li className={'hp-ok-box on'}>  타이머 확인용*/}
                                <div className="left">
                                    <div className="left-wrap">
                                       
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <input type="text" maxLength={6} name='input_hp_ok' id='inputHpOk' placeholder=''
                                        onChange={onChangeInputHpOk}
                                        value={state.인증번호입력상자}
                                        />
                                        <span className='signup-time-count'>
                                            {
                                                `${state.minute < 10 ? `0${state.minute}` : state.minute}:${state.second < 10 ? `0${state.second}` : state.second}`
                                            }
                                        </span>
                                        
                                        <button type="button" className={`hp-num-ok-btn${state.isHpNumOkBtn ? ' on' : ''}`} onClick={onClickHpOk}>인증번호 확인</button>
                                        <p className='info-message hp-info-message'>
                                            인증번호가 오지 않는다면, 통신사 스팸 차단 서비스 혹은 휴대폰 번호 차단 여부를 확인해주세요. (마켓컬리 1644-1107)
                                        </p>
                                    </div>
                                </div>
                            </li>                        
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputAddr"><strong>주소</strong><i>*</i></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <input type="text" 
                                        className={`addr-hide${state.isAddrHide ? ' on' : ''}`} 
                                        name='input_addr1' id='inputAddr1' placeholder='카카오 주소 검색 API'
                                        onChange={onChangeInputAddr1}
                                        value={state.주소1}
                                        />
                                        <button type="button" className={`addr-hide addr-re-btn${state.isAddrHide ? ' on' : ''}`} 
                                        onClick={onClickAddrReBtn}
                                        >
                                        <img src="./img/sign_up/ico_search.svg" alt=""/>재검색</button>
                                        <button type="button" className={`addr-api-btn${state.isAddrApiBtn ? ' on' : ''}`}
                                        onClick={onClickAddressSearchBtn}
                                        >
                                        <img src="./img/sign_up/ico_search.svg" alt=""/>주소검색</button>                                
                                    </div>                                    
                                </div>
                            </li>                        
                            <li className={`addr-hide${state.isAddrHide ? ' on' : ''}`}>
                                <div className="left">
                                    <div className="left-wrap">
                                        
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <input type="text" name='input_addr2' id='inputAddr2' placeholder='나머지 주소를 입력해주세요'
                                        onChange={onChangeInputAddr2}
                                        value={state.주소2}
                                        />                                        
                                    </div>
                                </div>
                            </li>                        
                            <li className={`addr-hide${state.isAddrHide ? ' on' : ''}`}>
                                <div className="left">
                                    <div className="left-wrap">
                                        
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap">
                                        <em className='addr-map-area'>샛별배송</em>
                                        <p className='addr-info addr-info2'>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
                                    </div>
                                </div>
                            </li>  
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputGender"><strong>성별</strong></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap gender">
                                        <label htmlFor="male"><input type="radio" onChange={onChangeGender} name='gender' id='male' className='gender-btn' value='남자'/>남자</label>                                        
                                        <label htmlFor="female"><input type="radio" onChange={onChangeGender} name='gender' id='female' className='gender-btn' value='여자'/>여자</label>                                        
                                        <label htmlFor="unselect"><input type="radio" onChange={onChangeGender} name='gender' id='unselect' className='gender-btn' value='선택안함' defaultChecked/>선택안함</label>                                        
                                    </div>
                                </div>
                            </li>     
                            
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputBirth"><strong>생년월일</strong></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap birth">
                                        <div className="birth-box">
                                            <ul>
                                                <li><input type="text" onChange={onChangeYear} value={state.생년} maxLength={4} name='year' id='year' placeholder='YYYY'/></li>
                                                <li><i>/</i></li>
                                                <li><input type="text" onChange={onChangeMonth} value={state.생월} maxLength={2} name='month' id='month' placeholder='MM'/></li>
                                                <li><i>/</i></li>
                                                <li><input type="text" onChange={onChangeDate} value={state.생일} maxLength={2} name='date' id='date'  placeholder='DD'/></li>
                                            </ul>
                                        </div>
                                        <p className={`error-message birth-error-message${state.isBirth ? ' on' : ''}`}>{state.birthErrMsg}</p>
                                    </div>
                                </div>
                            </li>     
                            
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputAddInput"><strong>추가입력 사항</strong></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap add-input-box1">
                                        <label htmlFor="addInput1"><input onChange={onChangeAddInput} type="radio" name='addInput' id='addInput1' className='add-input-btn' value='추천인 아이디를 입력해 주세요.'/>친구초대 추천인 아이디</label>
                                        <label htmlFor="addInput2"><input onChange={onChangeAddInput} type="radio" name='addInput' id='addInput2' className='add-input-btn' value='참여 이벤트명'/>참여 이벤트명</label>
                                    </div>
                                </div>
                            </li>     
                            <li className={`add-input-box-list${state.isAddInput ? ' on' : ''}`}>
                                <div className="left">
                                    <div className="left-wrap">
                                       
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className={`right-wrap add-input-box2${state.isAddInput ? ' on' : ''}`}>
                                       <input type="text" onChange={onChangeAddInputBox} name='add-input-text' id='addInputText' placeholder={state.placeholderTxt}/>
                                       <button type="button" onClick={onClickAddInputIdOk} className={`add-input-id-chk-btn${state.isAddInputIdOk ? ' on' : ''}`}>아이디 확인</button>                                           
                                       <p className='add-input-guid-text'>{state.addInputInfoMsg}</p>
                                    </div>
                                </div>
                            </li>     

                            <li className='hor-line'>
                                <hr/>
                            </li>

                            {/* 이용약관동의 */}
                            <li>
                                <div className="left">
                                    <div className="left-wrap">
                                        <label htmlFor="inputService"><strong>이용약관동의</strong><i>*</i></label>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="right-wrap service">
                                        <ul>
                                            <li>
                                                <label htmlFor="allChk"><input type="checkbox" onChange={onChangeServiceAllChk} checked={state.이용약관동의.length === 7} name='all_chk' id='allChk' value=''/>전체 동의합니다.</label>
                                                <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                            </li>
                                            <li>
                                                <label htmlFor="chk1"><input type="checkbox" onChange={onChangeServiceChk} checked={state.이용약관동의.includes('이용약관 동의(필수)')} name='chk1' id='chk1'  className='chk-btn'  value='이용약관 동의(필수)'/>이용약관 동의(필수)</label>
                                                <button type='button' onClick={onClickTermsView} className='terms-view'><span>약관보기</span><img src="./img/sign_up/arrow_right.svg" alt=""/></button>
                                            </li>
                                            <li>
                                                <label htmlFor="chk2"><input type="checkbox" onChange={onChangeServiceChk} checked={state.이용약관동의.includes('개인정보 수집∙이용 동의(필수)')} name='chk2' id='chk2'  className='chk-btn'  value='개인정보 수집∙이용 동의(필수)'/>개인정보 수집∙이용 동의(필수)</label>
                                                <button type='button' onClick={onClickTermsView} className='terms-view'><span>약관보기</span><img src="./img/sign_up/arrow_right.svg" alt=""/></button>
                                            </li>
                                            <li>
                                                <label htmlFor="chk3"><input type="checkbox" onChange={onChangeServiceChk} checked={state.이용약관동의.includes('개인정보 수집∙이용 동의(선택)')} name='chk3' id='chk3'  className='chk-btn'  value='개인정보 수집∙이용 동의(선택)'/>개인정보 수집∙이용 동의(선택)</label>
                                                <button type='button' onClick={onClickTermsView} className='terms-view'><span>약관보기</span><img src="./img/sign_up/arrow_right.svg" alt=""/></button>
                                            </li>
                                            <li>
                                                <label htmlFor="chk4"><input type="checkbox" onChange={onChangeServiceChk} checked={state.이용약관동의.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')} name='chk4' id='chk4'  className='chk-btn'  value='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'/>무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)</label>
                                                
                                            </li>
                                            <li>
                                                <label htmlFor="chk5"><input type="checkbox" onChange={onChangeServiceChk} checked={state.이용약관동의.includes('SNS')} name='chk5' id='chk5'  className='chk-btn chk4-btn'  value='SNS'/>SNS(선택)</label>
                                                <label htmlFor="chk6"><input type="checkbox" onChange={onChangeServiceChk} checked={state.이용약관동의.includes('이메일')} name='chk6' id='chk6'  className='chk-btn chk4-btn'  value='이메일'/>이메일(선택)</label>
                                                
                                            </li>
                                            <li>
                                                <p className="free-shipping-info">동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내 </p> 
                                            </li>
                                            <li>
                                                <label htmlFor="chk7"><input type="checkbox" onChange={onChangeServiceChk} checked={state.이용약관동의.includes('본인은 만 14세 이상입니다.(필수)')} name='chk7' id='chk7'  className='chk-btn'  value='본인은 만 14세 이상입니다.(필수)'/>본인은 만 14세 이상입니다.(필수)</label>
                                                
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>   
                        </ul>
                        <div className="button-box">
                            <button type='submit' className='submit-btn'>가입하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
  );
};

// 회원가입의 모든 변수관리
SignUpComponent.defaultProps = {
    회원 : {
        아이디:'',
        isId: false,
        아이디중복확인 : false,

        비밀번호:'',
        pwErrMsg: '',
        isPw: false,
        비밀번호확인:'',
        pwOkErrMsg: '',
        isPwOk: false,

        이름:'',
        nameErrMsg: '',
        isName: false,

        이메일: '',
        emailErrMsg: '',
        isEmail: false,
        이메일중복확인: false,
        
        휴대폰:'',
        isHp: false,
        휴대폰인증확인 : false,
        인증번호: 0,
        인증번호입력상자: '',
        isHpOkBox: false,
        isInputHp: false,
        isHpNum2Btn: false,
        setId: 0,
        minute: 2,
        second: 59,

        주소1:'',
        주소2:'',
        isAddrHide: false,
        isAddrApiBtn: false,

        성별:'선택안함',

        생년:'',
        생월:'',
        생일:'',
        isBirth: false,

        추가입력사항:'',
        추가입력사항입력상자:'',
        isAddInput: false,
        isAddInputIdOk: false,
        placeholderTxt: '',
        addInputInfoMsg: '',
        아이디확인: false,

        이용약관내용: [
            `이용약관 동의(필수)`,
            `개인정보 수집∙이용 동의(필수)`,
            `개인정보 수집∙이용 동의(선택)`,
            `무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)`,
            `SNS`,
            `이메일`,
            `본인은 만 14세 이상입니다.(필수)`,
        ],
        이용약관동의:[]
    }
}