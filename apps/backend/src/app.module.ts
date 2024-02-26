import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule, Routes } from '@nestjs/core';
import { StarterModule } from './starter/starter.module';
import { AppController } from './app.controller';

const routes: Routes = [
  {
    path: 'starter',
    module: StarterModule,
  },
];

@Module({
  imports: [
    ConfigModule.forRoot(),
    StarterModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
})
export class AppModule {}
