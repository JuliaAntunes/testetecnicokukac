import { Veiculo } from "./Veiculo.model";

export class Carro extends Veiculo{

    /** 
     *
     */
    constructor(
        
        private qtd_portas: Number,
        protected modelo: String,
        protected ano_fabricacao: Number,
        protected marca: String,
        
        
    ){
        super(modelo, ano_fabricacao, marca)
    }

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

    public getQtdPortas(){
        return this.qtd_portas;
    }

    public setQtdPortas(qtd_portas: Number){
        this.qtd_portas = qtd_portas;
    }

    //-------------------------------------

    public getMarca(){
        return this.marca;
    }

    public setMarca(marca: String){
        this.marca = marca;
    }

    //-------------------------------------

}