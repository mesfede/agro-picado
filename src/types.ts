export type ServiceType =
  | 'Picado y ensilado'
  | 'Rollos'
  | 'Abono orgánico'
  | 'Labranza'
  | 'Otro';

export interface QuoteFormData {
  name: string;
  phone: string;
  service: ServiceType;
  message: string;
}
