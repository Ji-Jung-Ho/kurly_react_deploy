import React from 'react';

export default function SubMain4Component ({특가혜택}: any) {

  const createScriptFn=(imgSrc: any)=>{
    const scriptTag = document.createElement('script');
    scriptTag.src = imgSrc;
    document.body.appendChild(scriptTag);
  }

  React.useEffect(()=>{
    createScriptFn("./js/category.js");
  })

  return (
    <main id="main" className="main4">
    <section id="banner">
        <div className="container">
            <div className="title hide">
                <h1>banner</h1>
            </div>
            <div className="content">
                <ul className="banner-list">
                    {
                      특가혜택.map((item: any)=>{
                        return(
                          <li key={item.번호}>
                            <a href="#!" title={item.제목}>
                                <img src={`./img/main4/${item.이미지}`} alt={item.소개} />
                            </a>
                          </li>
                        )
                      })
                    }
                </ul>
            </div>
        </div>
    </section>
</main>
  );
};