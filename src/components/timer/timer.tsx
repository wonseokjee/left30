'use client';
import useTimerInterval from '@/src/hooks/useTimerInterval';

export default function Timer() {
  const { time, minute, second, typeOfTimer } = useTimerInterval();
  return (
    <div>
      <div>현재 시간</div>
      {time}
      <div></div>
      <div>{typeOfTimer}분 단위 타이머</div>
      <div>
        {minute}:{second}
      </div>
    </div>
  );
}
