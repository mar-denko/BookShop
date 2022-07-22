const menu = document.querySelector('.profile_menu');
const menuElements = menu.querySelectorAll('li');
var blocks;

if (menuElements.length > 0) {
    for (let i = 0; i < menuElements.length - 1; i++) {
        let elem = menuElements[i];
        elem.addEventListener('click', function (e) {
            const elementName = elem.querySelector('a').getAttribute('href').replace('#', '');
            blocks = document.querySelector(".right_bar").children;
            for (let j = 0; j < blocks.length; j++) {
                blocks[j].classList.remove('active');
            }
            document.querySelector("." + elementName).classList.add('active');
            e.preventDefault();

        });
    }
}