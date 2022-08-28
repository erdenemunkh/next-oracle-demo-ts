import oracledb, { Pool } from "oracledb";

export async function connectToDatabase(): Promise<Pool> {
  if (!global.pool) {
    console.log("******** No pool available, creating new pool. *********");
    global.pool = await oracledb.createPool({
      user: "dbuser",
      password: "dbuser",
      connectString: "localhost/xepdb1",
      // edition: 'ORA$BASE', // used for Edition Based Redefintion
      // events: false, // whether to handle Oracle Database FAN and RLB events or support CQN
      // externalAuth: false, // whether connections should be established using External Authentication
      // homogeneous: true, // all connections in the pool have the same credentials
      // poolAlias: 'default', // set an alias to allow access to the pool via a name.
      poolIncrement: 1, // only grow the pool by one connection at a time
      poolMax: 5, // maximum size of the pool. Increase UV_THREADPOOL_SIZE if you increase poolMax
      poolMin: 0, // start with no connections; let the pool shrink completely
      // poolPingInterval: 60, // check aliveness of connection if idle in the pool for 60 seconds
      // poolTimeout: 60, // terminate connections that are idle in the pool for 60 seconds
      // queueMax: 500, // don't allow more than 500 unsatisfied getConnection() calls in the pool queue
      // queueTimeout: 60000, // terminate getConnection() calls queued for longer than 60000 milliseconds
      // sessionCallback: initSession, // function invoked for brand new connections or by a connection tag mismatch
      // sodaMetaDataCache: false, // Set true to improve SODA collection access performance
      // stmtCacheSize: 30, // number of statements that are cached in the statement cache of each connection
      enableStatistics: true, // record pool usage for oracledb.getPool().getStatistics() and logStatistics()
    });
  }
  return global.pool;
}
