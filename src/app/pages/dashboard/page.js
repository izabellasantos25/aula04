import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   let pessoas = getUsers();
    return (
        <div>
            {pessoas.map(user => (<h1>{user.name}</h1>))}
            
        </div>
    );
};