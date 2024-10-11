import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot(
      'mongodb+srv://igiranezaj28:Cmnder%2F09@nodejstut.djz3xrv.mongodb.net/taskApp?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
