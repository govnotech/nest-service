import type { Path, PathValue } from '@nestjs/config'
import type { config } from '../src/modules/config.module'

declare module '@nestjs/config' {
  export class ConfigService<K = ReturnType<typeof config>> {
    get<T = K, P extends Path<T> = any, R = PathValue<T, P>>(propertyPath: P): R
  }
}
