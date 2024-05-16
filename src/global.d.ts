
type RecordType = { [key: string]: unknown };

type MessageResponseDTO = {message: string}

type LabelValueType = {label: string, value: string}

type UserType = {
  name: string;
  gender: string;
  location: string;
  university: string;
  interests: string[];
}

type LoginResponseDTO = MessageResponseDTO & {
  data: {
    user: UserType,
    token: string,
  }
}

type RegisterDTO = {
  username: string,
  password: string,
  name: string,
  gender: 'male' | 'female',
  location: string,
  university: string,
  interests: string[],
}

type RegisterResponseDTO = MessageResponseDTO & {
  data: {
    user: UserType,
  }
}
