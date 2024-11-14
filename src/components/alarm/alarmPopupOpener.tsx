'use client';

// import useInterval from '@/src/hooks/useInterval';
import useTimerInterval from '@/src/hooks/useTimerInterval';
import { useEffect } from 'react';

export default function Alarm() {
  const { leftSecond } = useTimerInterval();
  const openChild = () => {
    window.open(
      '/popup',
      'childForm',
      'width=570, height=350, resizable = no, scrollbars = no'
    );
  };

  useEffect(() => {
    if (leftSecond == '00') {
      console.log(leftSecond);
      // openChild();
    }
  }, [leftSecond]);
  return (
    <div>
      <div onClick={openChild}>여기 클릭하면 팝업</div>
      <input type='text' id='pInput' />
    </div>
  );
}
