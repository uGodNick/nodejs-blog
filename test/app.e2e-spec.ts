import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateBlogDto } from 'src/blog/dto/create-blog.dto';
jest.useFakeTimers();

const testBlogDto: CreateBlogDto = {
  createdDateUtc: new Date().toISOString().slice(0, 19).replace('T', ' '),
  authorEmail: 'author@email.com',
  message: 'message',
};

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/blog/create (POST)', () => {
    return request(app.getHttpServer())
      .post('/blog/create')
      .send(testBlogDto)
      .expect(201);
  });
});
