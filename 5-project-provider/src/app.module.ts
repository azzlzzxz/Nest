import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'app_service',
      useClass: AppService,
    },
    {
      provide: 'person',
      useValue: {
        name: 'John',
        age: 25,
      },
    },
    {
      provide: 'person2',
      useFactory: () => {
        return {
          name: 'alen',
          age: 15,
        };
      },
    },
    {
      provide: 'person3',
      useFactory: (person: { name: string }, appService: AppService) => {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', 'app_service'],
    },
    {
      provide: 'person4',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        return {
          name: 'aaa',
          desc: 'ccc',
        };
      },
    },
    {
      provide: 'person5',
      useExisting: 'person2',
    },
  ],
})
export class AppModule {}
