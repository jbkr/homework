import NavBar from "./view/NavBar/NavBar";
import Footer from "./view/Footer/Footer";
import LandingPage from "./view/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Items from "./view/Items/Items";
import Detail from "./view/Detail/Detail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* 요청된 경로로 페이지 이동 : 특정 컴포넌트 실행 */}
        <Router>
          <Routes>
            <Route path="/homework" element={<LandingPage />} />
            <Route path="/movie/:movieId" element={<Detail />} />
            <Route path="/homework/items" element={<Items />} />
          </Routes >
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
