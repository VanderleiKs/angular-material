import { Component, input } from '@angular/core';
import { MatTableModule} from '@angular/material/table'
import { Book } from './Book';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [MatTableModule, AsyncPipe],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {
  books = input<Book[]>([]);

  colunsView = ['id', 'name']

  click(){
    console.log('clicou')
  }

}
