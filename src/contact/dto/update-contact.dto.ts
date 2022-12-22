import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @ApiProperty()
  name: string;
  @ApiProperty()
  phone: number;
  @ApiProperty()
  age?: number;
}
