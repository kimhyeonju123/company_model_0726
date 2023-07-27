/* 


*/
// ↓ 동작을 부여하고 싶은 애들의 이름을 부른 것
// document는 body 태그 안에 작성된 모든 내용 지칭
//즉, 문서를 지칭하는데 body안에 쓴 내용을 의미
// querySelector는 ()안에 내용을 문서 안에서 찾아줌
// =(등호)는 같다는 의미 X -> 오른쪽의 내용을 왼쪽에 대입하겠다는 의미
let btnCall = document.querySelector(".btnCall");
let menuMo = document.querySelector(".menuMo");

// 동작을 부여하려고 하는 코드
// btnCall을 클릭하면 btnCall과 menuMo의 요소에 
// toggle 이라는 메소드를 사용해서 on클래스를 없으면 붙여주고,
// 있으면 떼어버린느 이벤트 부여
btnCall.addEventListener("click",(e)=>{
    e.preventDefault();
    // a태그 이벤트 없애주기
    btnCall.classList.toggle("on");
    // 클래스에 관한 대부분의 것들은 classList가 들어감
    // toggle - 있으면 ("on")을 떼고 없으면 붙여줌
    menuMo.classList.toggle("on");
});
