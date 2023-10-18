import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() {name}: CreateProductDto ) {
    return this.productService.create(name);
  }

  @Get()
  findAll() {
    return this.productService.getAll();
  }

  @Delete(':id')
  borrarData(@Param('id',ParseUUIDPipe) id: string){
    return this.productService.borrarData(id)
  }

  @Patch(':id')
  actualizarProducto(@Param('id', ParseUUIDPipe) id:string, @Body() { name }: UpdateProductDto) { 
    return this.productService.actualizarProducto(id,{name})
  }
}
