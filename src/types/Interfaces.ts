export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URL: string;
      ENV: "test" | "dev" | "prod";
      JWT_SECRET: string;
      JWT_LIFETIME: string;
    }
  }
}
