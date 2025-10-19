import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { UserDTO } from './dtos/user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly supabase: SupabaseService) {}

  async login({ email, password }: UserDTO) {
    if (!email || !password) {
      return 'requried';
    }
    const { data, error } = await this.supabase.client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.code === 'invalid_credentials') {
        throw new UnauthorizedException('Invalid email or password');
      }

      // fallback for other Supabase auth errors
      throw new BadRequestException(error.message || 'Authentication failed');
    }

    return data;
  }
}
