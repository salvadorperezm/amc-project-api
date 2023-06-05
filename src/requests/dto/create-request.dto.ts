import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsNotEmpty()
  @IsString()
  valueOne: string;

  @IsNotEmpty()
  @IsString()
  valueTwo: string;

  @IsNotEmpty()
  @IsString()
  valueThree: string;
}
