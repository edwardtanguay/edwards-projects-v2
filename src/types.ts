export interface Category {
  idCode: string;
  shortInfo: string;
}

export interface Project {
  suuid: string;
  idCode: string;
  title: string;
  status: string;
  mode: string;
  repo: string;
  live: string;
  mainImage: string;
  categories: Category[];
}
