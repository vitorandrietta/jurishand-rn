import { observable, action } from 'mobx';

import { SignatureDAO } from '~/services/database/DAO/SignatureDAO';

export default class SignatureStore {
  @observable
  loading = false;

  @observable
  hasSignature = false;

  @action
  public async addSignature() {
    try {
      this.loading = true;
      await SignatureDAO.insertSignature({ id: 1 });
      this.hasSignature = true;
    } finally {
      this.loading = false;
    }
  }

  @action
  public async removeSignature() {
    try {
      this.loading = true;
      await SignatureDAO.deleteSignature(1);
      this.hasSignature = false;
    } finally {
      this.loading = false;
    }
  }

  @action
  public async checkSignature() {
    try {
      this.loading = true;

      const signatures = await SignatureDAO.getSignatures(['id']);
      this.hasSignature = !!signatures.length;
    } finally {
      this.loading = false;
    }
  }
}
