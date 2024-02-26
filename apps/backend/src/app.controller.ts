import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('')
  hello(): { message: string } {
    return { message: `BE_VERSION: ${process.env.BE_VERSION}` };
  }
}
