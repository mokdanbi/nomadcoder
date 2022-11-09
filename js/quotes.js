const quotes = [
  {
    content: "When you have faults, do not fear to abandon them.",
    name: "Confucius"
  },
  {
    content: "Age is no guarantee of maturity.",
    name: "Lawana Blackwell"
  },
  {
    content: "You will face many defeats in life, but never let yourself be defeated.",
    name: "Maya Angelou"
  },
  {
    content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    name: "Nelson Mandela"
  },
  {
    content: "Only I can change me life, no one can do it for me.",
    name: "Carol Burnett"
  },
  {
    content: "All you need in this life is ignorance and confidence, then success is sure.",
    name: "Mark Twain"
  }
]

const content = document.querySelector(".quote strong");
const name = document.querySelector(".quote span");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]
content.innerText = todayQuote.content;
name.innerText = todayQuote.name;

// console.log(quotes.length)
// length를 사용해 배열의 길이를 알아내는게 좋다.

// Math.radom() * 10
// 0이상 10미만 사이의 숫자를 랜덤으로 얻을 수 있음
// 숫자는 소수점을 가지기 때문에 Math.round() : 반올림 , Math.ceil():올림,Math.floor():내림