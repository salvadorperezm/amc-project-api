import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request } from './entities/request.entity';

import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestsService {
  constructor(@InjectModel(Request) private requestModel: typeof Request) {}

  create(createRequestDto: CreateRequestDto) {
    return this.requestModel.create({ ...createRequestDto });
  }

  async findLast() {
    return this.requestModel.findOne({
      order: [['createdAt', 'DESC']],
    });
  }
}
