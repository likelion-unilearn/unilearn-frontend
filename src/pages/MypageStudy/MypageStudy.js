import './MypageStudy.css';
import Header from '../../HeaderNavComponent/Header';
import Nav from '../../HeaderNavComponent/Nav';
import React, { useState } from 'react';

function MypageStudy() {
    const [tab, setTab] = useState('participant'); // 'participant' 또는 'operator'

    return (
        <div>
            <Header/>
            <h4 className="pageName">스터디</h4>
            <div className="under"> </div>
            <div className="tab-container">
                <div className={`tab-slider ${tab === 'participant' ? 'left' : 'right'}`}></div>
                <button
                    className="tab-button"
                    onClick={() => setTab('participant')}
                >
                    참여자 스터디
                </button>
                <button
                    className="tab-button"
                    onClick={() => setTab('operator')}
                >
                    운영자 스터디
                </button>
            </div>

            {tab === 'participant' && (
                <div className='participantContnt'>
                    참여 스터디 내용
                </div>
            )}

            {tab === 'operator' && (
                <div className='operatorContnt'>
                    운영자 스터디 내용
                </div>
            )}

            <Nav/>
        </div>
    );
}
export default MypageStudy;
