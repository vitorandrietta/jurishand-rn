import { action, observable } from 'mobx';
import { initTables } from '~/services/database';

export default class ConfigStore {
  @observable
  loading = false;

  @action
  public async initAppDB() {
    try {
      this.loading = true;

      await initTables();
    } finally {
      this.loading = false;
    }
  }
}
