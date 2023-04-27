import { Body, Controller, Get, Post } from "@nestjs/common"
import { TodoService } from "./todo.service";
import { TaskDto } from "./Dto/task.dto";

@Controller('task')
export class TodoController{

    constructor(private readonly toDoService:TodoService){}


    @Post('createTask')
    async createTask(@Body() task:TaskDto){
        console.log(task);
        return this.toDoService.createTask(task);
    }

}