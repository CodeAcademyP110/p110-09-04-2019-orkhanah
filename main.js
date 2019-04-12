"use strict";



[...document.querySelectorAll('.colorBox')].forEach(mainDiv =>{
    mainDiv.onclick = function ()
    {
        document.querySelector('.colorBox.active').classList.remove("active");
        this.classList.add('active')

        document.querySelector('.bottomBox.active').classList.remove("active");

        const id = this.getAttribute("data-id");
        const bottomBox = document.querySelector(`.bottomBox[data-id="${id}"]`);
        
        bottomBox.classList.add("active");
    }
})