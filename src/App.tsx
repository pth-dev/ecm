import ThemeCustomization from "./themes";
import AppRouter from "./router";
import { ConfigProvider } from "./contexts/ConfigContext";

function App() {
  return (
    <ConfigProvider>
      <ThemeCustomization>
        <AppRouter />
      </ThemeCustomization>
    </ConfigProvider>
  );
}

export default App;
