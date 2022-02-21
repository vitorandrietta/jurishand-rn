import ConfigStore from '~/store/ConfigStore';
import SignatureStore from '~/store/SignatureStore';

export class AppStore {
  configStore: ConfigStore;
  signatureStore: SignatureStore;

  constructor() {
    this.configStore = new ConfigStore();
    this.signatureStore = new SignatureStore();
  }
}
export default new AppStore();
