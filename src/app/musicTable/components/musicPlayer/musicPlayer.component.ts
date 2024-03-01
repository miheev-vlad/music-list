import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MusicPlayerService } from '../../services/musicPlayer.service';

@Component({
  selector: 'music-player',
  templateUrl: './musicPlayer.component.html',
  styleUrls: ['./musicPlayer.component.css'],
})
export class MusicPlayerComponent implements OnChanges {
  @Input() musicLimit: number = 0;
  @Input() musicIndex: string | null = null;

  audio = new Audio();
  trackPointer: number = 0;
  volumeLevel = 12;
  volumeLevelMax = 16;

  @Output() onPlay = new EventEmitter<void>();

  constructor(public musicPlayerService: MusicPlayerService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['musicIndex'].currentValue) {
      this.play();
    }
  }

  play(): void {
    if (this.audio.paused) {
      if (this.audio.readyState === 0) {
        this.trackPointer = 0;
        this.musicPlayerService.currentMusic =
          this.musicPlayerService.musicList[0];
        this.audio.src = this.musicPlayerService.currentMusic.url;
      }
      this.audio.play();
    } else {
      this.musicPlayerService.currentMusic =
        this.musicPlayerService.musicList.find(
          (music) => music.id === this.musicIndex
        )!;
      this.trackPointer = this.musicPlayerService.musicList.indexOf(
        this.musicPlayerService.currentMusic
      );
      this.audio.src = this.musicPlayerService.currentMusic.url;
      this.audio.play();
    }
  }

  prev(): void {
    this.trackPointer--;
    this.musicPlayerService.currentMusic =
      this.musicPlayerService.musicList[this.trackPointer];
    this.audio.src = this.musicPlayerService.currentMusic.url;
    this.audio.play();
  }

  next(): void {
    this.trackPointer++;
    this.musicPlayerService.currentMusic =
      this.musicPlayerService.musicList[this.trackPointer];
    this.audio.src = this.musicPlayerService.currentMusic.url;
    this.audio.play();
  }

  onChangeVolumeSlider(volumeLevel: any) {
    this.audio.volume = volumeLevel / this.volumeLevelMax;
  }

  stop() {
    this.audio.pause();
  }

  off() {
    this.volumeLevel = 0;
    this.audio.volume = 0;
  }
}
