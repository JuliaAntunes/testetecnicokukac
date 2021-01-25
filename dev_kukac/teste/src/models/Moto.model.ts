import { Veiculo } from "./Veiculo.model";

export class Moto extends Veiculo{

    /** 
     *
     */
    constructor(
        
        private qtd_rodas: Number,
        private passageiros: Number,
        protected modelo: String,
        protected ano_fabricacao: Number,
        protected marca: String,
        
        
    ){
        super(modelo, ano_fabricacao, marca)
    }

    public getQtdRodas(){
        return this.qtd_rodas;
    }

    public setQtdRodas(num_rodas: Number){
        this.qtd_rodas = num_rodas;
    }

    
    //-------------------------------------

    public getMarca(){
        return this.marca;
    }

    public setMarca(marca: String){
        this.marca = marca;
    }

    //-------------------------------------

    public getPassageiros(){
        return this.passageiros;
    }

    public setPassageiros(passageiros: Number){
        this.passageiros = passageiros;
    }

    //-------------------------------------

    public getModelo(){
        return this.modelo;
    }

    public setModelo(modelo: String){
        this.modelo = modelo;
    }

    //-------------------------------------

    public getAnoFabricacao(){
        return this.ano_fabricacao;
    }

    public setAnoFabricacao(ano_fabricacao: Number){
        this.ano_fabricacao = ano_fabricacao;
    }

    //-------------------------------------
}