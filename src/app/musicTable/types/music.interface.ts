export interface MusicInterface {
  id: string;
  title: string;
  fileName: string;
  url: string;
}

export interface Music {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: Updated;
  rights: Rights2;
  title: Title2;
  icon: Icon;
  link: Link3[];
  id: Id2;
}

export interface Author {
  name: Name;
  uri: Uri;
}

export interface Name {
  label: string;
}

export interface Uri {
  label: string;
}

export interface Entry {
  'im:name': ImName;
  'im:image': ImImage[];
  'im:collection': ImCollection;
  'im:price': ImPrice;
  'im:contentType': ImContentType3;
  rights: Rights;
  title: Title;
  link: Link2[];
  id: Id;
  'im:artist': ImArtist;
  category: Category;
  'im:releaseDate': ImReleaseDate;
}

export interface ImName {
  label: string;
}

export interface ImImage {
  label: string;
  attributes: Attributes;
}

export interface Attributes {
  height: string;
}

export interface ImCollection {
  'im:name': ImName2;
  link: Link;
  'im:contentType': ImContentType;
}

export interface ImName2 {
  label: string;
}

export interface Link {
  attributes: Attributes2;
}

export interface Attributes2 {
  rel: string;
  type: string;
  href: string;
}

export interface ImContentType {
  'im:contentType': ImContentType2;
  attributes: Attributes4;
}

export interface ImContentType2 {
  attributes: Attributes3;
}

export interface Attributes3 {
  term: string;
  label: string;
}

export interface Attributes4 {
  term: string;
  label: string;
}

export interface ImPrice {
  label: string;
  attributes: Attributes5;
}

export interface Attributes5 {
  amount: string;
  currency: string;
}

export interface ImContentType3 {
  'im:contentType': ImContentType4;
  attributes: Attributes7;
}

export interface ImContentType4 {
  attributes: Attributes6;
}

export interface Attributes6 {
  term: string;
  label: string;
}

export interface Attributes7 {
  term: string;
  label: string;
}

export interface Rights {
  label: string;
}

export interface Title {
  label: string;
}

export interface Link2 {
  attributes: Attributes8;
  'im:duration'?: ImDuration;
}

export interface Attributes8 {
  rel: string;
  type: string;
  href: string;
  title?: string;
  'im:assetType'?: string;
}

export interface ImDuration {
  label: string;
}

export interface Id {
  label: string;
  attributes: Attributes9;
}

export interface Attributes9 {
  'im:id': string;
}

export interface ImArtist {
  label: string;
  attributes: Attributes10;
}

export interface Attributes10 {
  href: string;
}

export interface Category {
  attributes: Attributes11;
}

export interface Attributes11 {
  'im:id': string;
  term: string;
  scheme: string;
  label: string;
}

export interface ImReleaseDate {
  label: string;
  attributes: Attributes12;
}

export interface Attributes12 {
  label: string;
}

export interface Updated {
  label: string;
}

export interface Rights2 {
  label: string;
}

export interface Title2 {
  label: string;
}

export interface Icon {
  label: string;
}

export interface Link3 {
  attributes: Attributes13;
}

export interface Attributes13 {
  rel: string;
  type?: string;
  href: string;
}

export interface Id2 {
  label: string;
}
