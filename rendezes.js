export function rendezesSzoveg(lista){
  lista.sort()
}
export function rendezesSzam(lista){
  lista.sort(function(a, b){return a - b});
}
export function veletlenSorrend(lista){
  lista.sort(function(x,y){
      return Math.random() -0.5;
  })
}
function rendezesSzamSzerint(lista,kulcs){
  lista.sort(function(a, b){
      return a[kulcs] - b[kulcs]});
}
function rendezesSzovegSzerint(lista,kulcs){
  lista.sort(function(x, y){
      if (x[kulcs] > y[kulcs]) {return 1;}
      if (x[kulcs] < y[kulcs]) {return -1;}
      return 0;
    });
}
export function rendezesObjektum(lista,kulcs){
  if(typeof kulcs =='number'){
      rendezesSzamSzerint(lista,kulcs);
  }else{
      rendezesSzovegSzerint(lista,kulcs);
  }
}