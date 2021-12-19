const state = document.getElementById('state');

const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn(){
    if(!isLampBroken()){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    lamp.src = './img/desligada.jpg';
    state.textContent='Ligar';
}

function lampBroken(){
    lamp.src='./img/quebrada.jpg';
    state.textContent='Consertar';
}

function lampOnOff(){
    if(state.textContent=='Ligar'){
        lampOn();
        state.textContent='Desligar';
    }else{
        lampOff();
        state.textContent = 'Ligar';
    }
}

state.addEventListener('click', lampOnOff);

lamp.addEventListener('dblclick', lampBroken);