export interface Login {
    domainName: string;
    email: string | null;
    mobile: string | null;
    countryCallingCode: string | null;
    password: string;
    rememberMe: boolean;
}