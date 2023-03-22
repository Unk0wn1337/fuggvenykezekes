import { SZAMLISTA, SZOVEGLISTA, OBJEKTUMLISTA } from "./adat.js";
import { rendezesSzam,rendezesSzoveg,rendezesObjektum} from "./rendezes.js";
$(function () {
  console.log(SZAMLISTA);
  rendezesSzoveg(SZOVEGLISTA);
  console.log(SZOVEGLISTA);
  console.log("**************");
  console.log(SZAMLISTA);
  rendezesSzam(SZAMLISTA);
  console.log(SZAMLISTA);
  console.log("**************");
  veletlenSorrend(SZAMLISTA);
  console.log(SZAMLISTA);
  console.log("**************");
  rendezesKorSzerint(OBJEKTUMLISTA,"kor");
  console.log(OBJEKTUMLISTA);
  console.log("**************");
  rendezesSzovegSzerint(OBJEKTUMLISTA,"nev");
  console.log(OBJEKTUMLISTA);
  console.log("**************");
  rendezesSzovegSzerint(OBJEKTUMLISTA,"fajta");
  console.log(OBJEKTUMLISTA);
  console.log("**************");
});

function rendezesSzoveg(lista) {
  lista.sort();
}
function rendezesSzam(lista) {
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
