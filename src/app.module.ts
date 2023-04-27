import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schema/task.schema';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://saiyashdev:cricket90@cluster99.j5ueh37.mongodb.net/test'),
    MongooseModule.forFeature([
      {name : Task.name,schema:TaskSchema}
    ])
  ],
  controllers: [AppController,TodoController],
  providers: [AppService,TodoService],
})
export class AppModule {}
