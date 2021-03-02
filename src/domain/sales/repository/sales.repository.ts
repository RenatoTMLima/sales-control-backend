import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreateNewSale } from '../dtos/ICreateNewSale';
import { Sale } from '../models/sale.model';

@Injectable()
export class SalesRepository {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
  ) {}

  async findOneSale(id: number): Promise<Sale> {
    return await this.salesRepository.findOne(id);
  }

  async findAllSales(): Promise<Sale[]> {
    return await this.salesRepository.find();
  }

  async insertNewSale(saleData: ICreateNewSale): Promise<Sale> {
    const newSale = this.salesRepository.create(saleData);

    await this.salesRepository.save(newSale);

    return newSale;
  }
}
