import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Customer } from "src/customer/customer.entity";
import { OrderItem } from "src/orderitem/orderitem.entity";

@Entity("order")
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'order_number', type: 'varchar', length: '8' })
    orderNumber: string;

    @Column({ name: 'order_date', type: 'date' })
    orderDate: Date;

    @Column({ name: 'total', type: 'numeric', precision: 15, scale: 3 })
    total: number;

    @ManyToOne(type => Customer, customer => customer.order)
    customer: Customer;

    @OneToMany(type => OrderItem, orderitem => orderitem.order, { cascade: true, eager: true })
    orderitems: OrderItem[];
}