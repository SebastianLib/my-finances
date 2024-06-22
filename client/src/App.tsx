import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./coxtexts/financial-record-context";
function App() {
  return (
    <FinancialRecordsProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </Router>
    </FinancialRecordsProvider>
  );
}

export default App;
