export class Cep{
    constructor(private bairro: String, private cep: String, private complemento: String, 
        private localidade: String, private logradouro: String, private uf: String){}


        public getBairro(){
            return this.bairro;
        }
    

        //-------------------------------------

        public getCep(){
            return this.cep;
        }
    

        //-------------------------------------

        public getComplemento(){
            return this.complemento;
        }
    
        //-------------------------------------

        public getLocalidade(){
            return this.localidade;
        }
     
        //-------------------------------------

        public getLogradouro(){
            return this.logradouro;
        }

        //-------------------------------------

        public getUF(){
            return this.uf;
        }


}