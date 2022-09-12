export interface AuthenticatedUserResponse {
    tenantId: number;
    email: string | null;
    countryCallingCode: string | null;
    mobile: string | null;
    firstname: string;
    lastname: string;
    mainLanguageId: number;
    failedLoginCount: number;
    accountLocked: boolean;
    lockReason: string | null;
    isCanceled: boolean;
    userToken: string;
}