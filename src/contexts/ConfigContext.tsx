import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { ThemeConfig, ThemeMode, ConfigState } from "../types/config";

// Initial config
const initialConfig: ThemeConfig = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  borderRadius: 8,
  navType: "light" as ThemeMode,
  presetColor: "default",
  locale: "en",
};

// Initial state
const initialState: ConfigState = {
  themeConfig: initialConfig,
};

// Create Context
const ConfigContext = createContext<{
  state: ConfigState;
  dispatch: React.Dispatch<any>;
  onChangeThemeMode: (mode: ThemeMode) => void;
}>({
  state: initialState,
  dispatch: () => null,
  onChangeThemeMode: () => null,
});

// Reducer Types
export const CONFIG_TYPES = {
  CHANGE_THEME_MODE: "CHANGE_THEME_MODE",
  CHANGE_PRESET_COLOR: "CHANGE_PRESET_COLOR",
  CHANGE_LOCALE: "CHANGE_LOCALE",
};

// Reducer
const configReducer = (state: ConfigState, action: any): ConfigState => {
  switch (action.type) {
    case CONFIG_TYPES.CHANGE_THEME_MODE: {
      return {
        ...state,
        themeConfig: {
          ...state.themeConfig,
          navType: action.value,
        },
      };
    }
    case CONFIG_TYPES.CHANGE_PRESET_COLOR: {
      return {
        ...state,
        themeConfig: {
          ...state.themeConfig,
          presetColor: action.value,
        },
      };
    }
    case CONFIG_TYPES.CHANGE_LOCALE: {
      return {
        ...state,
        themeConfig: {
          ...state.themeConfig,
          locale: action.value,
        },
      };
    }
    default: {
      return state;
    }
  }
};

// Props type
interface ConfigProviderProps {
  children: ReactNode;
}

// Provider
export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(configReducer, initialState);
  const [mounted, setMounted] = useState<boolean>(false);

  // Initialize state from localStorage if available
  useEffect(() => {
    const configString = window.localStorage.getItem("enterprise-app-config");
    if (configString) {
      try {
        const savedConfig = JSON.parse(configString);
        dispatch({
          type: CONFIG_TYPES.CHANGE_THEME_MODE,
          value: savedConfig.navType || initialConfig.navType,
        });
        dispatch({
          type: CONFIG_TYPES.CHANGE_PRESET_COLOR,
          value: savedConfig.presetColor || initialConfig.presetColor,
        });
        dispatch({
          type: CONFIG_TYPES.CHANGE_LOCALE,
          value: savedConfig.locale || initialConfig.locale,
        });
      } catch (error) {
        console.error("Failed to parse saved config:", error);
      }
    }
    setMounted(true);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (mounted) {
      window.localStorage.setItem(
        "enterprise-app-config",
        JSON.stringify(state.themeConfig)
      );
    }
  }, [state.themeConfig, mounted]);

  // Handler for changing theme mode
  const onChangeThemeMode = (mode: ThemeMode) => {
    dispatch({
      type: CONFIG_TYPES.CHANGE_THEME_MODE,
      value: mode,
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        state,
        dispatch,
        onChangeThemeMode,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

// Hook for using the config context
export const useConfig = () => useContext(ConfigContext);

export default ConfigContext;
