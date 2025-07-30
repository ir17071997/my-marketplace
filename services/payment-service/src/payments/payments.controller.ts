import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment, PaymentStatus } from './payment.entity';

class CreatePaymentDto {
  orderId: string;
  amount: number;
  currency: string;
}

class UpdatePaymentDto {
  status?: PaymentStatus;
  transactionId?: string;
}

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Get()
  findAll(): Promise<Payment[]> {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Payment> {
    return this.paymentsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePaymentDto): Promise<Payment> {
    const { orderId, amount, currency } = dto;
    return this.paymentsService.create(orderId, amount, currency);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePaymentDto,
  ): Promise<Payment> {
    return this.paymentsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.paymentsService.remove(id);
  }
}