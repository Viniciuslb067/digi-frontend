export interface ServiceResponse<T> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  errors?: string[];
}
