declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URI: string;
      PAYLOAD_SECRET: string;
      NEXT_PUBLIC_SERVER_URL: string;
      CRON_SECRET: string;
      PREVIEW_SECRET: string;
      S3_REGION: string;
      S3_BUCKET: string;
      S3_ACCESS_KEY_ID: string;
      S3_SECRET_ACCESS_KEY: string;
      S3_ENDPOINT: string;
      R2_TOKEN: string;
      R2_PREFIX: string;
      RESEND_API: string;
      NEXT_PUBLIC_ENABLE_AUTOLOGIN: string;
      NEXT_PUBLIC_DUMMY_PASSWORD: string;
    }
  }
}

export {}
