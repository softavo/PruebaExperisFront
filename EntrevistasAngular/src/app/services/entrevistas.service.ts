import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Entrevista } from '../models/entrevista';

@Injectable()
export class EntrevistasService{

    public apiUrl: string;

    httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})} 
    
    constructor(public _http: HttpClient)
    {
        this.apiUrl="https://entrevistasapiexperisult.azurewebsites.net/api";
    }

    getEntrevista(id): Observable<any> {
        return this._http.get<Entrevista>(this.apiUrl + '/entrevistas/' + id).pipe();
    }  

    getEntrevistas(): Observable<any>
    {
        return this._http.get<Entrevista>(this.apiUrl + '/entrevistas').pipe();
    }

    createEntrevista(entrevista): Observable<Entrevista> {
        return this._http.post<Entrevista>(this.apiUrl + '/entrevistas', 
        JSON.stringify(entrevista), this.httpOptions).pipe();
    }

    updateEntrevista(id, entrevista): Observable<Entrevista> {
        return this._http.put<Entrevista>(this.apiUrl + '/entrevista/' + id, 
        JSON.stringify(entrevista), this.httpOptions).pipe();
    }

    deleteEntrevista(id){
        return this._http.delete<Entrevista>(this.apiUrl + '/entrevista/' + id, 
        this.httpOptions).pipe();
    }
}