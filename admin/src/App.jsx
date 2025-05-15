import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdminUploadPage from "./Components/AdminPage";

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<AdminUploadPage />}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
