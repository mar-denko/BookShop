const pages = document.querySelectorAll(".txt_item");//"страницы" для перелистывания
const NavNext = document.querySelector('#scrolling_next');//элемент для перелистывания на след стр
const NavPrev = document.querySelector('#scrolling_prev');//элемент для перелистывания на пред стр
const pageNum = document.querySelector('#page_num');//элемент для навигации по страницам


const scrollingInner = document.getElementById("scrolling__inner");//блок родитель перелистывания стр
const pageNumBlock = document.querySelector(".page__number");//нумерация стр

const slider = document.getElementById("textSize");//элемент для увеличения текста

var seen = true;//флаг для перелистывания
var current = 0;//нынешняя страница(страница на которой находится пользователь)

var pageFirst;  //первая страница "разварота" книжного формата
var pageSecond; //вторая страница "разварота" книжного формата
var numOfBookPages = Math.ceil(pages.length / 2);//количество перелистываний в книжном формате


const zoom = document.getElementById("zoom");//элемент для открытия полноэкранного режима чтения
const rightSide = document.getElementById("right_side");

const parent = window.parent;
const parenBody = parent.document.querySelector('body');
const iframe = parent.document.getElementById("iframe");

const formats = document.querySelector('.formats');
const formatBlock = document.querySelector(".text");


var fontSize = getComputedStyle(pages[0].querySelector('p')).fontSize;//размер текста при загрузке страницы

const body = document.querySelector("body");
const textBlock = document.querySelector(".text");
var iframeDocument = iframe.contentWindow;
var iframeHeight = iframeDocument.innerHeight;
var Height;// = iframeDocument.outerHeight;
var Width;// = iframe.clientWidth;
var fontSize = getComputedStyle(textBlock.querySelector('p')).fontSize;
var lineHeight = getComputedStyle(textBlock.querySelector('p')).lineHeight;
const funcBlock = document.querySelector(".func");
const header = document.querySelector(".annotation");





//назначение кол-ва страниц при загрузке страницы
if (pageNum) {
    pageNum.textContent = current + 1 + "/" + pages.length;
    CheckForArrows(current);
    CheckForFormat();
}

//перелистывание вперед

//--для альбомного и формата док
function NextPage() {
    seen = true;
    for (let prev = current; prev < pages.length; prev++) {
        if (seen && current < pages.length - 1) {
            document.getElementById("item" + prev).style.display = "none";
            current = current + 1;
            document.getElementById("item" + current).style.display = "block";
            seen = false;
        }
    }
    pageNum.textContent = current + 1 + "/" + pages.length;
    CheckForArrows(current);
}

//--для книжного формата

function NextPageBook() {
    pageFirst = current;
    pageSecond = current + 1;
    if (pageFirst <= numOfBookPages - 1) {
        document.getElementById("item" + pageFirst).style.display = "none";
        document.getElementById("item" + pageSecond).style.display = "none";
        pageFirst = pageFirst + 2;
        pageSecond = pageSecond + 2;
        if (pageFirst <= numOfBookPages && numOfBookPages % 2 == 0) {
            document.getElementById("item" + pageFirst).style.display = "block";
            document.getElementById("item" + pageSecond).style.display = "block";
        } else {
            document.getElementById("item" + pageFirst).style.display = "block";
        }
        current = pageFirst;
    }
    pageNum.textContent = Math.round(current / 2) + 1 + "/" + numOfBookPages;
    CheckForArrows(current);

}


//перелистывание назад

//--для альбомного и формата док

function PrevPage() {
    seen = true;
    for (let prev = current; prev >= 0; prev--) {
        if (seen && current >= 1) {
            document.getElementById("item" + prev).style.display = "none";
            current = current - 1;
            document.getElementById("item" + current).style.display = "block";
            seen = false;
        }
    }
    pageNum.textContent = current + 1 + "/" + pages.length;
    CheckForArrows(current);
}

//--для книжного формата

function PrevPageBook() {
    pageFirst = current;
    if (pageFirst == numOfBookPages + 1 && numOfBookPages % 2 != 0) {
        document.getElementById("item" + pageFirst).style.display = "none";
        pageSecond = pageFirst - 1;
        pageFirst = pageFirst - 2;
        document.getElementById("item" + pageFirst).style.display = "block";
        document.getElementById("item" + pageSecond).style.display = "block";
    }
    else if (pageFirst < numOfBookPages + 1) {
        pageSecond = pageFirst + 1;
        document.getElementById("item" + pageFirst).style.display = "none";
        document.getElementById("item" + pageSecond).style.display = "none";
        pageFirst = pageFirst - 2;
        pageSecond = pageFirst + 1;
        document.getElementById("item" + pageFirst).style.display = "block";
        document.getElementById("item" + pageSecond).style.display = "block";
    }
    current = pageFirst;
    pageNum.textContent = current + 1 + "/" + numOfBookPages;
    CheckForArrows(current);
}


//скрытие или добавление стрелок для певой и послед стр
function CheckForArrows(curr) {
    if (curr == 0) {
        NavPrev.style.display = "none";
        scrollingInner.style.width = "156px";
        pageNumBlock.classList.add("first");
    }
    else if (curr == pages.length - 1) {
        NavNext.style.display = "none";
        scrollingInner.style.width = "156px";
        pageNumBlock.classList.add("last");
    }
    else {
        NavNext.style.display = "inline-block";
        NavPrev.style.display = "inline-block";
        pageNumBlock.classList.remove("first");
        pageNumBlock.classList.remove("last");
    }
}

function startsWithCapital(string) {
    return string.chartAt(0) === string.chartAt.toUpperCase();
}


