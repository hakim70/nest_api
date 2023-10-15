import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookServes } from "./book/book.serves";
import { BookController } from './book/book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookServes],
})

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
