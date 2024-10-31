'use client';
import { useEffect, useState } from 'react';

export default function Test() {
  // const [test, setTest] = useState<string>();
  const [time, setTime] = useState<string>();
  const [minute, setMinute] = useState<number>();
  const [second, setSecond] = useState<string>();
  const [timeLeft, setTimeLeft] = useState<number>();

  const searchAuction = async () => {
    // const response = await fetch('http://127.0.0.1:5000/test');
    // const json: string = await response.text();
    // console.log(json);
    // setTest(json);
  };

  useEffect(() => {
    searchAuction();
    setTimeLeft(30);
  }, []);

  setInterval(() => {
    const now = new Date().toLocaleTimeString();
    setTime(now);
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();

    if (timeLeft == 60) {
      setMinute(60 - minute);
    } else if (timeLeft == 30) {
      if (minute > 30) {
        setMinute(60 - minute);
      } else {
        setMinute(30 - minute);
      }
    }
    if (second < 1) {
      setSecond('00');
    } else if (second >= 1 && second < 51) {
      setSecond((60 - second).toString());
    } else if (second >= 51) {
      setSecond('0' + (60 - second).toString());
    }
  }, 1000);
  return (
    <div>
      {/* {test} */}
      {time}
      <div>ddd</div>
      <div>
        {minute}:{second}
      </div>
    </div>
  );
}
