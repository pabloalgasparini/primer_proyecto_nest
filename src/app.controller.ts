import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 private products = [
  {
    id: 1,
    nombre: 'Coca',
    precio: 600,
    stock: 6
  },
  {
    id:2,
    nombre: 'Fanta',
    precio: 500,
    stock: 12
  },
  {
    id: 3,
    nombre: 'Sprite',
    precio: 650,
    stock: 8
  }
 ]

 @Get('/all')
 getAllProducts() : any {
   return this.products;
 }

  
  @Get(':id')
  getProducts(@Param('id') id : number) : any {
    return this.products.find(product => product.id === +id);
  }

  @Post()
  sendData(@Body() datos): any {
    this.products = [...this.products, datos]
    return datos
  }

  @Delete(':id')
borrarData(@Param('id') id: number): any {
  const posicion = this.products.findIndex(product => product.id === +id);

  if (posicion !== -1) {
    const deletedProduct = this.products.splice(posicion, 1);
    return deletedProduct[0]; 
  } else {
    return { message: 'Producto no encontrado' };
  }
}

@Put(':id')
actualizarProducto(@Param('id') id: number, @Body() datos: any): any {
  const posicion = this.products.findIndex(product => product.id === +id);

  if (posicion !== -1) {
    this.products[posicion] = { ...this.products[posicion], ...datos };
    return this.products[posicion];
  } else {
    return { message: 'Producto no encontrado' };
  }
}

}
