import './MypageStudy.css';
import Header from '../../HeaderNavComponent/Header';
import NavD from '../../HeaderNavComponent/NavD';
import React, { useState } from 'react';
import State from '../../img/State.png';
import {useNavigate} from "react-router-dom";

function MypageStudy() {
    const [tab, setTab] = useState('participant'); // 'participant' 또는 'operator'
    let navigate = useNavigate();
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
            <div style={{textAlign:'center', position:'relative', top:'20px'}}>
            <img style={{width:'189px', height:'39px'}} src={State}></img>
            </div>

            {tab === 'participant' && (
                <div className='participantContnt'>
                    <button onClick={()=>{navigate("/RecruitStudymember");}} className='blueCir1'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#82A6CB"/>
                        </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style={{fontSize:'17px'}}>취업을 위한 리액트 스터디</b> </div>
                        <div>스터디장 : 리액트왕이될꼬야 
                            <br/>모집인원 67/100</div>
                        
                    </button>

                    <button className='blueCir1'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#9EB7AB"/>
                        </svg> &nbsp;&nbsp;&nbsp;<b style={{fontSize:'17px'}}>기업 코딩테스트 대비 스터디</b> </div>
                        <div>스터디장 : 카카오 나를 뽑아라
                            <br/>모집인원 67/100</div>
                        
                    </button>

                    <button className='blueCir1'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#FFC8C8"/>
                        </svg> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style={{fontSize:'17px'}}>c++ 기초 단기완성 스터디</b> </div>
                        <div>스터디장 : 컴공입니다
                            <br/>모집인원 67/100</div>
                        
                    </button>

                </div>
            )}

            {tab === 'operator' && (
                <div className='operatorContnt'>
                    <button className='blueCir1'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#82A6CB"/>
                        </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style={{fontSize:'17px'}}>취업을 위한 리액트 스터디</b> </div>
                        <div>스터디장 : 리액트왕이될꼬야 
                            <br/>모집인원 67/100</div>
                        
                    </button>

                    <button className='blueCir1'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#82A6CB"/>
                        </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style={{fontSize:'17px'}}>취업을 위한 리액트 스터디</b> </div>
                        <div>스터디장 : 리액트왕이될꼬야 
                            <br/>모집인원 67/100</div>
                        
                    </button>



                </div>
            )}

            <NavD/>
        </div>
    );
}
export default MypageStudy;
