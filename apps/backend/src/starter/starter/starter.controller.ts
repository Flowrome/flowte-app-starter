import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

@Controller('api')
export class StarterController {
  @Get('hello')
  @ApiQuery({ name: 'name', required: true, example: 'romeo', type: String })
  hello(@Query('name') name: string): string {
    return `Hello ${name}`;
  }
}
