/*
 * @Author: xinxu
 * @Date: 2023-06-06 10:33:34
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-07 14:57:49
 * @FilePath: /Nest/2-project-5http/test/app.e2e-spec.ts
 */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
