import { openDatabase } from 'react-native-sqlite-storage';

export const createTableQuery = (tableName: string, columns: string) =>
  `CREATE TABLE IF NOT EXISTS ${tableName}(${columns});`;

export const deleteById = (tableName: string, idColumnName: string, stringFieldIdValue: string) =>
  `DELETE from ${tableName} where ${idColumnName} = ${stringFieldIdValue}`;

export const selectRowsQuery = (tableName: string, columnNames: string[]) =>
  `SELECT ${columnNames.join(',')} FROM ${tableName}`;

export const insertValues = (
  tableName: string,
  columnNames: string[],
  columnStringValues: string[]
) => `INSERT INTO ${tableName} (${columnNames.join(',')}) VALUES (${columnStringValues.join(',')})`;

export class BaseDAO {
  public static init(): Promise<void> {
    return Promise.resolve();
  }
}

export const getDBConnection = async () => {
  return openDatabase({
    name: process.env.LOCAL_DB || 'localdb',
    location: 'default',
  });
};
