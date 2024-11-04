'use client';

export default function Alarm() {
  const openChild = () => {
    window.open(
      '/popup',
      'childForm',
      'width=570, height=350, resizable = no, scrollbars = no'
    );
  };

  //https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EB%B6%80%EB%AA%A8%EC%B0%BD-%E2%9E%9C-%EC%9E%90%EC%8B%9D%EC%B0%BD%EC%9D%98-%EA%B0%92-%EC%A0%84%EB%8B%AC

  // useInterval(() => {
  //   // if (leftMinute == '00' && leftSecond == '00') {
  //   if (leftSecond == '00') {
  //     // console.log(new Date().getSeconds());
  //     console.log(leftSecond);

  //     openChild();
  //   }
  //   //1분동안 답 없으면 윈도우창 닫기 기능????
  // }, 1000);
  return (
    <div>
      <div onClick={openChild}>여기 클릭하면 팝업</div>
      <input type='text' id='pInput' />
    </div>
  );
}
