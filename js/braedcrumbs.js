const breadcrumbsSections = document.querySelectorAll('.section');
const breadcrumbs = document.querySelector('.nav-bar__breadcrumbs');
const breadcrumbsList = document.querySelector('.breadcrumbs');
var number;

// if (divisions.length > 0) {
//     for (let index = 0; index < divisions.length; index++) {
//         const el = divisions[index];
//         el.addEventListener("click", function (e) {
//             const last = document.querySelector('.last');
//             if(last){
//                 last.remove();
//             }
//             breadcrumbs.classList.add('active');
//             const inner = el.textContent || el.innerText;
//             let li = document.createElement('li');
//             li.className = "breadcrumb last";
//             li.innerHTML += "<a>" + inner + "</a>"
//             breadcrumbs_list.append(li);
//             e.preventDefault();
//         });
//     }
// }

// function GenerateBreadcrumb(obj){
//     if(!breadcrumbs.classList.contains("active")){
//         breadcrumbs.classList.add('active');
//     }
//     var breadcrumb = obj.textContent;
//     let li = document.createElement('li');
//     li.className = "breadcrumb";
//     li.innerHTML += "<a>" + breadcrumb + "</a>"
//     breadcrumbsList.append(li);
//     number = document.querySelectorAll('.breadcrumb');
//     console.log(number.length);
//
// }

// if(number){
//     for(let i = 0; i < breadcrumbsSections.length; i++){
//         breadcrumbsSections[i].addEventListener('click', function(){
//             for(let j = i; j < number.length; j++){
//                 console.log("да");
//                 number[j].remove();
//             }
//         });
//     }
// }

