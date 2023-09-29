import { ConsoleLogger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Command, CommandRunner } from 'nest-commander'
import { config } from '../modules/config.module'

@Command({
  name: 'config',
  description: 'Configuration debug',
})
export class ConfigCommand extends CommandRunner {
  private readonly logger = new ConsoleLogger(ConfigCommand.name)

  constructor(private readonly configService: ConfigService) {
    super()
  }

  async run() {
    const data = config()
    const keys = Object.keys(data) as Array<keyof typeof data>
    const entries = keys.map(key => [key, this.configService.get(key)])

    this.logger.log(Object.fromEntries(entries))
  }
}
