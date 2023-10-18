import { Injectable, Patch, Delete, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuidv4 } from 'uuid'


@Injectable()
export class ProductService {
  private products: {
    id: string
    name: string
  }[]=[];

  create(name: string) {
    this.products.push({
      id: uuidv4(),
      name
    });
  }

  getAll() {
    return this.products
  }

 
  borrarData(id: string): any {
    return this.products =  this.products.filter((product)=>product.id !== id);
  }

  
  actualizarProducto(@Param('id') id: string, @Body() { name }: { name: string }): any {
   return this.products = this.products.map((product) => {
      if (product.id === id) {
        product.name = name
      }
      return product
    })
  }
}
