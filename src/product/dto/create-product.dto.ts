import { IsString, IsNotEmpty, IsInt } from 'class-validator'

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsInt()
    stock: number

    @IsNotEmpty()
    @IsString()
    descripcion: string
}   
