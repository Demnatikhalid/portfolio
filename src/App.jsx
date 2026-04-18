import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CertificationsPage from "./pages/CertificationsPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProfilePage from "./pages/ProfilePage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-shell">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/competences" element={<SkillsPage />} />
            <Route path="/formation" element={<EducationPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
