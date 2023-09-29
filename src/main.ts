import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { AppModule } from './modules/app.module'
import { config } from './modules/config.module'

async function bootstrap() {
  const { port } = config()

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      options: {
        port,
      },
    },
  )

  await app.listen()
}

bootstrap()
