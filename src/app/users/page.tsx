type User = {
  id: number;
  name: string;
};

export default async function Page() {
  const usersFetch = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await usersFetch.json();

  return (
    <div>
      <h1>کاربران</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
}
