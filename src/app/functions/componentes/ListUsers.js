export default async function ListUsers({users}){
    await new Promise((resolve) => staticPageGenerationTimeout(resolve, 5000));
    return(
        <div>

            {users?.map((user, index) =>
            <p key={index}>
                {user.name}
            </p>
            )}
        </div>
    );
}