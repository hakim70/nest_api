import { Controller, Get, Post,Param,Delete } from "@nestjs/common";
import { BookServes } from "./book.serves";

@Controller("book")
export class BookController {
    constructor(private bookService: BookServes) {}

    @Get()
    affiche() {
        return this.bookService.affiche();
    }
    @Get(':id')
    affichebyid(@Param('id')id: number) {
        return this.bookService.findById(id);
    }


    @Post(':title')
    create(@Param('title') title: string) {
      return this.bookService.create(title);
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
    return this.bookService.delete(id);
  }
}
