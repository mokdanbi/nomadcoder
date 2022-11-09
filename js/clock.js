const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  // new는 object(객체)를 생성해준다.

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // date.get~()의 경우 string이 아닌 숫자이기때문에 문자로 변환하고 padStart를 사용한다.

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}


const today = document.querySelector(".today")

function getToday() {
  const date = new Date();
  const month = date.getMonth()+1;
  const dayofweek = ['일','월','화','수','목','금','토']
  const week = dayofweek[date.getDay()];
  const day = date.getDate();
  today.innerText = `${month}월 ${day}일 ${week}요일`;
}

setInterval(getClock, 1000);
getToday();
