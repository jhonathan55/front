export interface UserI {
    firstName: string;
    lastName:  string;
    age:       number;
    email:     string;
    password:  string;
    id:        string;
}
export interface UserResponseI {
    message: string;
    user:    UserI;
}