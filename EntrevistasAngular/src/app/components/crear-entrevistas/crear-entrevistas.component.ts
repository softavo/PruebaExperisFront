import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { EntrevistasService } from 'src/app/services/entrevistas.service';
import { Tecnologia } from 'src/app/models/tecnologia';
import { TecnologiasService } from 'src/app/services/tecnologias.service';
import { Entrevista } from '../../models/entrevista';

@Component({
  selector: 'app-crear-entrevistas',
  templateUrl: './crear-entrevistas.component.html',
  styleUrls: ['./crear-entrevistas.component.css'],
  providers:[UsuariosService, EntrevistasService, TecnologiasService]
})
export class CrearEntrevistasComponent implements OnInit {


  
  public title: string;
  public tipoEntrevista = ['Presencial','Telefónica','Remota'];
  public tecnologias: Array<Tecnologia>;
  public updEntrevista: Entrevista;
  public headers = ["id", "name", "username", "email"];
  public rows: any;
  public tecnoFilter: any;
  datos: any;
  private valor: number;
  private fechaCita: Date;
  
  constructor(private _usuariosService: UsuariosService, 
              private _entrevistasService: EntrevistasService,
              private _tecnologias: TecnologiasService) { 
    this.title = "Crear Entrevistas";
     
  }

  GuardarDatos(){

    let dateString = '2020-03-18T00:00:00' 
    let newDate = new Date(dateString);
    
    this.updEntrevista = new Entrevista(3,"Paco1 ","Presencial",newDate,"4:00 p.m.");

    this.guardarDatosBd(this.updEntrevista);
    console.log(this.updEntrevista);

    console.log('Datos guardados');
  }

  llenarTabla()
  {
    this._usuariosService.getUsuarios().subscribe(
      result => {
        this.rows = result;
        console.log('Datos en pantalla');
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  guardarDatosBd(dato: any)
  {
    this._entrevistasService.createEntrevista(this.updEntrevista).subscribe(
      response => {
      console.log(response);
      },
      error =>{
      console.log(<any>error);
    });
  }

  ngOnInit() {
    this.tecnologias = this._tecnologias.getTecnologias();

    //this.llenarTabla();
  }

  filtrarTecnologia(tecno: string) {
    this.tecnoFilter = this.tecnologias.filter((filtrar => {if (filtrar.Tipo == tecno) return filtrar }));
  }

  filtrarUsuariosParImpar(id: number) {

    alert(id);
    this.valor = id%2;

    alert(this.valor);


  }
}
