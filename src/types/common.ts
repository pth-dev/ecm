// User-related types
export interface User {
  id: string;
  username: string;
  name: string;
  position: string;
  department: string;
  permissions: string[];
}

// API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

// Navigation menu item
export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  path: string;
  children?: MenuItem[];
  selected?: boolean;
}

// Common form field type
export type FieldType =
  | "text"
  | "select"
  | "radio"
  | "number"
  | "date"
  | "search"
  | "textarea";
