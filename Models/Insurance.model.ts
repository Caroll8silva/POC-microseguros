export interface AutoInsuranceModel {
  title: string;
  use_terms: string;
  description: string;
  value: number;
  company: string;
  product_id: string;
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
  product_id: string;
}

