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
import { UploadResolver } from './upload/upload.resolver';
import { KanbanCardModule } from './kanban-card/kanban-card.module';
import { KanbanColumnModule } from './kanban-column/kanban-column.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      subscriptions: {
        'graphql-ws': {
          path: '/graphql'
        },
      }
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    CompanyModule,
    UserModule,
    SoundfileModule,
    PhonelistModule,
    KanbanCardModule,
    KanbanColumnModule
  ],
  controllers: [AppController],
  providers: [AppService, UploadResolver],
})
export class AppModule { }
