let prova = 5;
let winUtente = 0;
let sceltaUtente =''
let winPc=0;
let sasso = document.getElementById('sasso')
let carta = document.getElementById('carta')
let forbici = document.getElementById('forbici')
const ptUtente = document.getElementById('ptUtente')
const ptPc = document.getElementById('ptPc')
const playBtn = document.getElementById('playBtn')
const stampaSchermo = document.getElementById('verdetto')
const tu = document.getElementById('tu')
const pc = document.getElementById('pc')


    function disable(){
        forbici.disabled = true;
        carta.disabled = true;
        sasso.disabled = true;
    }
    function able(){
        forbici.disabled = false;
        carta.disabled = false;
        sasso.disabled = false;
    }

    function pulisci(){
        stampaSchermo.innerHTML = 'Try again'
        pc.innerHTML = '';
        tu.innerHTML = '';
        prova = 0
    }

    function sceltaForibici(){
            let sceltaPc = Math.round(Math.random()*2);
            tu.innerHTML = 'You chose scissors'
            switch(sceltaPc) {
            case 0: //forbici
                pc.innerHTML = 'PC chose scissors';
                stampaSchermo.innerHTML = "You drew";
                break;
            case 1: //carta
                pc.innerHTML = 'PC chose paper';
                stampaSchermo.innerHTML = "You Win";
                winUtente++;
                break;
            case 2: //sasso
                pc.innerHTML = 'PC chose rock';
                stampaSchermo.innerHTML = "You lost";
                winPc++;
                break;
}setTimeout(pulisci, 1500)
ptUtente.innerHTML = 'User '+winUtente;
ptPc.innerHTML = 'Pc '+winPc;}


function sceltaCarta(){
    let sceltaPc = Math.round(Math.random()*2);
    tu.innerHTML = 'You chose paper'
    switch(sceltaPc) {
        case 0: //forbici
            pc.innerHTML = 'PC chose scissors';
            stampaSchermo.innerHTML = "You lost";
            winPc++;
            break;
        case 1: //carta
            pc.innerHTML = 'PC chose paper';
            stampaSchermo.innerHTML = "You drew";
            break;
        case 2: //sasso
            pc.innerHTML = 'PC chose rock';
            stampaSchermo.innerHTML = "You Win";
            winUtente++;
            break;
}setTimeout(pulisci, 1500)
ptUtente.innerHTML = 'User '+winUtente;
ptPc.innerHTML = 'Pc '+winPc;}

function sceltaSasso(){
    let sceltaPc = Math.round(Math.random()*2);
    tu.innerHTML = 'You chose rock'
    switch(sceltaPc) {
        case 0: //forbici
            pc.innerHTML = 'PC chose scissors';
            stampaSchermo.innerHTML = "You Win";
            winUtente++
            break;
        case 1: //carta
            pc.innerHTML = 'PC chose paper';
            stampaSchermo.innerHTML = "You lost";
            winPc++;
            break;
        case 2: //sasso
            pc.innerHTML = 'PC chose rock';
            stampaSchermo.innerHTML = "You drew";
            break;
}setTimeout(pulisci, 1500)
ptUtente.innerHTML = 'User '+winUtente;
ptPc.innerHTML = 'Pc '+winPc;}