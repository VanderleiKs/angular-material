import { HttpClient } from '@angular/common/http';
import { Injectable, inject, input } from '@angular/core';
import { Book } from './listagem/Book';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  

  getAllBooks(){
    return this.http.get<Book[]>('http://localhost:3000/books')
  }
}
