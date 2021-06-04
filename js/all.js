var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const footer = document.querySelector(".footer")
const form = document.querySelector(".form")
const formM = document.querySelector(".form-m")
const goform = document.querySelectorAll(".goform")
const projectLink = document.querySelectorAll(".project-link")
const stickyBottomBtn = document.querySelector(".sticky-bottom-btn")

window.onload=scrollBtn()

// scroll display btn
window.addEventListener('scroll', scrollBtn);
function scrollBtn() {
  let formHeight = 0
  form.clientHeight === 0 ? formHeight = formM.clientHeight : formHeight = form.clientHeight
  const bodyHeight = document.body.clientHeight // 網頁整體高度
  const scroll = window.scrollY
  const resolution = window.innerHeight  // 裝置高度
  const scrollAll = bodyHeight - resolution  // 取得 scroll 從上到下整體高度
  const elHeight = formHeight + footer.clientHeight + 16 + 32 // 表單到 footer 高度含間距
  if(scroll <= scrollAll - elHeight){
    stickyBottomBtn.classList.remove('d-none')
  }else{
    stickyBottomBtn.classList.add('d-none')
  }
}

// scroll go To block top
goform.forEach(el => el.addEventListener('click', function(){
  form.clientHeight === 0 ? goScrollTo("form-m") : goScrollTo("form")
}));

projectLink.forEach(el => el.addEventListener('click', function(){
  goScrollTo("tab-content")
}));

function goScrollTo(el) {
  // el- offsetTop 間距
  let elOffsetTop = 75
  window.scrollTo({
    top: goToElTop(document.getElementsByClassName(el)[0]) - elOffsetTop,
    behavior: "smooth",
  });
}
function goToElTop(el) {
  let height = 0;
  if(el !== undefined){
    height += el.offsetTop;
    el = el.offsetParent;
  }
  return height;
}