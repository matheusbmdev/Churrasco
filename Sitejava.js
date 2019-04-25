var kgMasculino = 0;
var kgFeminino = 0;
var kgCrian = 0;
var qtdBebidas = 0;
var qtdAcomp = 0;
var qtdcarne = 0;
var qtdBebidas = 0;
var qtdPao = 0;
var qtdcarvao = 0;


function verificaChecks() {

    var aChk = document.getElementsByName("Carne"); 
    var homens = document.getElementById('M').value;
    var mulher = document.getElementById("F").value;
    var crianca = document.getElementById("C").value;
    
    for (var i=0;i<aChk.length;i++){ 
        if (aChk[i].checked == true){  
                qtdcarne++;
        }
    }
        console.log("Homens " + homens);
        console.log("Mulheres "+mulher);
        console.log("crianças "+crianca);
    
    kgMasculino = (homens * 450)/1000;
    kgFeminino = (mulher * 300)/1000;
    kgCrian = (crianca * 200)/1000;
  
    var calcMasc  = kgMasculino/qtdcarne;
    var calcFem = kgFeminino/qtdcarne;
    var calcCria = kgCrian/qtdcarne;

    calcMasc.toFixed(1);
    calcFem.toFixed(1);
    calcCria.toFixed(1);


   
    var aChkB = document.getElementsByName("bebidas"); 
    for (var i=0;i<aChkB.length;i++){ 
        if (aChkB[i].checked == true){  
                qtdBebidas++;
        }
    }

    var aChkpao = document.getElementsByName("paodealho");
    for(var i = 0;i <aChkpao.length;i++){
        if(aChkpao[i].checked == true){
            qtdPao++;
        }
    }
    

     var aChkcarvao = document.getElementsByName("Carvao");
     for(var i = 0;i < aChkcarvao.length;i++){
        if(aChkcarvao[i].checked == true){
            qtdcarvao++;
        }
    }
    console.log(+qtdBebidas);
    console.log(+qtdPao);
    console.log(+qtdcarvao);

    alert("Homens = "+ calcMasc + "kg" + " Mulheres = "+ calcFem + "kg" + " Crianças = "+ calcCria + "kg");
    alert("Pão de Alho = " + qtdPao  + " Bebidas = " + (qtdBebidas * (homens+mulher)) + " Carvão = " + qtdcarvao+1);
}