function сharactersPerLine() {
    reSizing();
    let div = document.createElement('div');
    div.className = "check";
    document.body.append(div);
    var targetWidth = Width;
    var numChars = 0;
    var LineChart = "АаБбВвГгДдЕеЁёЖжЗзИиКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщъЫьЭэЮюЯя";
    var j = 0;
    while (div.clientWidth < targetWidth) {
        div.innerHTML += LineChart[j];
        numChars++;
        j++;
        if (j >= LineChart.length) {
            j = 0;
        }
    }
    div.remove();
    return numChars;

}

function removeChi() {
    var node = document.getElementById("page");
    node.parentNode.removeChild(node);
}

//количество символв для вывода на стр
function Characters() {
    reSizing();//определение размера страницы
    lineHeight = Number((getComputedStyle(textBlock.querySelector('p')).lineHeight).replace("px", ""));//высота стр
    var сharacters = сharactersPerLine();//количество символов в строке
    var numberOfLines = Math.floor(Height / lineHeight);//количество строк
    var numCharactersInBlock = сharacters * numberOfLines;//количество символов в блоке Width на Height
    console.log("w: " + Width + " h: " + Height);
    var LineChart = "- «Ты что влюбился?», - уже дважды повторила свой вопрос в шутливой форме " +
        "старшая сестра, прежде чем он с того же вопроса заданного в третий раз, вышел из " +
        "своего столбняка и перевёл свой взгляд на сестру, и далее обвёл им всю свою широко " +
        "улыбающуюся, любимую семью. Кровь мгновенно прилила к его лицу, и он " +
        "почувствовал, что лицо его горит";
    var j = 0;
    var lastLine = '';
    let p = document.createElement('p');
    let span = document.createElement('span');
    span.style.display = 'inline-block';
    p.id = 'page';

    pages[0].append(p);
    for (let line = 0; line < numberOfLines; line++) {
        if (line == numberOfLines - 1) {
            j++;            
            p.append(span);
            for (let sym = 0; sym < сharacters; sym++){
                if (j >= LineChart.length - 1) {
                    j = 0;
                } else {
                    j++;
                }
                span.innerHTML += LineChart[j];
            }
            break;
        } else {
            for (let sym = 0; sym < сharacters; sym++) {
                if (j >= LineChart.length - 1) {
                    j = 0;
                } else {
                    j++;
                }
                p.innerHTML += LineChart[j];
            }
        }
    }
}

var sliderValue;

//увеличение/уменшения текста
function getSliderValue() {
    if (slider) {
        for (let num = 0; num < pages.length; num++) {
            slider.scrollIntoView();
            pages[num].style.fontSize = slider.value + "px";
            pages[num].style.lineHeight = slider.value * 1.14 + "px";
            sliderValue = slider.value;
        }
    }

}

var funcBlockHeight = funcBlock.clientHeight + Number((getComputedStyle(funcBlock).marginTop).replace('px', '')) + Number((getComputedStyle(funcBlock).bottom).replace('px', ''));// считает количестов px элемента func
var headerHeight = header.clientHeight + Number((getComputedStyle(header).marginBottom).replace('px', ''));// считает количестово px который занимет заголовок


function test(w, h) {
    div.className = "test";
    div.style.width = w + "px";
    div.style.height = h + "px";
    document.body.append(div);
}

function reSizing() {
    iframeHeight = iframeDocument.innerHeight;
    console.log(iframeHeight);
    Height = iframeHeight - (funcBlockHeight + headerHeight + (Number((getComputedStyle(body).padding).replace('px', ''))) * 2);
    console.log(iframeHeight + ", " + funcBlockHeight + ", " + headerHeight + ", " + (Number((getComputedStyle(body).padding).replace('px', ''))) * 2);
    Width = iframe.clientWidth - Number((getComputedStyle(body).padding).replace('px', '')) * 2;
    let div = document.createElement('div');

}


function Zooming() {
    iframe.classList.toggle("zoomed");
    parenBody.style.overflow = 'hidden';
    document.body.style.padding = "30px";
    iframe.style.width = iframe.contentWindow.document.body.scrollWidth + 'px';
    formats.classList.toggle('_active');
    Landscape();
    slider.value = sliderValue;
    zoom.classList.toggle("unzoom");
    for (let num = 0; num < pages.length; num++) {
        pages[num].style.fontSize = sliderValue + "px";
    }
    if (iframe.classList.length == 0) {
        parenBody.style.overflow = 'visible';
        iframe.style.height = "100vh";
        iframe.style.width = "100%";
        document.body.style.padding = "10px";
        slider.value = "20px";
        for (let num = 0; num < pages.length; num++) {
            pages[num].style.fontSize = 20 + "px";
        }
    }
}

function CheckForFormat() {
    if (formatBlock.classList.item(1) == 'text_book') {
        NavNext.onclick = NextPageBook;
        NavPrev.onclick = PrevPageBook;
    }
    else {
        NavNext.onclick = NextPage;
        NavPrev.onclick = PrevPage;
    }
}

function Landscape() {
    formatBlock.classList.remove('text_document');
    formatBlock.classList.remove('text_book');
    document.getElementById("item" + (current + 1)).style.display = "none";

    pageNum.textContent = current + 1 + "/" + pages.length;
    CheckForFormat();
}

function DocumentFormat() {
    formatBlock.classList.add('text_document');
    formatBlock.classList.remove('text_book');
    document.getElementById("item" + (current + 1)).style.display = "none";

    pageNum.textContent = current + 1 + "/" + pages.length;
    CheckForFormat();
}

function Book() {
    formatBlock.classList.remove('text_document');
    formatBlock.classList.add('text_book');

    if (current < pages.length) {
        pages[current + 1].style.display = "block";
    }
    pageNum.textContent = Math.round(current / 2) + 1 + "/" + numOfBookPages;
    CheckForFormat();
}






