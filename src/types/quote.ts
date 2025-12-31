export interface Consultant {
  id: number;
  name: string;
  initials: string;
  photo: string;
  description: string;
  whatsapp: string;
}

export interface QuoteFormData {
  // Step 1: Posse do veículo
  vehicleOwnership?: "have" | "buying" | "researching";

  // Step 2: Situação do seguro (condicional)
  insuranceStatus?: "no_insurance" | "expiring_soon" | "expiring_3months" | "expiring_more_3months";
  quotingFor?: "me" | "other";

  // Step 3: Dados pessoais
  name?: string;
  phone?: string;

  // Step 4: Dados do veículo
  vehiclePlate?: string;
  noPlate?: boolean;
  isNew?: boolean;
  zipCode?: string;
  cpf?: string;
  maritalStatus?: "single" | "married" | "divorced" | "widowed" | "partner";
  isMainDriver?: boolean;
  mainDriverCpf?: string;

  // Step QAR: Detalhes do veículo
  vehicleUsage?: "daily" | "leisure" | "commercial" | "taxi" | "passengers" | "delivery" | "travel";
  hasRemarchedChassis?: boolean;
  isFinanced?: boolean;
  isTuned?: boolean;
  isArmored?: boolean;
  hasGasKit?: boolean;
  isAuction?: boolean;
  youngDriverCoverage?: "no" | "no_drivers" | "under_24" | "not_drive";

  // Step Residência
  residenceType?: "house" | "apartment" | "condo" | "other";
  hasGarage?: "manual" | "automatic" | "private" | "no";
  studyUsage?: "not_use" | "not_study" | "high_school" | "college" | "postgrad" | "other";
  studyGarage?: "manual" | "automatic" | "private" | "no";
  workUsage?: "yes" | "no" | "not_work";
  workGarage?: "manual" | "automatic" | "private" | "no";
}

export type QuoteStep =
  | "welcome"
  | "ownership"
  | "insurance"
  | "personal"
  | "vehicle"
  | "qar_choice"
  | "consultant"
  | "qar_details"
  | "residence"
  | "final";
