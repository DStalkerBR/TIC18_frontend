import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PigsService {

  constructor(private http : HttpClient) {}
  getPigs() {
    return this.http.get('https://suinapp-1c4a7-default-rtdb.firebaseio.com/pigs.json')
    .pipe(
      map (responseData => {
        const pigsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            pigsArray.push({ ...(responseData as { [key: string]: any })[key], id: key });
          }
        }
        return pigsArray;
      }),

      catchError(errorRes => {
      console.error('Erro na solicitação Http: ', errorRes);
      throw errorRes;
      })
    );
  }
} 
