import { Module } from '@nestjs/common'
import { ConfigCommand } from '../commands/config.command'
import { configModule } from './config.module'

@Module({
  imports: [configModule],
  providers: [ConfigCommand],
})
export class CliModule {}
