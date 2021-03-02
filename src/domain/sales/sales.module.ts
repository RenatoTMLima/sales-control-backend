import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './models/sale.model';
import { SalesRepository } from './repository/sales.repository';
import { SalesResolver } from './sales.resolver';
import { ListAllSalesService } from './services/listAllSales.service';
import { InsertNewSaleService } from './services/insertNewSale.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  providers: [
    SalesRepository,
    ListAllSalesService,
    InsertNewSaleService,
    SalesResolver,
  ],
})
export class SalesModule {}
