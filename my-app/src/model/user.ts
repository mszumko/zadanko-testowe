export interface User {
  id: string;
  userName: string;
  userLastName: string;
  email: string;
  image: {
    small?: string;
    medium?: string;
    large?: string;
  };
  address: {
    street?: string;
    city?: string;
    country?: string;
  };
  birthday: string;
  registrationTime: string;
}
