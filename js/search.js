const search = document.querySelector(".search_ico");
const searchForm = document.querySelector(".search_form")
if(search){
    search.addEventListener('click', function(){
        search.classList.add("hide");
        searchForm.classList.add("active");
    });
}