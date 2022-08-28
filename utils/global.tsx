import { Pool } from "oracledb";

declare global {
  var pool: Pool;
}

export {};
