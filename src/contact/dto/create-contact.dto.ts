import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  phone: number;
  @ApiProperty()
  age: number;
}
