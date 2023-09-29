/**
 * See validation and default values in `src/modules/config.module.ts`
 */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string // numeric
    }
  }
}

export { }

