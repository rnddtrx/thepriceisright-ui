export interface UserEntityProfileDto {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  roleEntities: RoleEntityDto1[];
}

export interface RoleEntityDto1 {
  roleName: string;
}
