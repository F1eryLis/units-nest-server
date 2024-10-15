import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { SoundfileModule } from './soundfile/soundfile.module';
import { PhonelistModule } from './phonelist/phonelist.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    CompanyModule,
    UserModule,
    SoundfileModule,
    PhonelistModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
