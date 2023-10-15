import { Injectable } from "@nestjs/common";

@Injectable()
export class BookServes {
  
    private data = [
        { id:1, title: 'ja3far'},
        { id:2, title: 'tunis'},
        { id:3, title: 'ja7eth'},
    ];

  affiche() {
    return this.data;
  }

  findById(id: number) {
    const bookId = parseInt(id as any, 10);
    return this.data.find(book => book.id === bookId);
}

  
  create(title: string) {
    const newBook = { id: this.generateUniqueId(), title };
    this.data.push(newBook);
    return newBook;
    }
    delete(id: number) {
        const bookId = parseInt(id as any, 10);
        this.data = this.data.filter(book => book.id !== bookId);
        return this.data;}
        
    private generateUniqueId(): number {
        const maxId = this.data.reduce((max, book) => (book.id > max ? book.id : max), 0);
        return maxId + 1;
    }
}
