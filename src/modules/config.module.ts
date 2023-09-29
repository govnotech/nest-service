import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'

const { env } = process

export const config = () => ({
  port: Number(env.PORT),
})

export const configModule = ConfigModule.forRoot({
  load: [config],
  isGlobal: true,
  validationSchema: Joi.object({
    PORT: Joi.number().default('3000'),
  }),
})
