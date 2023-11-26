import { useState ,useEffect} from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from '../../HeaderNavComponent/Header';
import NavC from '../../HeaderNavComponent/NavC';
import axios from "axios";
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
position:relative;
  left:21px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  gap: 20px;
  border:none;
`;
const DotBox = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border:none;
`;
const CalendarDot = styled.div`
  border:none;
  margin-top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f87171;
`;

const SchduleAlarmdiv=styled.div`
position:relative;
top:20px;
left:25px;
width:300px;
height:50px;
border: 1px solid #FFE2E2;
border-radius:10px;
`;
const SchduleAlarm=styled.text`
position:absolute;
top:15px;
left:60px;
width:300px;
height:70px;
border-radius:10px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 22px;
color: #000000;
`;

const Schduleenrolldiv=styled.div`
position:relative;
width:250px;
height:130px;
border: 1px solid #FFE2E2;
top:350px;
left:70px;

`
const Schduleenroll=styled.textarea`
position: absolute;
text-align: left;
width:245px;
height:100px;
border:none;
resize: none; 
overflow-y: auto;
outline: none;
overflow-wrap: break-word;
&::-webkit-scrollbar {
    width:0px;
&:focus {
  outline: none;
  border-color: #ffffff;

`
const Enrollbtn=styled.button`
position: absolute;
top:105px;
left:180px;
width:70px;
height:23px;
border:none;
background:#FFE2E2;
border-radius:5px;
font-size: 12px; 
    font-weight: normal;
    color: #000000; 
`

const Schedules=styled.div`
position:relative;
width:250px;
height:130px;
top:350px;
left:70px;
overflow-y: auto;
overflow-wrap: break-word;
&::-webkit-scrollbar {
    width:0px;

`
const Onescd=styled.div`
position:relative;
width:250px;
height:20px;
border: 1px solid #FFE2E2;

`


const Checkschedule=styled.text`
position:absolute;
left:30px;
width:190px;
height:20px;
border: 1px solid #FFE2E2;
text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`

const CustomCalendar = styled(Calendar)`
  position: absolute;
  top: 100px;
  left: 50px;
  border: none !important;
  font-family: 'Arial', sans-serif;

  & .react-calendar__month-view__days__day--weekend {
    color: #000000;
  }

  & .react-calendar__month-view__weekdays {
    /* 요일 영어로 변경 */
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    font-weight: bold;
  }

  & .react-calendar__tile {
    /* 날짜 셀의 넓이 조절 */
    height: 35px;
  }

  & .react-calendar__tile--now {
    background-color: #3498db;
    color: #fff;
  }

  & .react-calendar__tile--active {
    background-color: #2A6B69;
    color: #fff;
    border-radius:5px;
  }

  width: 240px !important;

  & .react-calendar__month-view__weekdays {
    font-family: 'Arial', sans-serif;
    font-size: 10px;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    color: #CCCCCC; 
  }
  & .react-calendar__navigation__label {
    font-size: 14px; 
    font-weight: bold; 
    color: #000000; 
  }

  & .react-calendar__navigation__prev2-button,
  & .react-calendar__navigation__next2-button {
    display: none; 
  }
  
`;

const ScheduleList = ({ schedules }) => {
    return (
      <Schedules>
        {schedules.map((schedule) => (
          <Onescd key={schedule.schedule_id}>
            <Checkscd type="checkbox" checked={schedule.completed} />
            <Checkschedule checked={schedule.completed}>{schedule.schedule_name}</Checkschedule>
          </Onescd>
        ))}
      </Schedules>
    );
  };
const mapWeekdayToAbbreviatedEnglish = (weekday) => {
    const weekdaysMap = {
      Monday: 'Mon',
      Tuesday: 'Tue',
      Wednesday: 'Wed',
      Thursday: 'Thu',
      Friday: 'Fri',
      Saturday: 'Sat',
      Sunday: 'Sun',
    };
    return weekdaysMap[weekday];
  };
  
  const Checkscd =styled.input`
  width:200px
  height:200px`


    export const MainPage = ({ user }) => {
        const [value, onChange] = useState(new Date());
        const [scheduledDates, setScheduledDates] = useState([]);
        const [todayScheduleCount, setTodayScheduleCount] = useState(0);
        const [newSchedule, setNewSchedule] = useState(""); 
        const [scheduledItems, setScheduledItems] = useState([]);

        const enrollSchedule = () => {
          
            const scheduleText = newSchedule;
            axios.post(
                "http://15.164.143.187:8080/api/create-schedule",
                {
                  date: value.toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }),
                  schedule_name: scheduleText,
                },
                {
                  headers: {
                    "X-AUTH-TOKEN": "token",
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((response) => {
                console.log("일정이 성공적으로 등록되었습니다.");
               
                setScheduledItems([...scheduledItems, scheduleText]);
                
                setNewSchedule("");
              })
              .catch((error) => {
                console.error("에러!", error);
              });
            };

        useEffect(() => {

          if (!isLoggedIn) {
            console.log('isLoggedIn:', isLoggedIn);
            // 로그인 상태가 아니라면 로그인 페이지로 이동
            navigate('/Login');
          }
            const fetchSchedules = async () => {
                try {
                  const response = await axios.get(
                    `http://15.164.143.187:8080/api/daily-schedule?date=${value.toISOString()}`,
                    {
                      headers: {
                        "X-AUTH-TOKEN": "token", 
                      },
                    }
                  );
                  setScheduledItems(response.data.schedules);
                } catch (error) {
                  console.error("에러!", error);
                }
              };
          
              fetchSchedules(); 

          axios.get("http://15.164.143.187:8080/api/todays-schedule-count", {
            headers: {
              "X-AUTH-TOKEN": "token",
            },
          })
            .then((response) => {
              setTodayScheduleCount(response.data.schedule_count);
            })
            .catch((error) => {
              console.error("에러!", error);
            });
        },  [value]); 


      
    return (
      <div>
        <Header></Header>
        <Container>
          <SchduleAlarmdiv>
            <SchduleAlarm>
              오늘 마감인 과제가 {todayScheduleCount}개 있어요!
            </SchduleAlarm>
          </SchduleAlarmdiv>
  
          <CustomCalendar
            onChange={onChange}
            value={value}
            formatDay={(locale, date) =>
              new Date(date).toLocaleDateString("en-us", {
                day: "2-digit",
              })
            }
            tileContent={({ date }) => {
              const exist = scheduledDates.some(
                (scheduledDate) =>
                  scheduledDate.toDateString() === date.toDateString()
              );
              return (
                <>
                  <DotBox>{exist && <CalendarDot />}</DotBox>
                </>
              );
            }}
            formatShortWeekday={(locale, date) =>
              mapWeekdayToAbbreviatedEnglish(
                new Date(date).toLocaleDateString("en-us", { weekday: "long" })
              )
            }
          />
          
        </Container>
       <Schduleenrolldiv>
        <Schduleenroll
          placeholder="오늘의 일정을 등록해 주세요."
          value={newSchedule}
          onChange={(e) => setNewSchedule(e.target.value)}
        ></Schduleenroll>
        <Enrollbtn onClick={enrollSchedule}>일정 등록</Enrollbtn>
      </Schduleenrolldiv>

      <ScheduleList schedules={scheduledItems} /> {/* ScheduleList 컴포넌트 사용 */}

      <NavC ></NavC>


      </div>
    );
  };
  
  export default MainPage;