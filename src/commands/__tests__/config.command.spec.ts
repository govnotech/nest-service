import { Test } from '@nestjs/testing'
import { config, configModule } from '../../modules/config.module'
import { ConfigCommand } from '../config.command'

describe(ConfigCommand.name, () => {
  let configCommand: ConfigCommand

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      imports: [configModule],
      providers: [ConfigCommand],
    }).compile()

    configCommand = app.get(ConfigCommand)
    jest.spyOn(configCommand['logger'], 'log').mockImplementation(jest.fn)
  })

  it('should be defined', () => {
    expect(configCommand).toBeDefined()
  })

  it('should log current config', () => {
    configCommand.run()
    expect(configCommand['logger'].log).toHaveBeenCalledWith(config())
  })
})
