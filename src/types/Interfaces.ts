export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URL: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
