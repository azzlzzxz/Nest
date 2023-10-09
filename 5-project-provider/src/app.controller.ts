import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject(AppService) private readonly appService1: AppService;
  @Inject('app_service') private readonly appService: AppService;
  @Inject('person') private readonly person: { name: string; age: number };
  @Inject('person2') private readonly person2: { name: string; age: number };
  @Inject('person3') private readonly person3: {
    name: string;
    desc: string;
  };
  @Inject('person4') private readonly person4: {
    name: string;
    desc: string;
  };
  @Inject('person5') private readonly person5: {
    name: string;
    age: number;
  };

  // constructor(
  //   @Inject('app_service') private readonly appService: AppService,
  //   @Inject('person') private readonly person: { name: string; age: number },
  //   @Inject('person2') private readonly person2: { name: string; age: number },
  //   @Inject('person3')
  //   private readonly person3: { name: string; age: number; desc: string },
  // ) {}

  @Get()
  getHello(): string {
    console.log(this.appService1);
    console.log(this.person);
    console.log(this.person2);
    console.log(this.person3);
    console.log(this.person4);
    console.log(this.person5);
    return this.appService.getHello();
  }
}
