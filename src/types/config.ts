export type ThemeMode = "light" | "dark";

export interface ThemeConfig {
  fontFamily: string;
  borderRadius: number;
  navType: ThemeMode;
  presetColor: string;
  locale: string;
}

export interface ConfigState {
  themeConfig: ThemeConfig;
}
