(function(){

    "use strict";

    const btn = document.querySelector('button');
    const myPara = document.querySelector('p');

    btn.onclick = function(){
        myPara.style.backgroundColor="green";
    }
})();
