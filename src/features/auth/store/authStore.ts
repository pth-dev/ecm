import { create } from "zustand";
import {
  login as loginService,
  logout as logoutService,
  getCurrentUser,
} from "../services/authService";
import type { AuthState, LoginCredentials } from "../types/Auth";

interface AuthStore extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
}
//!!localStorage.getItem("token"),
// const initialState: AuthState = {
//   user: null,
//   token: localStorage.getItem("token"),
//   isAuthenticated: true,
//   isLoading: false,
//   error: null,
// };
const initialState: AuthState = {
  user: {
    id: "1",
    name: "Demo User",
    position: "Demo Position",
    department: "Demo Department",
    permissions: ["demo-permission"],
    username: "demo-username",
  },
  token: "demo-token",
  isAuthenticated: true, // Luôn xác thực mặc định
  isLoading: false,
  error: null,
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  ...initialState,

  login: async (credentials: LoginCredentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await loginService(credentials);
      set({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Login failed",
      });
      throw error;
    }
  },

  logout: () => {
    logoutService();
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
    });
  },

  checkAuth: async () => {
    const { isAuthenticated, token } = get();

    if (!token) {
      set({ isAuthenticated: false });
      return false;
    }

    if (isAuthenticated && get().user) {
      return true;
    }

    set({ isLoading: true });
    try {
      const user = await getCurrentUser();
      set({ user, isAuthenticated: true, isLoading: false });
      return true;
    } catch (error) {
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: error instanceof Error ? error.message : "Authentication failed",
      });
      return false;
    }
  },
}));
