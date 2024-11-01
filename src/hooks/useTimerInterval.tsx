'use client';
import { useState } from 'react';

const useTimerInterval = () => {
  const [time, setTime] = useState<string>();
  const [minute, setMinute] = useState<string>();
  const [second, setSecond] = useState<string>();

  //나중에 recoil로 user마다 다른 timer종류 설정하기
  const typeOfTimer = 30;

  setInterval(() => {
    const now = new Date().toLocaleTimeString();
    setTime(now);
    const realMinute = new Date().getMinutes();
    const realSecond = new Date().getSeconds();

    // 00초 일경우 남은 시간이 1분 작음 ex) 실제 11:00 -> 10:59 오류 10:00 -> 10:59
    if (realSecond >= 1) {
      //00분일 경우 남은  분 오류 ex) 실제 00:59남음 오류 60:59남음
      if (realMinute < 1) {
        setMinute('00');
      } else {
        //타이머 분 단위 설정

        // 타이머 타입이 30분 단위일 경우
        if (typeOfTimer == 30) {
          if (realMinute > 30) {
            setMinute(String(60 - realMinute).padStart(2, '0'));
          } else {
            setMinute(String(30 - realMinute).padStart(2, '0'));
          }
        }
        //타이머 타입이 60분 단위일 경우
        else if (typeOfTimer == 60) {
          setMinute(String(60 - realMinute).padStart(2, '0'));
        }
        //타이머 타입이 15분 단위일 경우
      }
    }
    //타이머 초 단위 설정

    //00초일 경우 남은  분 오류 ex) 실제 10:00남음 오류 10:60남음
    if (realSecond < 1) {
      setSecond('00');
    } else if (realSecond >= 1) {
      //padStart(2,'0'): 자리수가 2보다 작을 경우 앞에 '0'추가
      setSecond(String(60 - realSecond).padStart(2, '0'));
    }
  }, 1000);

  return { time, minute, second, typeOfTimer };
};

export default useTimerInterval;
