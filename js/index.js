const toTop = document.querySelector(".button_to_top");//*кнопка для скролла
const introHeight = document.querySelector(".intro").clientHeight;//*выстоа до интро

const sections = document.querySelectorAll(".section");//все разделы
var previous; //*предыдущий открытый раздел


//*Scroll To Top

if (toTop) {
    toTop.addEventListener('click', function () {
        window.scrollTo(scrollY, 0);
    });
    window.addEventListener('scroll', function () {
        if (scrollY < introHeight / 2) {
            toTop.classList.remove("show");
        } else {
            toTop.classList.add("show");
        }
    });
}


