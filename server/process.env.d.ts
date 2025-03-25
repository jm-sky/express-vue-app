declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      APP_SECRET: string;
      DB_FILE_NAME: string;
      PORT?: string;
    }
  }
}

export {}
