import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('admin/user')
export class UserController {
    constructor(private readonly adminUser:UserService) {}


    @Get()
    sayHi(){
        return this.adminUser.sayHi()
    }
}
