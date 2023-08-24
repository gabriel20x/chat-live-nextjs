import IMessage from "@/types/Message";

export default interface IUser {
    id:string,
    username:string,
    messages: Omit<IMessage,'sender'>[]
}