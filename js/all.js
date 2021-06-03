const forms = document.querySelector("#wdwd")
const footer = document.querySelector(".footer")
const goform = document.querySelectorAll(".goform")
const projectLink = document.querySelectorAll(".project-link")
const stickyBottomBtn = document.querySelector(".sticky-bottom-btn")


window.addEventListener('scroll', earthmove);

function earthmove() {
  const bodyHeight = document.body.clientHeight // 網頁整體高度
  const scroll = window.scrollY
  const resolution = window.innerHeight  // 裝置高度
  const scrollAll = bodyHeight - resolution  // 取得 scroll 從上到下整體高度
  const elHeight = forms.clientHeight + footer.clientHeight + 16 + 32 // 表單到 footer 高度含間距
  if(scroll <= scrollAll - elHeight){
    stickyBottomBtn.classList.remove('d-none')
  }else{
    stickyBottomBtn.classList.add('d-none')
  }
}







goform.forEach(el => el.addEventListener('click', function(){
  goScrollTo("form")
}));

projectLink.forEach(el => el.addEventListener('click', function(){
  goScrollTo("tab-content")
}));

function goScrollTo(el) {
  let n = 0
  let elOffsetTop = 75
  // n 選取元素用
  // elOffsetTop 間距
  if(el === 'form'){ // form 有 2 個所以要判斷 n 是 PC(0) 還是手機(1)
    let w = window.screen.width // 裝置寬度
    if(w < 991){
      n = 1
    }else{
      n = 0
    }
  }
  window.scrollTo({
    top: goToElTop(document.getElementsByClassName(el)[n]) - elOffsetTop,
    behavior: "smooth",
  });
}
function goToElTop(el) {
  // let bridge = el;
  let root = document.body;
  let height = 0;
  if(el !== root){
    console.log(height);
    height += el.offsetTop;
    console.log(height);
    el = el.offsetParent;
  }
  return height;
}