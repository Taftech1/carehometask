import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import News from "./pages/News";
import Recruiment from "./pages/Recruiment";
import TheTeam from "./pages/TheTeam";
import Testimonials from "./pages/Testimonials";
import Header from "./Component/header/Header";
import Footer from "./Component/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateCare from "./pages/PrivateCare";
import DirectPayment from "./pages/DirectPayment";
import FundedCare from "./pages/FundedCare";
import CareHotLine from "./pages/CareHotLine";
import SingleNews from "./Component/news/SingleNesw";
import TopHeader from "./Component/header/TopHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/Contact" element={<ContactUs />}></Route>
          <Route path="/the-team" element={<TheTeam />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/recruiment" element={<Recruiment />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route
            path="/care-services/private-care"
            element={<PrivateCare />}
          ></Route>
          <Route
            path="/care-services/direct-payments"
            element={<DirectPayment />}
          ></Route>
          <Route
            path="/care-services/funded-care"
            element={<FundedCare />}
          ></Route>
          <Route
            path="/care-services/care-hotline"
            element={<CareHotLine />}
          ></Route>
          <Route path="/news/:newsId" element={<SingleNews />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
