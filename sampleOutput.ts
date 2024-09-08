export interface Friends {
    name: string;
    age: number;
}


export interface Address {
    city: string;
    zip: number;
}


export interface Response {
    id: number;
    name: string;
    friends: Friends[];
    address: Address;
}
