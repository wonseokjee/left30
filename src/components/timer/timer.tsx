'use client';
import useTimerInterval from '@/src/hooks/useTimerInterval';
import Alarm from '../alarm/alarmPopupOpener';

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
