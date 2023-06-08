/*
 * @Author: xinxu
 * @Date: 2023-06-07 14:59:18
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-08 14:55:30
 * @FilePath: /Nest/3-project-nest-ioc/src/app.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // debugger;
    return this.appService.getHello();
  }
}
