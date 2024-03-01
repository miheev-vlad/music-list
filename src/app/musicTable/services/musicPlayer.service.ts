import { Injectable } from '@angular/core';
import { MusicInterface } from '../types/music.interface';

@Injectable()
export class MusicPlayerService {
  private _currentMusic: MusicInterface = {
    id: '',
    title: '',
    fileName: '',
    url: '',
  };
  private _musicList: MusicInterface[] = [];

  get currentMusic(): MusicInterface {
    return this._currentMusic;
  }

  set currentMusic(currentMusic: MusicInterface) {
    this._currentMusic = currentMusic;
  }

  get musicList(): MusicInterface[] {
    return this._musicList;
  }

  set musicList(musicList: MusicInterface[]) {
    this._musicList = musicList;
  }
}
