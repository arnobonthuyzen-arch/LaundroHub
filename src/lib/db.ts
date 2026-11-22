import mysql, { type Pool, type ResultSetHeader } from "mysql2/promise";

declare global {
  // eslint-disable-next-line no-var
  var __mysqlPool: Pool | undefined;
}

function getPool(): Pool {
  if (!globalThis.__mysqlPool) {
    if (process.env.DATABASE_URL) {
      globalThis.__mysqlPool = mysql.createPool({
        uri: process.env.DATABASE_URL,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
    } else {
      globalThis.__mysqlPool = mysql.createPool({
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT || 3306),
        database: process.env.DB_NAME || "arno_mobula_Laundro",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        charset: "utf8mb4",
      });
    }
  }

  return globalThis.__mysqlPool;
}

let tableInitPromise: Promise<void> | null = null;

export async function ensureContactInquiriesTable(): Promise<void> {
  if (!tableInitPromise) {
    tableInitPromise = (async () => {
      const pool = getPool();
      await pool.execute(`
        CREATE TABLE IF NOT EXISTS contact_inquiries (
          id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          phone VARCHAR(50) NOT NULL,
          email VARCHAR(255) DEFAULT NULL,
          account_type VARCHAR(120) NOT NULL,
          service VARCHAR(150) NOT NULL,
          estimated_volume VARCHAR(150) NOT NULL,
          message TEXT DEFAULT NULL,
          status ENUM('new', 'contacted', 'quoted', 'archived') NOT NULL DEFAULT 'new',
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          PRIMARY KEY (id),
          INDEX idx_contact_inquiries_status (status),
          INDEX idx_contact_inquiries_created_at (created_at),
          INDEX idx_contact_inquiries_phone (phone)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
      `);
    })().catch((err) => {
      tableInitPromise = null;
      throw err;
    });
  }

  return tableInitPromise;
}

export interface ContactInquiryInput {
  name: string;
  phone: string;
  email?: string;
  accountType: string;
  service: string;
  estimatedVolume: string;
  message?: string;
}

export async function saveContactInquiry(
  data: ContactInquiryInput
): Promise<number> {
  await ensureContactInquiriesTable();
  const pool = getPool();

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO contact_inquiries
      (name, phone, email, account_type, service, estimated_volume, message)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      data.name,
      data.phone,
      data.email || null,
      data.accountType,
      data.service,
      data.estimatedVolume,
      data.message || null,
    ]
  );

  return result.insertId;
}

export { getPool };
