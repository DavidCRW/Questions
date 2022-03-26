let questionsBtn = document.querySelectorAll(".jsbtn");

let logical = false;
questionsBtn.forEach(elem => {
    elem.addEventListener("click", ()=> {
        logical = !logical;
        elem.parentElement.lastElementChild.classList.toggle("show");
        if(logical){
            elem.parentElement.firstElementChild.classList.remove("fa-plus");
            elem.parentElement.firstElementChild.classList.add("fa-minus");
        }else{
            elem.parentElement.firstElementChild.classList.add("fa-plus");
            elem.parentElement.firstElementChild.classList.remove("fa-minus");
        }

    })
})