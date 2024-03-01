import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../types/music.interface';

@Injectable()
export class MusicService {
  constructor(private http: HttpClient) {}

  fetchMusic(limit: number = 3): Observable<Music> {
    return this.http.get<Music>(
      `https://itunes.apple.com/gb/rss/topsongs/limit=${limit}/json`
    );
  }
}
