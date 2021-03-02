import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Sale {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => Int)
  @Column('int')
  seats: number;

  @Field((type) => Float)
  @Column('real')
  value: number;

  @Field()
  @Column()
  saleDate: string;
}
