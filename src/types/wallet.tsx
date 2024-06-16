export interface walletProfile {
    _id: string;
    username: string;
    balance: number;
    energy: number;
    tap: number;
    limit: number;
}
export interface FriendProf{
    check: boolean;
    inviteNum : number;
}
export interface walletStateProps {
    user: walletProfile;
    users: walletProfile[];
    friend: FriendProf;
    error: object | string | null;
}