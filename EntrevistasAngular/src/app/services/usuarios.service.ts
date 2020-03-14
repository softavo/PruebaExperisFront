import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuariosService{

    public apiUrl: string;

    httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})} 
    
    constructor(public _http: HttpClient)
    {
        this.apiUrl="http://jsonplaceholder.typicode.com/users";
    }

    getUsuarios(): Observable<any>
    {
        return this._http.get<Usuario>(this.apiUrl).pipe();
    }
}