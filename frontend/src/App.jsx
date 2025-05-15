import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage.jsx";
import DailyOrders from "./Components/DailyOrders/DailyOrders.jsx";

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/DailyOrders" element={<DailyOrders />}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
