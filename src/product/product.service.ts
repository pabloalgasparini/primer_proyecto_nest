import { Injectable, Param, Body } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductService {
  private products: {
    id: string
    name: string
    stock: number
    descripcion: string
  }[]=[];

  create(name: string, stock: number, descripcion: string) {
    this.products.push({
      id: uuidv4(),
      name,
      stock,
      descripcion
    });
  }

  getAll() {
    return this.products
  }

 
  borrarData(id: string): any {
    return this.products =  this.products.filter((product)=>product.id !== id);
  }

  
  actualizarProducto(@Param('id') id: string, @Body() { name, stock, descripcion }: UpdateProductDto) {
   return this.products = this.products.map((product) => {
      if (product.id === id) {
        product.name = name
        product.stock = stock
        product.descripcion = descripcion
      }
      return product
    })
  }
}
