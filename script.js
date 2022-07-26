let btnsi = document.getElementById('btnsi');
let btnno = document.getElementById('btnno');

btnno.addEventListener('click', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    console.log(pos)
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnsi.addEventListener('click', () => {
    alert('Ya sabia que querias ser mi novia');
});