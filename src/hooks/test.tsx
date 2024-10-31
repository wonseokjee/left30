'use client';
import { useEffect, useState } from 'react';

export default function Test() {
  const [test, setTest] = useState<string>();
  const searchAuction = async () => {
    const response = await fetch('http://127.0.0.1:5000/test');
    const json: string = await response.text();
    console.log(json);
    setTest(json);
  };

  useEffect(() => {
    searchAuction();

    const eventSource = new EventSource('http://127.0.0.1:5000/test/all');
    // SSE 이벤트 수신
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data:', data);
    };
    return () => {
      eventSource.close();
    };
  }, []);
  return (
    <div>
      {test}
      <div>ddd</div>
    </div>
  );
}
