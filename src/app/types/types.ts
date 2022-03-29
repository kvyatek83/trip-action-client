export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  avatar: string;
}

export enum Gender {
  FEMALE = 'Female',
  MALE = 'Male',
  GENDERFLUID = 'Genderfluid',
  NON_BINARY = 'Non-binary',
  BIGENDER = 'Bigender',
  GENDERQUEER = 'Genderqueer',
  AGENDER = 'Agender',
  POLYGENDER = 'Polygender',
}
