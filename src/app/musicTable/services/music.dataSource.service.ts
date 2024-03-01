import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MusicInterface } from '../types/music.interface';
import { MusicService } from './music.service';

@Injectable()
export class MusicDataSourceService {
  constructor(private musicService: MusicService) {}

  getMusicDataSource(limit: number): Observable<MusicInterface[]> {
    return this.musicService.fetchMusic(limit).pipe(
      map((music) =>
        music.feed.entry.map((feedItem) => ({
          id: feedItem.id.attributes['im:id'],
          title: feedItem['im:name'].label,
          fileName: this.getFileName(feedItem.link[1].attributes.href),
          url: feedItem.link[1].attributes.href,
        }))
      )
    );
  }

  getFileName(inputHref: string): string {
    const inputHrefSlitArr = inputHref.split('/');
    return inputHrefSlitArr[inputHrefSlitArr.length - 1];
  }
}
