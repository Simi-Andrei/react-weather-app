import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className="layout w-full flex flex-col min-h-screen justify-between bg-blue-900">
      <Header />
      <main className="container mx-auto bg-blue-900 flex-1 text-blue-100 p-4 border-x border-blue-300">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;
