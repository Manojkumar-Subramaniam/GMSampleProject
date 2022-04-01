/**
 * For Demo purpose considered only required fields from api
 */

export default interface gitCommitApiResponseModal {
  sha: string;
  commit: commitModal;
}

export interface commitModal {
  author: commitItemModal;
  message: string;
}

export interface commitItemModal {
  name: string;
  email: string;
  date: Date;
}
