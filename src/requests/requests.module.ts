import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { RequestsController } from './requests.controller';
import { Request } from './entities/request.entity';
import { RequestsService } from './requests.service';

@Module({
  imports: [SequelizeModule.forFeature([Request])],
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}
