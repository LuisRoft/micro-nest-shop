import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private userClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private productClient: ClientProxy,
    @Inject('ORDER_SERVICE') private orderClient: ClientProxy,
  ) {}

  @Get('users')
  async getUsers() {
    const users = await lastValueFrom(this.userClient.send('findAllUsers', {}));
    return users;
  }

  @Post('products')
  createProduct(@Body() product: any) {
    return this.productClient.emit('createProduct', product);
  }

  @Get('orders/:userId')
  getOrders(@Param('userId') userId: string) {
    return this.orderClient.emit('findOneOrder', { userId });
  }
}
