/* eslint-disable @typescript-eslint/no-explicit-any */
import dotenv from "dotenv";
import fs from "fs";
import { PropertyNamesOnly } from "@dotup/dotup-ts-types";

class AppConfig {

  PORT: number;
  NODE_ENV: string;
  APP_NAME: string;
  LOG_LEVEL: string; // "error" : "debug"
  constructor(
  ) {
    console.info("Loading app configuration.");
    if (fs.existsSync(".env")) {
      console.debug("Using .env file to supply config environment variables");
      dotenv.config({ path: ".env" });
    } else {
      console.warn("No .env file found.");
    }

    this.setConfig("APP_NAME", "node-ts-starter");
    this.setConfig("PORT", 10002);
    this.setConfig("NODE_ENV", "dev");
    this.setConfig("LOG_LEVEL", "debug");
  }

  setConfig<K extends keyof AppConfig>(key: PropertyNamesOnly<AppConfig>, value?: AppConfig[K]): void {
    // setConfig<K extends keyof AppConfig>(key: K, value: AppConfig[K]): void {
    //this[key] = value
    if (process.env[key]) {
      value = process.env[key] as AppConfig[K];
    }
    // this.write(this, key, value as any);
    (this[key] as any) = value;
  }

  write<K extends keyof AppConfig>(arg: AppConfig, key: K, value: AppConfig[K]): void {
    arg = this;
    arg[key] = value;
  }

}

export default new AppConfig();
