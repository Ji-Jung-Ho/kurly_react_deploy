import React from 'react';

export default function Section4Component ({타이머}: any) {

    const [state, setState] = React.useState(타이머);
    
    function timerCount(){
        let setId: any = 0;
        let hour: number = 24;
        let minute: number = 0;
        let second: number = 0;
        let msg: string = '';
        let isTimer: boolean = false;
        let isTimeCount: boolean = false;
        
        setId = setInterval(function(){
            second--;
            if(second <= 0){
                second = 59;
                minute--;
                if(minute <= 0){
                    minute = 59;
                    hour--;
                    if(hour < 0){
                        clearInterval(setId);
                        hour = 0;
                        minute = 0;
                        second = 0;
                        msg = '수량이 마감되었습니다.'
                        isTimer = true;
                        isTimeCount = true;
                    }
                }
            }

            setState({
                ...state,
                setId: setId,
                hour: hour,
                minute: minute,
                second: second,
                msg: msg,
                isTimer: isTimer,
                isTimeCount: isTimeCount
            })
        },1000);
    }
    React.useEffect(()=>{
        timerCount();
    },[])

  return (
    <section id="section4">
        <div className="container">
            <div className="wrap">
                <div className="title">
                    <h2>선착순 1천 개 한정</h2>
                    <h3>매일 저녁6시 한정수량 오픈!</h3>
                    <div className='time-box'>
                        <div className={`clock${state.isTimeCount ? ' on' : ''}`}>
                            <div className='h'></div>
                            <div className='m'></div>
                        </div>
                        <span className={`time-text${state.isTimeCount ? ' on' : ''}`}>{state.msg}</span>
                        <span className={`time-count${state.isTimeCount ? ' on' : ''}`}>
                            {`${state.hour < 10 ? `0${state.hour}` : state.hour}:${state.minute < 10 ? `0${state.minute}` : state.minute}:${state.second < 10 ? `0${state.second}`: state.second}`}
                        </span>
                    </div>
                    <p>망설이면 늦어요!</p>
                </div>
                <div className="content">
                    <div className="img-box">
                        <a href="#!">
                            <img className='main-img' src="./img/intro_main/sec4.jpg" alt=""/>
                            <div className='text-box'>
                                <span>
                                    <strong>Coming Soon</strong><br/>
                                    매일 저녁 6시, 한정 수량 입고
                                </span>
                            </div>
                            <button className='bell-btn'><img src="./img/intro_main/ico_bell_on.svg" alt=""/></button>
                        </a>
                    </div>
                    <div className="caption">
                        <h5>부담 없이 즐기는 바삭 촉촉 옛날 통닭</h5>
                        <h2>두 마리 99치킨 (에어프라이어용) 매일 18시 선착순 판매</h2>
                        <h3>9,900원</h3>
                        <span><svg width="100%" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_1513_17755" fill="white"><path fillRule="evenodd" clipRule="evenodd" d="M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z"></path></mask><path fill="#999" d="M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z" mask="url(#path-1-inside-1_1513_17755)"></path><circle fill="#999" cx="4.34998" cy="6.17871" r="0.75"></circle><circle fill="#999" cx="6.75" cy="6.17871" r="0.75"></circle><circle fill="#999" cx="9.15002" cy="6.17871" r="0.75"></circle></svg>후기 999+</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

Section4Component.defaultProps = {
    타이머 : {
        hour: 23,
        minute: 59,
        second: 59,
        msg: '',
        isTimer: false
    }
}