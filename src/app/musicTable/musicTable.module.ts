import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MusicTableComponent } from './components/musicTable/musicTable.component';
import { MusicService } from './services/music.service';
import { MusicDataSourceService } from './services/music.dataSource.service';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MusicPlayerComponent } from './components/musicPlayer/musicPlayer.component';
import { MusicPlayerService } from './services/musicPlayer.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
  ],
  declarations: [MusicTableComponent, MusicPlayerComponent],
  exports: [MusicTableComponent],
  providers: [MusicService, MusicDataSourceService, MusicPlayerService],
})
export class MusicTableModule {}
