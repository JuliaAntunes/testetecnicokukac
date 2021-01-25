
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

import { Carro } from 'src/models/Carro.model';
import { Cep } from 'src/models/Cep.model';
import { Moto } from 'src/models/Moto.model';
import { CepServiceService } from './cep-service.service';


interface Veiculos{ 
  carro ? : Carro[],
  moto ? : Moto[]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'teste técnico';

  public carros: Carro [] = [];
  public motos: Moto [] = [];
  public veiculos_json: Veiculos = {}

  public problema: Number = 0;

  public veiculo: String = '';
  public qtd_veiculos: any = 0;

  public form: FormGroup = new FormGroup({});

  public validacao_cep: Boolean[] = [];
  public ceps: Cep[] = [];
  public ceps_retorno: any[] = [];

  public pattern: PatternValidator = new PatternValidator();

  public alerta_cep: Number = 0;
  public alerta_palindromos: Number = 0;
  public alerta_compra:Number = 0;

  public qtd_ceps: any = 0;

  public lista_palindromos: any[] = [];

  public notas_cem: Number = 0;
  public notas_dez: Number = 0;
  public notas_um: Number = 0;
  public troco: Number = 0;


  constructor(private fb: FormBuilder, private cepService: CepServiceService) {

    this.form = this.fb.group({

        modelo: ['', Validators.compose([
            Validators.minLength(3),
            Validators.maxLength(11)
        ])],

        qtd_portas: ['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(1)
        ])],

        ano_fabricacao: ['', Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(4)
        ])],

        marca: ['', Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(11)
        ])],

        passageiros: ['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(1)
        ]) ],

        qtd_rodas: ['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(6)
        ])],

        veiculo: ['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(6)
          
        ])],

        cep1:['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]+$')
          
        ])],

        cep2:['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]+$')
          
        ])],

        cep3:['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]+$')
          
        ])],

        cep4:['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]+$')
          
        ])],

        cep5:['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]+$')
          
        ])],

        num1:['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]+$')
          
        ])],

        num2:['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]+$')
          
        ])],

        preco:['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]+$')
          
        ])],

        dinheiro:['', Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]+$')
          
        ])]



    })
    

  }


  limpaCarro(){
    this.form.controls['qtd_portas'].setValue('');
    this.form.controls['qtd_rodas'].setValue('');
    this.form.controls['passageiros'].setValue('');
    this.form.controls['modelo'].setValue('');
    this.form.controls['ano_fabricacao'].setValue('');
    this.form.controls['marca'].setValue('');
  }

  adicionaCarro(){

        this.qtd_veiculos++;

        const qtd_portas = this.form.controls['qtd_portas'].value;
        const modelo = this.form.controls['modelo'].value;
        const ano_fabricacao = this.form.controls['ano_fabricacao'].value;
        const marca = this.form.controls['marca'].value;

        this.carros.push(new Carro(qtd_portas, modelo, ano_fabricacao, marca));

        this.limpaCarro()


    }




  salvarJson(){

    //var blob = new Blob(["Welcome to Websparrow.org."],
               // { type: "text/plain;charset=utf-8" });
    
    //saveAs(blob, "../veiculo.json");
      //fs.writeFileSync('../veiculos.json', data);
  }

  adicionaMoto(){

    this.qtd_veiculos++;

    const qtd_rodas = this.form.controls['qtd_rodas'].value;
    const passageiros = this.form.controls['passageiros'].value;
    const modelo = this.form.controls['modelo'].value;
    const ano_fabricacao = this.form.controls['ano_fabricacao'].value;
    const marca = this.form.controls['marca'].value;

  
    this.motos.push(new Moto(qtd_rodas, passageiros, modelo, ano_fabricacao, marca));

    this.limpaMoto();

  }

  limpaMoto(){
      this.form.controls['qtd_portas'].setValue('');
      this.form.controls['qtd_rodas'].setValue('');
      this.form.controls['passageiros'].setValue('');
      this.form.controls['modelo'].setValue('');
      this.form.controls['ano_fabricacao'].setValue('');
      this.form.controls['marca'].setValue('');
  }

  verificaVeiculo(){

      this.veiculo = this.form.controls['veiculo'].value;

  }

  removeCarro(carro: Carro){
    const index = this.carros.indexOf(carro);

    this.qtd_veiculos--;
    
    if(index != -1){
        this.carros.splice(index, 1);
    }
  }

  removeMoto(moto: Moto){
    const index = this.motos.indexOf(moto);

    this.qtd_veiculos--;
    
    if(index != -1){
        this.motos.splice(index, 1);
    }
  }

  removeCep(cep: Cep){
    const index = this.ceps.indexOf(cep);

    if(index != -1){
        this.ceps.splice(index, 1);
    }
  }

  //controle de interface
  setProblema1(){
      this.problema = 1;
  }

  setProblema2(){
    this.problema = 2;
  }

  setProblema3(){
    this.problema = 3;
  }

  setProblema4(){
    this.problema = 4;
  }

  voltar(){
    this.problema = 0;
    this.limpaCeps();
    this.limpaCarro();
    this.limpaMoto();
    this.limpaPalindromos();
    this.limpaCompra();
  }

  limpaCeps(){
      this.form.controls['cep1'].setValue('');
      this.form.controls['cep2'].setValue('');
      this.form.controls['cep3'].setValue('');
      this.form.controls['cep4'].setValue('');
      this.form.controls['cep5'].setValue('');
  }

  chamarViaCep(){


      const cep1 = this.form.controls['cep1'].value;
      const cep2 = this.form.controls['cep2'].value;
      const cep3 = this.form.controls['cep3'].value;
      const cep4 = this.form.controls['cep4'].value;
      const cep5 = this.form.controls['cep5'].value;

      

      const ceps: String[] = [];

      ceps.push(cep1);
      ceps.push(cep2);
      ceps.push(cep3);
      ceps.push(cep4);
      ceps.push(cep5);

      //Primeiro zerar o array
      const array: Boolean[] = [];

      this.validacao_cep = array;

      //Validações
      this.validacao_cep.push(cep1 ? true : false);
      this.validacao_cep.push(cep2 ? true : false); 
      this.validacao_cep.push(cep3 ? true : false); 
      this.validacao_cep.push(cep4 ? true : false); 
      this.validacao_cep.push(cep5 ? true : false); 

      //Se algum cep não foi preenchido ou for inválido a consulta não é feita
      var nao_valid = this.validacao_cep.some(el=> el == false);

      if(nao_valid || this.form.controls['cep1'].invalid || this.form.controls['cep2'].invalid || 
        this.form.controls['cep3'].invalid || this.form.controls['cep4'].invalid || 
        this.form.controls['cep5'].invalid ){
        console.log('Dados de cep inválidos!');
        this.alerta_cep = 1;
      }else{

          const ceps_aux: Cep[] = []

          this.qtd_ceps += 5;
          this.alerta_cep = 0;

          this.chamarAPIcep(ceps, this.ceps_retorno ,this.cepService);

          this.ceps_retorno.forEach(function(element,index){

              ceps_aux.push(new Cep(element.bairro,element.cep,element.complemento,element.localidade,element.logradouro,element.uf));
              
          })
          
          this.ceps = ceps_aux;
          
          
      }

  }

  chamarAPIcep(ceps:String[], ceps_retorno:any[], cepService: CepServiceService){
      
      ceps.forEach(function(element,index){
        cepService.buscar(element).subscribe((dados) =>  ceps_retorno.push(dados));
      });

  }

  recebeInputPalindromos(){

      var num1 = this.form.controls['num1'].value
      var num2 = this.form.controls['num2'].value

      if(this.form.controls['num1'].invalid || this.form.controls['num2'].invalid){
          this.alerta_palindromos = 1;
      }else{
        this.alerta_palindromos = 0;
        this.retornaPalindromos(num1, num2);
      }
  }

  limpaPalindromos(){
      const array_vazio: any[] = [];
      this.lista_palindromos = array_vazio;

      this.form.controls['num1'].setValue('');
      this.form.controls['num2'].setValue('');
  }

  retornaPalindromos(num1:any,num2:any){

      var retorno: Boolean = false;
      const array_vazio: any[] = [];
      this.lista_palindromos = array_vazio;

      if(num1 > num2){

        for(var i = num2; i < num1; i++){
          retorno = this.isPalindromo(String(i))

          if(retorno){
              this.lista_palindromos.push(i);
          }
        }
  
        
      }else
      if(num1 < num2){
        for(var i = num1; i < num2; i++){
          retorno = this.isPalindromo(String(i))
          console.log(retorno)
          if(retorno){
              this.lista_palindromos.push(i);
          }
        }
  
      }

      
  }

  isPalindromo(numero: String){
      var numero_invertido: String = numero;

      numero_invertido = numero_invertido.split('').reverse().join('');


      if(numero_invertido != numero){
        return false;
      }else{
        return true;
      }

      
  }

  recebeInputCompra(){
    const preco = this.form.controls['preco'].value;
    const dinheiro = this.form.controls['dinheiro'].value;

    if(this.form.controls['preco'].invalid || this.form.controls['dinheiro'].invalid){
        this.alerta_compra = 1;
    }else{
      this.alerta_compra = 0;
      this.calculaTroco(preco,dinheiro);
    }
  }

  calculaTroco(preco:any, dinheiro:any){
      var troco:any = dinheiro - preco;

      var cem = 0;
      var dez = 0;
      var um = 0;
      while(troco>0){
          if(troco >= 100){
              troco -= 100;
              cem++;
          }else
          if(troco >= 10 && troco < 100){
              troco -= 10;
              dez++;
          }else
          if(troco >= 1 && troco < 10 ){
            troco -= 1;
            um++
          }

      }

      this.troco = dinheiro - preco;
      this.notas_cem = cem;
      this.notas_dez = dez;
      this.notas_um = um;

  }

  limpaCompra(){
    
    this.troco = 0;
    this.notas_cem = 0;
    this.notas_dez = 0;
    this.notas_um = 0;

    this.form.controls['preco'].setValue('');
    this.form.controls['dinheiro'].setValue('');
  }


}
