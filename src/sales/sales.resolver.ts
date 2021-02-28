import { Resolver, Query, Mutation, Args, Int, Float } from '@nestjs/graphql';
import { Sale } from './models/sale.model';
import { InsertNewSaleService } from './services/insertNewSale.service';
import { ListAllSalesService } from './services/listAllSales.service';

@Resolver((of) => Sale)
export class SalesResolver {
  constructor(
    private listAllSalesService: ListAllSalesService,
    private insertNewSaleService: InsertNewSaleService,
  ) {}

  @Query((returns) => [Sale])
  async listAllSales() {
    return await this.listAllSalesService.listAllSales();
  }

  @Mutation((returns) => Sale)
  async insertNewSale(
    @Args({ name: 'name' }) name: string,
    @Args({ name: 'value', type: () => Float }) value: number,
    @Args({ name: 'seats', type: () => Int }) seats: number,
    @Args({ name: 'saleDate' }) saleDate: string,
  ) {
    return await this.insertNewSaleService.insertNewSale({
      name,
      value,
      seats,
      saleDate,
    });
  }
}
