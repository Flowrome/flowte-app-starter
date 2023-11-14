import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { HelloAPIResponse } from './starter.interfaces';

@Controller()
export class StarterController {
  @Get('hello')
  @ApiQuery({ name: 'name', required: true, example: 'romeo', type: String })
  hello(@Query('name') name: string): HelloAPIResponse {
    return { message: `Hello ${name}` };
  }
}
