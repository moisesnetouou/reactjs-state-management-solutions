import create from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  email: string;
}

interface AuthContext {
  user: User;
  signIn: (email: string) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthContext>()(
  persist(
    (set) => ({
      user: {
        email: '',
      },
      signIn: (newUserData) => {
        set((state) => {
          console.log(state);

          return {
            user: {
              email: newUserData,
            },
          };
        });
      },
      signOut: () => {
        set((state) => {
          console.log(state);
          return {
            user: {
              email: '',
            },
          };
        });
      },
    }),
    {
      name: 'user-store-persist',
    },
  ),
);
