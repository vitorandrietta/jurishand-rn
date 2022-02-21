import { enablePromise } from 'react-native-sqlite-storage';
// import * as dotenv from 'dotenv';

import { DAOs } from '~/services/database/DAO';

export const initTables = async (): Promise<void> => {
  await Promise.all(DAOs.map((table) => table.init()));
};
enablePromise(true);
