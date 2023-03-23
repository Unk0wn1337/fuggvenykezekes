export function szurnevSzerint(OBJEKTUMLISTA, szuresiFeltetel){

       const eredmenyLista = OBJEKTUMLISTA.filter(function(kutya) {
           console.log(kutya);
         return  kutya.nev.toUpperCase().includes(szuresiFeltetel.toUpperCase());
      });
      console.log(eredmenyLista);
      
      return eredmenyLista;
}

export function szuresKorSzerint(OBJEKTUMLISTA,szuresiFeltetel){

    const eredmenyLista = OBJEKTUMLISTA.filter(function(kutya) {
         console.log(kutya);
    
         return eval(kutya.kor + szuresiFeltetel);        
    
    });
    return eredmenyLista;

}