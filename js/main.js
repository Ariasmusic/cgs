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