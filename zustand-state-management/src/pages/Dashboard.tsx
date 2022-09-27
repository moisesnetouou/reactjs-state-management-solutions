import { useAuthStore } from '../store/useAuthStore';

export function Dashboard() {
  const { user, signOut } = useAuthStore();

  return (
    <main>
      <div>
        <p className="text-zinc-100">{user.email}</p>
        <button type="button" className="text-zinc-100" onClick={signOut}>
          SignOut
        </button>
      </div>
    </main>
  );
}
