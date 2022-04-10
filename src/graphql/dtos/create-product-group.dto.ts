import { IsString, Length } from 'class-validator';

import { CreateProductGroupInput } from '@/types/resolvers-types';

export class CreateProductGroupDto implements CreateProductGroupInput {
  @IsString()
  @Length(2)
  companyName!: string;

  @IsString()
  @Length(2)
  productGroupName!: string;
}
