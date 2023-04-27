import { Injectable } from '@nestjs/common';
import { TaskDto } from './Dto/task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schema/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  

  getHello(): string {
    return 'Hello World!';
  }

  
}
