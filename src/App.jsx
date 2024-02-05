import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import GlobalState from "./styles/GlobalStyles";
import Dashboard from "./ui/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalState />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
