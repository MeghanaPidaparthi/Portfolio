import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio"; // your main page
import PageNotFound from "./PageNotFound"; // 404 page

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your main routes */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
