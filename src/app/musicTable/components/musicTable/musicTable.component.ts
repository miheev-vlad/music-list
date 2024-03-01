import { Component, OnInit } from '@angular/core';
import { MusicDataSourceService } from '../../services/music.dataSource.service';
import { MusicPlayerService } from '../../services/musicPlayer.service';

@Component({
  selector: 'music-table',
  templateUrl: './musicTable.component.html',
  styleUrls: ['./musicTable.component.css'],
})
export class MusicTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'fileName'];
  fetchLimit: number = 4;
  musicIndex: string | null = null;

  constructor(
    private musicDataSourceService: MusicDataSourceService,
    public musicPlayerService: MusicPlayerService
  ) {}

  ngOnInit(): void {
    this.musicDataSourceService
      .getMusicDataSource(this.fetchLimit)
      .subscribe((musicList) => {
        this.musicPlayerService.musicList = musicList;
      });
  }

  onPlay(index: string): void {
    this.musicIndex = index;
  }
}
