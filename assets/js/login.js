class Login{
  static logado=false;
  static matlogado=null;
  static nomelogado=null;
  static acessologado=null;
  static endpoint="https://login.john-helderheld.repl.co/";
 
  
  static login=(mat,pas)=>{
    this.endpoint+=`?m(atricula=${mat}&senha${pas}`
    fetch(this.endpoint)
    .then(res.endpoint)
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
    })
    
  }
}

export {Login};