function iniciarApp(){crear(),document.querySelector(".boton--calcular").addEventListener("click",calculate),document.querySelector(".boton--limpiar").addEventListener("click",clear)}let juegos,i;document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));let valorApuesta=1;function crear(){if(juegos=parseInt(prompt("Ingrese la Cantidad de Juegos a Apostar, hasta un Máximo de 20 juegos. Ejemplo: 5  para 5 logros.")),juegos>=1&&juegos<=20)for(i=1;i<=juegos;i++){let e=document.createElement("DIV");e.classList.add("formulario__campo","clear-campos"),e.innerHTML=`\n            <label class="formulario__label"  for="${i}">${i}</label>\n            <input class="formulario__imput juegos" type="number" name="${i}" id="${i}">\n            `,document.querySelector(".formulario__logros").appendChild(e)}else alert("Nuestra Calculadora, realiza un máximo de 20 Apuestas. Por Favor ingrese un valor menor o igual a 20. Ejemplo: 3 para 3 logros."),crear()}function calculate(){const e=document.querySelector(".formulario__imput--apuesta");valorApuesta=e.value;let a,o=[],t=document.querySelector(".formulario__imput--total"),r=document.querySelector(".mensaje__parrafo"),l=document.querySelector(".mensaje__alerta--logro"),u=document.querySelector(".mensaje__alerta--apuesta");if(valorApuesta?(u.classList.remove("bg-alerta"),u.classList.add("d-none")):(u.classList.remove("d-none"),u.classList.add("bg-alerta")),juegos){document.querySelectorAll(".juegos").forEach(e=>{e.value?(l.classList.remove("bg-alerta"),l.classList.add("d-none"),e.value>0?e.value=e.value/100+1:e.value=Math.abs(100/e.value)+1):(l.classList.remove("d-none"),l.classList.add("bg-alerta")),o.push(e.value)});let e=1;for(let a=0;a<o.length;a++){e*=o[a]}valorApuesta&&function(e,o){e*=o,t.value=e.toFixed(2),a=(e/o).toFixed(2),a>0&&(r.textContent=`Su apuesta paga ${a} veces el valor del Monto Apostado`)}(e,valorApuesta)}}function clear(){document.querySelectorAll(".formulario__imput").forEach(e=>{e.value=""}),mensaje=document.querySelector(".mensaje__parrafo"),mensaje.textContent="";document.querySelectorAll(".juegos").forEach(e=>{e.classList.remove("juegos")});document.querySelectorAll(".clear-campos").forEach(e=>{e.classList.add("d-none")}),crear()}
//# sourceMappingURL=app-ciclo.js.map
