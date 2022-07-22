const Nums = document.querySelectorAll('.list_elem');
if (Nums.length > 0) {
    for (let index = 0; index < Nums.length; index++) {
        console.log("что за хуйня");
        const num = Nums[index];
        num.addEventListener("click", function (e) {
            const Active = document.querySelector('.active');
            Active.classList.remove("active");
            num.classList.toggle("active");
            e.preventDefault();
        });
    }
}

