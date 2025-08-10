// App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import HomePage from "./components/Home";
import Dashboard from "./components/Dashboard"; // Import your Dashboard component
import Inventory from "./components/Inventory";
import SupplyChain from "./components/SupplyChain"
import Analytics from "./components/Analytics";
import Alerts from "./components/Alerts";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import AddProduct from "./components/Addproducts";
import CreateShipment from "./components/CreateShipment";
import UpdateInventory from "./components/UpdateInventory";
import ExportReport from "./components/ExportReport";
import RunForecast from "./components/RunForcast";
import Demo from "./components/Demo";
import About from "./components/About";
import Features from "./components/Features"
import Signup from "./components/Signup"

function App() {
  return (
    
      <Routes>
        
        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Home page */}
       <Route path="/login" element={<LoginPage />} />

        {/* Placeholder routes for future pages */}
        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/features" replace />} />

        {/* Home page */}
        <Route path="/features" element={<Features />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/about" replace />} />

        {/* Home page */}
        <Route path="/about" element={<About />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        {/* Home page */}
        <Route path="/signup" element={<Signup />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Home page */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Home page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/inventory" replace />} />

        {/* Home page */}
        <Route path="/inventory" element={<Inventory />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/supplychain" replace />} />

        {/* Home page */}
        <Route path="/supplychain" element={<SupplyChain />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/Analytics" replace />} />

        {/* Home page */}
        <Route path="/Analytics" element={<Analytics />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/Alerts" replace />} />

        {/* Home page */}
        <Route path="/Alerts" element={<Alerts />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/Settings" replace />} />

        {/* Home page */}
        <Route path="/Settings" element={<Settings />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/Profile" replace />} />

        {/* Home page */}
        <Route path="/Profile" element={<Profile />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/Addproducts" replace />} />

        {/* Home page */}
        <Route path="/Addproducts" element={<AddProduct />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/createshipment" replace />} />

        {/* Home page */}
        <Route path="/createshipment" element={<CreateShipment />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/updateinventory" replace />} />

        {/* Home page */}
        <Route path="/updateinventory" element={<UpdateInventory />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/exportreport" replace />} />

        {/* Home page */}
        <Route path="/exportreport" element={<ExportReport />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/runforecast" replace />} />

        {/* Home page */}
        <Route path="/runforecast" element={<RunForecast />} />

        {/* Redirect from / to /home */}
        <Route path="/" element={<Navigate to="/bookademo" replace />} />

        {/* Home page */}
        <Route path="/bookademo" element={<Demo />} />
      </Routes>
   
  );
}

export default App;
