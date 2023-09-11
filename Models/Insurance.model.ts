export interface AutoInsuranceModel {
  title: string;
  use_terms: string;
  description: string;
  value: number;
  company: string;
  user_id: string;
}

export interface FormattedAutoInsuranceModel {
  id: string;
  title: string;
  use_terms: string;
  description: string;
  value: number;
  company: string;
  createdAt: string;
  updatedAt: string;
  user_id: string;
}

