const Methods = document.querySelectorAll('.method');
if (Methods.length > 0) {
    for (let index = 0; index < Methods.length; index++) {
        const el = Methods[index];
        el.addEventListener("click", function (e) {
            const Active = document.querySelector('.choice');
            Active.classList.remove("choice");
            el.classList.toggle("choice");
        });
    }
}