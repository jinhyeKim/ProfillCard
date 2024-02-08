const ver=navigator.userAgent;
const isIE = /trident/i.test(ver);
console.log(ver);
console.log(isIE);

if(isIE){
  alert("익스프로러 미지원 페이지! 다른 브라우저로 접속바람!!")
}