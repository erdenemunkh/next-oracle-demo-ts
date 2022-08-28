import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pool = await connectToDatabase();
  let conn = await pool.getConnection();
  try {
    console.log("*** Successfully connected to Oracle Database ***");
    res.json(pool.getStatistics());
  } catch (e) {
    console.error(e);
  } finally {
    await conn.close();
  }
}
