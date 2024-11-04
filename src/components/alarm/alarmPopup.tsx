'use client';

export default function PopupRender() {
  const setParentText = () => {
    const value = (document.getElementById('cInput') as HTMLInputElement)
      ?.value;
    opener.document.getElementById('pInput').value = value;
    window.close();
  };

  return (
    <div>
      <div>팝업창</div>
      <input type='text' id='cInput'></input>
      <input type='button' value={'전달'} onClick={setParentText}></input>
    </div>
  );
}
