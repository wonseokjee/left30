'use client';
import useTimerInterval from '@/src/hooks/useTimerInterval';
// import dynamic from 'next/dynamic';
import Alarm from '../alarm/alarmPopupOpener';
// const Alarm = dynamic(() => import('../alarm/alarm'), { ssr: false });

export default function Timer() {
  const { time, leftMinute, leftSecond, typeOfTimer } = useTimerInterval();

  return (
    <div>
      <Alarm />
      <div>현재 시간</div>
      {time}
      <div></div>
      <div>{typeOfTimer}분 단위 타이머</div>
      <div>
        {leftMinute}:{leftSecond}
      </div>
    </div>
  );
}
