import IUser from "@/types/User";

export default interface IMessage {
    id:string,
    message:string,
    sender: Pick<IUser, 'id' | 'username'>
}