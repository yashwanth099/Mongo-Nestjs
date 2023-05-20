import { Body, Controller, Get, HttpCode, Post, Put, Res } from "@nestjs/common"
import { TodoService } from "./todo.service";
import { TaskDto } from "./Dto/task.dto";
import { response } from "express";

@Controller('task')
export class TodoController{

    constructor(private readonly toDoService:TodoService){}

    // @HttpCode(201)
    @Post('createTask')
    async createTask(@Body() task:TaskDto){
        console.log(task);
        // res.status(200)
        return this.toDoService.createTask(task);
    }

    @Put('updateTask')
    async updateTask(@Body() task:TaskDto,@Res() response){
    
        return this.toDoService.updateTask(task,response);
    }


}