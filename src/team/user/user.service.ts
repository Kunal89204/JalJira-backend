import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    sayHi(){
        return 'hi from team'
    }
}
