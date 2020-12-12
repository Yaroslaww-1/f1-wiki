import { Pool } from 'pg';

export class BaseRepository {
  constructor(private readonly _pool: Pool) {}

  async query<T>(query: string, values?: unknown[]): Promise<T[]> {
    const connection = await this._pool.connect();
    const result = await connection.query(query, values);
    connection.release();
    return result.rows as T[];
  }
}
