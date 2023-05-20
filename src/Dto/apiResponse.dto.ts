export class ApiResponseDto <T>{

    statusCode : number;
    message:string;
    data: T| null;
    constructor({statusCode=200,message = 'ok',data = null}: { statusCode?: number, message?: string, data?: T | null } = {}){
        this.statusCode = statusCode;
        this.message = message;
        if(data!=null){
            this.data = data
        }
        
    
    }
   
}