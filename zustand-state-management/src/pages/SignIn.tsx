import { FormEvent, useState } from 'react';
import { api } from '../services/api';
import { useAuthStore } from '../store/useAuthStore';

/* eslint-disable jsx-a11y/label-has-associated-control */
export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuthStore();

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    const response = await api.post('sessions', {
      email,
      password,
    });

    signIn(response.data.user.email);
  }

  return (
    <main className="flex h-screen w-full bg-gray-900">
      <div className="w-2/4 bg-indigo-400 flex items-center justify-center">
        <p>Nome</p>
      </div>

      <div className="w-2/4 flex bg-gray-900 items-center justify-center">
        <form className="flex flex-col w-96" onSubmit={handleSignIn}>
          <h1 className="text-zinc-100 font-bold text-2xl">Sign In</h1>

          <label htmlFor="email" className="mt-4 text-zinc-100">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            className="h-10  px-4 rounded"
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password" className="mt-4 text-zinc-100">
            Set password
          </label>
          <input
            placeholder="Enter password"
            className="h-10  px-4 rounded"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            className="mt-10 bg-blue-400 h-12 rounded-lg font-semibold text-gray-900"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
