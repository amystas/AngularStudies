export class NewsResponse {
    constructor(public news: SingleNews[]) {}
  }
export class SingleNews {
    constructor(
      public author: string,
      public headline: string,
      public body: string
    ) {}
  }