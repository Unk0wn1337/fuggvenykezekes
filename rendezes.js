
export function rendezesSzoveg(lista) {
  lista.sort();
}
export function rendezesSzam(lista) {
  lista.sort(function (a, b) {
    console.log(a, b, a - b);
    return a - b;
  });
  function veletlenSorrend(lista) {
    lista.sort(function (x, y) {
      return Math.random() - 0, 5;
    });
  }
  function rendezesKorSzerint(lista,kulcs) {
    lista.sort(function (a, b) {
      console.log(a, b);
      return (a[kulcs] - b[kulcs]);
    });
  }
  function rendezesSzovegSzerint(lista, kulcs) {
    lista.sort(function (a, b) {
      if (a[kulcs] > b[kulcs]) {
        return 1;
      } else {
        return -1;
      }
    });
    function rendezesObjektum(lista, kulcs){
        if(typeof kulcs == "number"){
            rendezesSzam(lista, kulcs);
        } else {
            rendezesSzoveg(lista, kulcs);
        }
    }


}





}
