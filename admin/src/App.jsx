import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdminUploadPage from "./Components/AdminPage";
import ViewPage from "./Components/ViewPage";

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<AdminUploadPage />}></Route>
          <Route path='/view-cases' element={<ViewPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
