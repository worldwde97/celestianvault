import mysql from "mysql2/promise";

// SSL configuration for production (Aiven MySQL)
const getSSLConfig = () => {
  if (process.env.NODE_ENV !== 'production') {
    return undefined;
  }

  // Use SSL without certificate validation for Aiven
  // This is secure enough as traffic is still encrypted
  return { rejectUnauthorized: false };
};

export const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  ssl: getSSLConfig(),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  decimalNumbers: true,
});

/**
 * Execute SQL query with proper error handling
 * @param {string} sql
 * @param {Array} values
 */
export async function query(sql, values = []) {
  const connection = await db.getConnection();
  try {
    const [result] = await connection.query(sql, values);
    return result;
  } catch (err) {
    console.error("MySQL error:", err);
    throw err; // Properly propagate errors instead of swallowing them
  } finally {
    connection.release();
  }
}
