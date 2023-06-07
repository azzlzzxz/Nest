/*
 * @Author: xinxu
 * @Date: 2023-06-06 10:34:29
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-06 11:22:28
 * @FilePath: /Nest/project-2-nest/src/person/person.module.ts
 */
import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
