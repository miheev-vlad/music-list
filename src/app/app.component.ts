import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicTableModule } from './musicTable/musicTable.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
