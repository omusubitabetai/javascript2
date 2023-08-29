const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
　count.textContent = text.value.length;

  //100文字を超えるなら
  if (text.value.length > 100) {
    //alertクラスを加える
    count.classList.add('alert');
    //そうでないなら(100文字以内なら)
  } else{
    //alertクラスを外す
    count.classList.remove('alert');
  }
});
