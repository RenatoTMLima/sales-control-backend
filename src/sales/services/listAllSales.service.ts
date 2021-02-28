import { Injectable } from '@nestjs/common';
import { Sale } from '../models/sale.model';
import { SalesRepository } from '../repository/sales.repository';

@Injectable()
export class ListAllSalesService {
  constructor(private salesRepository: SalesRepository) {}

  async listAllSales(): Promise<Sale[]> {
    return await this.salesRepository.findAllSales();
  }
}
