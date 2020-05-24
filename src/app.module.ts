import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "src/customer/customer.entity";
import { OrderItem } from "src/orderitem/orderitem.entity";
import { Order } from "src/order/order.entity";
import { Product } from "src/product/product.entity";
import { CustomerController } from "src/customer/customer.controller";
import { OrderController} from "src/order/order.controller";
import { ProductController} from "src/product/product.controller";
import { ProductService} from "src/product/product.service";
import { OrderService} from "src/order/order.service";
import { CustomerService} from "src/customer/customer.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'prova1',
      entities: [
        Customer,
        OrderItem,
        Order,
        Product
      ],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([
      Customer,
      OrderItem,
      Order,
      Product
    ])
  ],
  controllers: [CustomerController, OrderController, ProductController],
  providers: [CustomerService, OrderService, ProductService],
})
export class AppModule {}
