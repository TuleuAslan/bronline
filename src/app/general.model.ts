export interface SignUp {
    email: string;
    password: string;
    phone: string;
    computerClub:{name:string};
}

export interface SignUpResponse {
    id: number;
    email:string;
    keycloakUserId: string;
    phone: string;
    isActive: boolean;
    roles:["admin", "default-roles-bronline-dev"];
    computerClub: ComputerClub;
}

export interface ComputerClub {
    id: number;
    name: string;
    description: string;
    address: string;
    phone: string;
    openingTime: string;
    closingTime: string;
    instagram: string;
    tiktok: string;
    priceFrom: string;
    photoUrls: string;
    freeSeats: string;
}

export interface LogIn {
    username: string;
    password: string;
}

export interface LogInResponse {
    access_token: string;
    expires_in: string;
    refresh_expires_in: string;
    refresh_token: string;
    token_type: string;
}