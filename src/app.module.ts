import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule as AdminUserModule } from './admin/user/user.module';
import { UserModule as TeamUserModule } from './team/user/user.module';
import { UserModule as ManagerUserModule } from './manager/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SupabaseModule,
    AuthModule,
    AdminUserModule,
    TeamUserModule,
    ManagerUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
