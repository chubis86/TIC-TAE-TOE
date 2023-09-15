//Arreglo base 
const arreglo =[
    ['','',''],
    ['','',''],
    ['','','']
]; 

//Arreglo con las combinaciones posibles para ganar usando al arrelgo base
const arregloGanador=[
    //filas
    [arreglo[0][0], arreglo[0][1], arreglo[0][2]],
    [arreglo[1][0], arreglo[1][1], arreglo[1][2]],
    [arreglo[2][0], arreglo[2][1], arreglo[2][2]],

    //columnas
    [arreglo[0][0], arreglo[1][0], arreglo[2][0]],
    [arreglo[0][1], arreglo[1][1], arreglo[2][1]],
    [arreglo[0][2], arreglo[1][2], arreglo[2][2]],

    //cruzado
    [arreglo[0][0], arreglo[1][1], arreglo[2][2]],
    [arreglo[0][2], arreglo[1][1], arreglo[2][0]]
];


const casilla1=document.querySelector("#casilla1");
const casilla2=document.querySelector("#casilla2");
const casilla3=document.querySelector("#casilla3");
const casilla4=document.querySelector("#casilla4");
const casilla5=document.querySelector("#casilla5");
const casilla6=document.querySelector("#casilla6");
const casilla7=document.querySelector("#casilla7");
const casilla8=document.querySelector("#casilla8");
const casilla9=document.querySelector("#casilla9");


//Variable para saber qué jugador va
//Si el jugador es "0" se marcará una x, de otro modo sera un círculo
let jugador1=true;

//Agregamos escucha de eventos a cada casilla

document.querySelectorAll('.casilla').forEach(casilla =>{
    casilla.addEventListener('click', e=>{
        //Imprimimos si es X o O 
        console.log(jugador1? 'X' : 'O');
        //Cambiamos de jugador
        jugador1=!jugador1;
    });
});