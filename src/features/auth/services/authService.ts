import { post } from "../../../services/apiClient";
import type { LoginCredentials, LoginResponse } from "../types/Auth";
import type { User } from "../../../types/common";

// Login function
export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await post<LoginResponse>("/auth/login", credentials);
    // Store token in localStorage
    localStorage.setItem("token", response.token);
    return response;
  } catch (error) {
    throw error;
  }
};

// Logout function
export const logout = (): void => {
  localStorage.removeItem("token");
};

// Get current user function
export const getCurrentUser = async (): Promise<User> => {
  try {
    return await post<User>("/auth/me");
  } catch (error) {
    throw error;
  }
};
