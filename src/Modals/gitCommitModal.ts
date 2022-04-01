/**
 * For Demo purpose considered only required fields from api
 */

export default interface gitCommitApiResponseModal {
  sha: string;
  commit: commitModal;
}

interface commitModal {
  author: commitItemModal;
  message: string;
}

interface commitItemModal {
  name: string;
  email: string;
  date: string;
}
