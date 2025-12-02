import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { Repository } from 'typeorm';
import { TagEntity } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}
  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }
}
