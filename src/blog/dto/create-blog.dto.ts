import { IsString } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  createdDateUtc: string;

  @IsString()
  authorEmail: string;

  @IsString()
  message: string;
}
