export interface walletProfile {
    _id: string;
    username: string;
    balance: number;
    energy: number;
    tap: number;
    limit: number;
}
export interface walletStateProps {
    user: walletProfile;
    users: walletProfile[];
    error: object | string | null;
}