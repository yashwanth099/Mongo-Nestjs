import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TaskDto } from "./Dto/task.dto";
import { Task, TaskDocument } from "./schema/task.schema";
import { ApiResponseDto } from "./Dto/apiResponse.dto";

@Injectable()
export class  TodoService{

    
    constructor(@InjectModel(Task.name)private readonly taskModel:Model<TaskDocument>){}
 

    async createTask(task:TaskDto){
        const taskObj = new this.taskModel(task);
          // const createTask = await taskObj.save();
         const resp =  await this.taskModel.find();
         
           return new ApiResponseDto({
            statusCode: 201,
            message :'Succesfully Created the task',
             data: resp
        }) 
      }

      async updateTask(task:TaskDto,response){
  const res  = await this.taskModel.updateOne(
        {name:task.name},
        {$set:{taskStatus:task.taskStatus},
      }
       )
       console.log(task);
      //  return new ApiResponseDto({
      //   statusCode:201,
      //   message:'Succefullly updated the status'
      //  });
       response.status(201).json(new ApiResponseDto({
        statusCode:201,
        message:'Succefullly updated the status'
       }));
      //  res.status(apiResponse.statusCode).json(apiResponse);
      }
}