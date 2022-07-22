const footer = document.querySelector(".footer");
const footerInner = document.querySelector(".footer_inner")
const forScroll = document.querySelector('body');
const htmlFooter = '<div class="footer_left"><div class="footer_arrow"></div><div class="footer_header">Меню</div></div><div class="language"><img src="../src/icons/footer/language.svg"></div>';
var prevScrollpos = window.scrollY;
var scrollHeight = document.body.scrollHeight;

if (footer) {
    // footer.innerHTML = htmlFooter;
    var clickR = document.getElementById('sections_');
    //var clickC = document.getElementById('company');
    //clickC.addEventListener('click', function (){  
        //footer.classList.toggle('open');
    //})
    clickR.addEventListener('click', function(){
        footer.classList.toggle('open');
    })
    window.addEventListener('scroll', function(){
        var currentScrollpos = window.scrollY;

        if(prevScrollpos > currentScrollpos){
            footer.classList.remove("hide");
        }else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            this.setTimeout(function(){
                footer.classList.remove("hide");
            }, 200);
        }
        else{
            footer.classList.add("hide");
        }
        prevScrollpos = currentScrollpos;
    });
    const footerMenu = document.querySelector(".footer_left");
    const footerArrow = document.querySelector(".footer_arrow");

    if (footerMenu) {
        footerMenu.addEventListener("click", function (e) {
            footer.classList.toggle('open');
            footerArrow.classList.toggle('open');
            e.preventDefault();
        });
    }
}

