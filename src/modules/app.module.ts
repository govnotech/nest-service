import { Module } from '@nestjs/common'
import { configModule } from './config.module'

@Module({
  imports: [configModule],
})
export class AppModule {}
