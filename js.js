const carrusel = document.querySelectorAll('.carrusel'),
	  boton = document.querySelectorAll('.boton');
let contador = 1;
slide(contador);

let cronometro = setInterval(autoSlide, 8000);
function autoSlide() 

{
	contador += 1;
	slide(contador);
}
function resetCronometro() {
	clearInterval(cronometro);
	cronometro = setInterval(autoSlide, 8000); //contador en ceros
}
function flechas(n) {
	contador += n;
	slide(contador);
	resetcronometro(); //contador + n
}
function diapositivaActual(n) {
	contador = n;
	slide(contador);
	resetcronometro(); //contador en ceros
}

function slide(n) {
	
	let i;
	for(i = 0;i<carrusel.length;i++){
		carrusel[i].style.display = "none"; //
	}
	for(i = 0;i<boton.length;i++) {
		boton[i].className = boton[i].className.replace(' active', ''); //lleva el contador con el botn azul
	}
	if(n > carrusel.length){
	   contador = 1;
	   }
	if(n < 1){
	   contador = carrusel.length;
	   }
	carrusel[contador - 1].style.display = "block";
	boton[contador - 1].className += " active";
}
