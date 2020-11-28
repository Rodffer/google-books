export interface IBook {
  volumeInfo: {
    title: string;
    categories?: string[];
    publisher?: string;
    authors?: string[];
    description: string;
    infoLink: string;
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate?: string;
    pageCount: number;
  };
  id: string;
  totalItems: number;
}
