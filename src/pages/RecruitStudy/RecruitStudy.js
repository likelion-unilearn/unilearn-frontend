import './RecruitStudy.css';
import Header from '../../HeaderNavComponent/Header';
import NavD from '../../HeaderNavComponent/NavD';
import React, { useState } from 'react';

function RecruitStudy(){
    const [isDepositChecked, setIsDepositChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsDepositChecked(event.target.checked);
    };

    const [isEstablished, setIsEstablished] = useState(null);

    const handleEstablishedClick = () => {
        setIsEstablished(true);
    };

    const handleNotEstablishedClick = () => {
        setIsEstablished(false);
    };

    const [isFaceToFace, setIsFaceToFace] = useState(null);

    const handleFaceToFaceClick = () => {
        setIsFaceToFace(true);
    };

    const handleNonFaceToFaceClick = () => {
        setIsFaceToFace(false);
    };

    const [selectedDays, setSelectedDays] = useState({});
    
    const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

    const toggleDay = (day) => {
        setSelectedDays({
            ...selectedDays,
            [day]: !selectedDays[day]
        });
    };
    
    return(
    <div >
        <Header/>
        <div style={{overflowY:'scroll',height:'700px'}}>
        <h4 className="pageName">스터디 모집</h4>
            <div className="under"> </div>

            <div>
                <b style={{marginLeft:'20px'}}>스터디 제목</b><br/>
                <input className='input_l'
                    placeholder='스터디 제목을 입력하세요'
                ></input>
            </div><br/>

            <div>
                <b style={{marginLeft:'20px', marginRight:'150px'}}>개설 여부</b>
                <button
                    onClick={handleEstablishedClick}
                    style={{borderRadius:'5px', height:'35px',borderStyle:'none', marginRight:'20px', background: isEstablished ? '#547980' : '#A9BBBF' }}
                >
                    개설
                </button>
                <button
                    onClick={handleNotEstablishedClick}
                    style={{borderRadius:'5px',height:'35px',borderStyle:'none', background: isEstablished === false ? '#547980' : '#A9BBBF' }}
                >
                    비개설
                </button>
            </div><br/>

            {isEstablished && (
                <>
                    <div>
                        <b style={{marginLeft:'20px'}}>개설학과</b><br/>
                        <input className='input_l' placeholder='개설학과를 입력하세요'></input>
                    </div><br/>

                    <div>
                        <b style={{marginLeft:'20px'}}>수업명</b><br/>
                        <input className='input_l' placeholder='수업명을 입력하세요'></input>
                    </div><br/>

            <div style={{display: 'flex', justifyContent: 'spaceBetween'}}>
                <div style={{ marginLeft:"20px" }}>
                <b>교수님</b>
                <input 
                placeholder='방정호'
                className='input_s'></input>
                </div>

                <div style={{ marginRight: '20px' }}>
                <b>연도</b>
                <input
                placeholder='2022'
                className='input_s'></input>
                </div>

                <div>
                <b>학기</b>
                <input
                placeholder='2'
                className='input_s'></input>
                </div>
            </div><br/>
            </>
            )}

            <div>
                <b style={{marginLeft:'20px'}}>스터디 내용</b><br/>
                <textarea className='input_l'
                    placeholder='스터디 내용을 입력하세요'
                ></textarea>
            </div><br/>

            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}>
                    <b style={{marginLeft:'20px', marginRight:'90px'}}>위치</b><br/>
                    <button
                        onClick={handleFaceToFaceClick}
                        style={{ borderRadius: '5px', height: '35px', borderStyle: 'none', marginRight: '20px', background: isFaceToFace ? '#547980' : '#A9BBBF' }}
                    >
                        대면 스터디
                    </button>
                    <button
                        onClick={handleNonFaceToFaceClick}
                        style={{ borderRadius: '5px', height: '35px', borderStyle: 'none', background: isFaceToFace === false ? '#547980' : '#A9BBBF' }}
                    >
                        비대면 스터디
                    </button>
                </div><br/>

                {isFaceToFace && (<>
                    <div>
                        <b style={{marginLeft:'20px'}}>대면 스터디 위치</b><br/>
                        <input className='input_l' placeholder='대면 스터디의 위치를 입력하세요'></input>
                    </div><br/>
               </>)}

                

            <div>
                <b style={{marginLeft:'20px'}}>모집인원</b>
                <input style={{marginLeft:"230px", borderStyle:'none', width:'15px'}}></input>명
            </div><br/>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <b style={{ marginLeft: '20px' }}>예치금</b>
                <input
                    type="checkbox"
                    checked={isDepositChecked}
                    onChange={handleCheckboxChange}
                    style={{ marginRight: '30px' }}
                />
                {isDepositChecked && (
                    <input style={{ marginLeft: '50px' }}
                        type="text"
                        placeholder='예치금 금액을 입력하세요'
                        className='input_m'
                    />
                )}
            </div><br/>

            <div>
                <b style={{marginLeft:'20px'}}>오픈채팅 링크</b><br/>
                <input className='input_l'
                    placeholder='https://open.kakao.com/unilearn'
                ></input>
            </div><br/>

            <div>
                    <b style={{marginLeft:'20px'}}>스터디 기간</b><br/>
                    <label htmlFor="startDate" style={{marginLeft:'20px'}}>시작일: </label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        className='input_s'
                    />
                    <label htmlFor="endDate" style={{marginLeft:'20px'}}>종료일: </label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        className='input_s'
                    />
                </div><br/>

                <div>
                <b style={{marginLeft:'20px'}}>시간/요일 선택</b><br/>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    {weekdays.map((day) => (
                        <button
                            key={day}
                            onClick={() => toggleDay(day)}
                            style={{ 
                                background: selectedDays[day] ? '#547980' : '#A9BBBF',
                                marginRight: '0px',
                                borderRadius: '1px',
                                height: '35px',
                                width:'45px',
                                borderStyle: 'none'
                            }}
                        >
                            {day}
                        </button>
                    ))}
                </div>
                {weekdays.filter(day => selectedDays[day]).map(day => (
                    <div key={day} style={{marginBottom: '10px', textAlign:'center'}}>
                        <label style={{marginLeft:'10px'}}>{day}</label>
                        <input
                            type="text"
                            placeholder={`0 0 : 0 0`}
                            style={{marginLeft: '25px'}}
                            className='input_time'
                        />
                    </div>
                ))}
            </div>

            <button className='recruitBtn'>스터디 모집하기</button>
            <br/>
          </div>
          <NavD/>
          
    </div>
    );
}

export default RecruitStudy;