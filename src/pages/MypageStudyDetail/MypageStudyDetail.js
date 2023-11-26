import './MypageStudyDetail.css'
import Header from '../../HeaderNavComponent/Header';
import Nav from '../../HeaderNavComponent/Nav';
import React, { useState } from 'react';

function MypageStudyDetail(){
    const [isMemberFull, setIsMemberFull] = useState(false);

    const handleButtonClick = () => {
        if (isMemberFull) {
            // 스터디원 관리 로직
        } else {
            // 스터디원 모집 로직
        }
    };
    return(
        <div>
            <Header/>
            <h4 className="pageName">스터디</h4>
            <div className="under"> </div>

            <div className='studyInfo'>
            <div className='title'>취업을 위한 리액트 스터디</div>
            <div className='studyLeader'>스터디장 : 리액트왕이될꼬야</div>
            </div>
            <div className='line'></div>


            <b className='detailContent'>상세내용</b>
            <div className='content'>학교에서 리액트를 배울 수 있는 과정이 없어서
                독학하고 있지만, 혼자서는 버겁다 하시는 분! 같이 공부해요
                6개월을 목표로 하고 있고 컴퓨터 공학 전공,
                취준생 우대합니다.
                탈주하지 않고 꾸준히 공부할 분들만 신청해주세요</div>

            <div className='member'>모집인원: </div>
            <div className='stdPeriod'>기간: </div>

            <button className='memberRecruit' onClick={handleButtonClick}>
                <b>{isMemberFull ? '스터디원 관리하기' : '스터디원 모집하기'}</b>
            </button>

            <Nav/>
        </div>

    );
}
export default MypageStudyDetail;