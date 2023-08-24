import IMessage from "@/types/Message";

export default interface User {
    id:string,
    username:string,
    messages: Omit<IMessage,'sender'>[]
}