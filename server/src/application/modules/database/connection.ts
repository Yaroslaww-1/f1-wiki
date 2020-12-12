import { Pool } from 'pg';
import DatabaseConfig from '@config/database.config';

const pool = new Pool(DatabaseConfig);

export const connection = pool;
