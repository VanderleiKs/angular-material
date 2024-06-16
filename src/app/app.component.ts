import { Component, NgModule, OnInit, Renderer2, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AsyncPipe, NgClass } from '@angular/common';
import {ListagemComponent} from './listagem/listagem.component';
import { ApiService } from './api.service';
import { firstValueFrom, take } from 'rxjs';
import { Book } from './listagem/Book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, NgClass, ListagemComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  renderer = inject(Renderer2);
  api = inject(ApiService);
  title = 'material-angular';
  books: Book[] = []
  async ngOnInit() {
    this.books = await firstValueFrom(this.api.getAllBooks())
  }

  toggleTheme() {
    const theme = document.body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');
    this.renderer.addClass(document.body, theme);
  }
}

