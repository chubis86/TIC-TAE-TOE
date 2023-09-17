const mensaje = document.querySelector('.mensaje');

/////////Arreglo base 
let arreglo =[
    ['','',''],
    ['','',''],
    ['','','']
]; 

/////////Arreglo con las combinaciones posibles para ganar usando al arrelgo base
let arregloGanador=[
    //filas
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    //columnas
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    //cruzado
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];


/////////Variable para saber qué jugador va
//Si el jugador es "0" se marcará una x, de otro modo sera un círculo
let jugador1=true;


/////////Agregamos escucha de eventos a cada casilla

document.querySelectorAll('.casilla').forEach(casilla =>{
    casilla.addEventListener('click', e=>{
        
        //Checamos primero si ya tiene contenido la casilla
        if(casilla.textContent=='X'||casilla.textContent=='O'){
            
        }else{

            //Imprimimos si es X o O 
            console.log(jugador1? 'X' : 'O');
            casilla.innerHTML=`<span class='valor'>${jugador1? 'X' : 'O'}</span>`;
            asignarCasilla();
            
            //Revisar si alguien ha ganado
            if(juegoGanado()){
                if(jugador1){
                    mensaje.innerHTML='EL JUGADOR 1 HA GANADO!!!';
                }else{
                    mensaje.innerHTML='EL JUGADOR 2 HA GANADO!!!';
                }

                //Deshabilitar el tablero
                //Mostrar botón para reiniciar tablero
            }else{  
                //Determinar si el tablero ya se llenó y resultó en un empate
                
                //Cambiamos de jugador
                jugador1=!jugador1;
            
            
                //Si todas las casillas están llenas y nadie ha ganado entonces declarar un empate y mostrar botón para reiniciar
            }
            
        }

    });
});

/////////Relacionar el arreglo con las casillas
function asignarCasilla(){
    let casilla=document.querySelectorAll(".casilla");
    let x=0;
    let y=0;
    for(let i=0; i<casilla.length; i++){
        
        if(y==3){
            x++;
            y=0;
        }
        //console.log('x:'+x+' y:'+y+' '+casilla[i]);
        arreglo[x][y]=casilla[i].innerText;
        y++;    
    }
    

}

function juegoGanado(){
   let bandera=0;
   arregloGanador.forEach(combinacion =>{
           
    if(
    (arreglo[combinacion[0][0]][combinacion[0][1]]=='X' && arreglo[combinacion[1][0]][combinacion[1][1]]=='X' && arreglo[combinacion[2][0]][combinacion[2][1]]=='X') 
    || 
    (arreglo[combinacion[0][0]][combinacion[0][1]]=='O' && arreglo[combinacion[1][0]][combinacion[1][1]]=='O' && arreglo[combinacion[2][0]][combinacion[2][1]]=='O')
    )
        {
            bandera=true;
        } 
   }); 
   return bandera;
}