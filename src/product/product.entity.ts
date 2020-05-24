import { Entity, PrimaryGeneratedColumn, Column,  OneToMany } from "typeorm";
import { OrderItem } from "src/orderitem/orderitem.entity";

@Entity("product")
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'code', type: 'varchar', length: '10' })
    code: string;

    @Column({ name: 'name', type: 'varchar', length: '60' })
    name: string;

    @Column({ name: 'price', type: 'numeric', precision: 15, scale: 3 })
    price: number;

    @Column({ name: 'stockQuantity', type: 'numeric', precision: 15, scale: 3 })
    stockQuantity: number;

    @OneToMany(type => OrderItem, orderitem => orderitem.product)
    orderitem: OrderItem;
}