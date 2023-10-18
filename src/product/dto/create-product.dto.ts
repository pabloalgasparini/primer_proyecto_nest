import { IsString, IsNotEmpty } from 'class-validator'

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string
}   
