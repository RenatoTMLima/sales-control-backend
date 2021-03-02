import { Injectable } from '@nestjs/common';
import { ICreateNewSale } from '../dtos/ICreateNewSale';
import { Sale } from '../models/sale.model';
import { SalesRepository } from '../repository/sales.repository';

@Injectable()
export class InsertNewSaleService {
  constructor(private salesRepository: SalesRepository) {}

  async insertNewSale(salesData: ICreateNewSale): Promise<Sale> {
    return await this.salesRepository.insertNewSale(salesData);
  }
}
