import User from "@/types/User";

export default interface IMessage {
    id:string,
    message:string,
    sender: Pick<User, 'id' | 'username'>
}