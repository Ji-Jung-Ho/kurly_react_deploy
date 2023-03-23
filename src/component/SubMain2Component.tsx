import React from 'react';

export default function SubMain2Component ({베스트}: any) {


    const createScriptFn=(imgSrc: any)=>{
        const scriptTag = document.createElement('script');
        scriptTag.src = imgSrc;
        document.body.appendChild(scriptTag);
    }

    React.useEffect(()=>{
        createScriptFn("./js/category.js");

    },[]);

    function commaRegExp(z: any) {
        let str = z.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while (regExp.test(str)) {
            str = str.replace(regExp, "$1,$2");
        }
        return str;
    }

  return (
    <main id="main" className="main2">
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>베스트</h2>
                    </div>
                    <div className="content">
                        <div className="left">
                            <div className="left-filter">
                                <span>필터</span>
                                <button type="button"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04" stroke="#ddd" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"></path><path d="M14.4933 1L14.4933 4.52H10.9733" stroke="#ddd" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"></path></svg>초기화</button>
                            </div>
                            <div className="col-gap">
                                <div className="wrap">
                                    <ul className="category">
                                        <li>
                                            <a href="#!" className="category-btn">카테고리<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            <div className="category-sub category-sub1">
                                                <ul>
                                                    <li><label><input type="checkbox" id='category1-01' name='category1-01' className='category1-sub-btn' value="샐러드·간편식"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>샐러드·간편식       <span>65</span></label></li>
                                                    <li><label><input type="checkbox" id='category1-02' name='category1-02' className='category1-sub-btn' value="국·반찬·메인요리"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>국·반찬·메인요리    <span>47</span></label></li>
                                                    <li><label><input type="checkbox" id='category1-03' name='category1-03' className='category1-sub-btn' value="정육·계란"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>정육·계란           <span>35</span></label></li>
                                                    <li><label><input type="checkbox" id='category1-04' name='category1-04' className='category1-sub-btn' value="과일·견과·쌀"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>과일·견과·쌀        <span>29</span></label></li>
                                                    <li><label><input type="checkbox" id='category1-05' name='category1-05' className='category1-sub-btn' value="간식·과자·떡"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>간식·과자·떡        <span>20</span></label></li>
                                                    <li><label><input type="checkbox" id='category1-06' name='category1-06' className='category1-sub-btn' value="생수·음료·우유·커피"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>생선·음료·우유·커피 <span>16</span></label></li>
                                                    <li><label><input type="checkbox" id='category1-07' name='category1-07' className='category1-sub-btn' value="수산·해산·건어물"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>수산·해산·건어물    <span>16</span></label></li>
                                                    <li><label><input type="checkbox" id='category1-08' name='category1-08' className='category1-sub-btn' value="베이커리·치즈·델리"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>베이커리·치즈·델리  <span>16</span></label></li>
                                                    <li><label><input type="checkbox" id='category1-09' name='category1-09' className='category1-sub-btn' value="생활용품·리빙·캠핑"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>생활용품·리빙·캠핑  <span>12</span></label></li>
                                                    <li><label><input type="checkbox" id='category1-10' name='category1-10' className='category1-sub-btn' value="건강식품"/>  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>건강식품            <span>10</span></label></li>
                                                    <li><button type="button" className="category1-more-view-btn">카테고리 더보기 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></button></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#!" className="category-btn">브랜드<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            <div className="category-sub category-sub2">
                                                <ul>
                                                    <div className="option">
                                                        <button type="button">가나다 순</button>
                                                        <button type="button">상품많은 순</button>
                                                    </div>
                                                    <li><label><input type="checkbox" id="category2-01" name="category2-01" className="category2-sub-btn" value="감자밭"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>감자밭       <span>1</span></label></li>
                                                    <li><label><input type="checkbox" id="category2-02" name="category2-02" className="category2-sub-btn" value="강남면옥"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>강남면옥    <span>1</span></label></li>
                                                    <li><label><input type="checkbox" id="category2-03" name="category2-03" className="category2-sub-btn" value="거대곰탕"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>거대곰탕           <span>1</span></label></li>
                                                    <li><label><input type="checkbox" id="category2-04" name="category2-04" className="category2-sub-btn" value="경복궁"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>경복궁        <span>1</span></label></li>
                                                    <li><label><input type="checkbox" id="category2-05" name="category2-05" className="category2-sub-btn" value="고디바"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>고디바        <span>1</span></label></li>
                                                    <li><label><input type="checkbox" id="category2-06" name="category2-06" className="category2-sub-btn" value="고래사"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>고래사        <span>1</span></label></li>
                                                    <li><label><input type="checkbox" id="category2-07" name="category2-07" className="category2-sub-btn" value="고온어다이어트"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>고온어다이어트    <span>1</span></label></li>
                                                    <li><label><input type="checkbox" id="category2-08" name="category2-08" className="category2-sub-btn" value="교토마블"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>교토마블  <span>1</span></label></li>
                                                    <li><label><input type="checkbox" id="category2-09" name="category2-09" className="category2-sub-btn" value="국내산100"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>국내산100%  <span>1</span></label></li>
                                                    <li><label><input type="checkbox" id="category2-10" name="category2-10" className="category2-sub-btn" value="굽네"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>굽네            <span>1</span></label></li>
                                                    <li><button type="button" className="category2-more-view-btn">브랜드 더보기 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></button></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#!" className="category-btn">가격<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            <div className="category-sub category-sub2">
                                                <ul>
                                                    <li><label><input type="checkbox" id="category3-01" name="category3-01" className="category3-sub-btn" value="6,900원 미만"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>6,900원 미만         <span>66</span></label></li>
                                                    <li><label><input type="checkbox" id="category3-02" name="category3-02" className="category3-sub-btn" value="6,900원 ~ 9,900원"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>6,900원 ~ 9,900원    <span>72</span></label></li>
                                                    <li><label><input type="checkbox" id="category3-03" name="category3-03" className="category3-sub-btn" value="9,900원 ~ 14,900원"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>9,900원 ~ 14,900원   <span>67</span></label></li>
                                                    <li><label><input type="checkbox" id="category3-04" name="category3-04" className="category3-sub-btn" value="14,900원 이상"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>14,900원 이상        <span>72</span></label></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#!" className="category-btn">혜택<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            <div className="category-sub category-sub2">
                                                <ul>
                                                    <li><label><input type="checkbox" id="category4-01" name="category4-01" className="category4-sub-btn" value="할인상품"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>할인상품      <span>107</span></label></li>
                                                    <li><label><input type="checkbox" id="category4-02" name="category4-02" className="category4-sub-btn" value="한정수량"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>한정수량      <span>8</span></label></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#!" className="category-btn">유형<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            <div className="category-sub category-sub2">
                                                <ul>
                                                    <li><label><input type="checkbox" id="category5-01" name="category5-01" className="category5-sub-btn" value="Kurly Only"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>Kurly Only            <span>115</span></label></li>
                                                    <li><label><input type="checkbox" id="category5-02" name="category5-02" className="category5-sub-btn" value="선물하기"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>선물하기              <span>6</span></label></li>
                                                    <li><label><input type="checkbox" id="category5-03" name="category5-03" className="category5-sub-btn" value="희소가치 프로젝트"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>희소가치 프로젝트     <span>6</span></label></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#!" className="category-btn">가격<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            <div className="category-sub category-sub2">
                                                <ul>
                                                    <li><label><input type="checkbox" id="category6-01" name="category6-01" className="category6-sub-btn" value="반려동물 상품"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>반려동물 상품      <span>2</span></label></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-filter">
                                <span>866건</span>
                                <ul>
                                    <li><a href="#!" className='csd'>추천순</a></li>
                                    <li><a href="#!">신상품순</a></li>
                                    <li><a href="#!">판매량순</a></li>
                                    <li><a href="#!">혜택순</a></li>
                                    <li><a href="#!">낮은가격순</a></li>
                                    <li><a href="#!">높은가격순</a></li>
                                </ul>
                            </div>
                            <ul id="bestProduct">
                                {
                                    베스트.map((item: any)=>{
                                        return (
                                        <li key={item.상품코드}>
                                            <div className="col-gap">
                                                <div className="wrap">
                                                    <div className="img-box">
                                                        <img src={`./img/main2/${item.상품이미지}`} alt=""/>
                                                        <a href="#!"><img src={`./img/main2/${item.카트이미지}`} alt=""/></a>
                                                    </div>
                                                    <div className="caption-box">
                                                        <h6>{item.배송구분}</h6>
                                                        <h5>{item.제조사}{item.상품명}</h5>
                                                        <p className="product-info">{item.상품정보}</p>
                                                        <h4>
                                                            {item.할인율 > 0 ? <strong>{Math.round(item.할인율*100)}%</strong> : ''}
                                                            <em>{commaRegExp(Math.floor(item.정가 *(1-item.할인율)))}원</em>
                                                        </h4>
                                                        {item.할인율 > 0 ? <h3><s>${commaRegExp(item.정가)}원</s></h3> : ''}
                                                        <p className="messenger">
                                                            <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_1513_17755" fill="white"><path fillRule="evenodd" clipRule="evenodd" d="M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z"></path></mask><path fill="#999" d="M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z" mask="url(#path-1-inside-1_1513_17755)"></path><circle fill="#999" cx="4.34998" cy="6.17871" r="0.75"></circle><circle fill="#999" cx="6.75" cy="6.17871" r="0.75"></circle><circle fill="#999" cx="9.15002" cy="6.17871" r="0.75"></circle></svg>
                                                            <span>{item.후기}</span>
                                                        </p>
                                                        {item.판매처 !== "" && <h1>{item.판매처}</h1>}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
};