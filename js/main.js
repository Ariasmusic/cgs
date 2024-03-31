let cont = 0;

document.getElementById('open').addEventListener('click', function(){
    if (cont == 0) {
        document.getElementById('open').classList.add("bx-x");
        document.getElementById('open').classList.remove("bx-menu");
        cont = 1;

        document.getElementById('menu').style.top = '-3%';

    } else {
        document.getElementById('open').classList.remove("bx-x");
        document.getElementById('open').classList.add("bx-menu");
        cont = 0;

        document.getElementById('menu').style.top = '-300%';
    }
});

document.getElementById("sub-menu").addEventListener('click', function(){
    document.getElementById("sub-m").classList.toggle("active");
});
let ct = 0;
document.getElementById("sub-sub-menu").addEventListener('click', function () {
    // document.getElementById("sub-sub-m").classList.toggle("activ");
    if (ct == 0) {
        document.getElementById("sub-sub-m").style.display = "flex";
        document.getElementById("sub-sub-m").style.flexDirection = "column";
        ct++;
    }else{
        document.getElementById("sub-sub-m").style.display = "none";
        ct--;
    }
});
