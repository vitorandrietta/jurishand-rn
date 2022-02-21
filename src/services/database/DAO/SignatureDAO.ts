import {
  BaseDAO,
  createTableQuery,
  deleteById,
  getDBConnection,
  insertValues,
  selectRowsQuery,
} from '~/services/database/utils';

type SignatureModel = {
  id: number;
};

export class SignatureDAO implements BaseDAO {
  static tableName: 'signature';

  public static async init() {
    const connection = await getDBConnection();
    await connection.executeSql(createTableQuery(this.tableName, 'ID  INT NOT NULL PRIMARY KEY'));
  }

  public static async getSignatures(fields: (keyof SignatureModel)[]): Promise<SignatureModel[]> {
    const signatures: SignatureModel[] = [];
    const connection = await getDBConnection();
    const queryResult = await connection.executeSql(selectRowsQuery(this.tableName, fields));
    queryResult.forEach((result) => {
      for (let index = 0; index < result.rows.length; index++) {
        signatures.push(result.rows.item(0));
      }
    });
    return signatures;
  }

  public static async deleteSignature(id: number) {
    const connection = await getDBConnection();
    await connection.executeSql(deleteById(this.tableName, 'id', `${id}`));
  }

  public static async insertSignature(signature: SignatureModel) {
    const connection = await getDBConnection();
    await connection.executeSql(
      insertValues(this.tableName, Object.keys(signature), Object.values(signature).map(String))
    );
  }
}
