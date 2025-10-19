import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('team/user')
export class UserController {
    constructor(private readonly teamUser:UserService) {}


    @Get()
    sayHi () {
        return this.teamUser.sayHi()
    }
}
