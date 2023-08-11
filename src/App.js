import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import QuickFacts from "./pages/QuickFacts";
import PopularExperiences from "./pages/PopularExperiences";
import GroupComponent5 from "./pages/GroupComponent5";
import GroupComponent6 from "./pages/GroupComponent6";
import GroupComponent7 from "./pages/GroupComponent7";
import GroupComponent8 from "./pages/GroupComponent8";
import GroupComponent9 from "./pages/GroupComponent9";
import GroupComponent10 from "./pages/GroupComponent10";
import GroupComponent12 from "./pages/GroupComponent12";
import Hotel from "./pages/Hotel";
import GroupComponent13 from "./pages/GroupComponent13";
import FaSolidfire from "./pages/FaSolidfire";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/popular-experiences":
        title = "";
        metaDescription = "";
        break;
      case "/group-493":
        title = "";
        metaDescription = "";
        break;
      case "/group-458":
        title = "";
        metaDescription = "";
        break;
      case "/group-459":
        title = "";
        metaDescription = "";
        break;
      case "/group-467":
        title = "";
        metaDescription = "";
        break;
      case "/group-468":
        title = "";
        metaDescription = "";
        break;
      case "/group-456":
        title = "";
        metaDescription = "";
        break;
      case "/group-492":
        title = "";
        metaDescription = "";
        break;
      case "/hotel":
        title = "";
        metaDescription = "";
        break;
      case "/group-490":
        title = "";
        metaDescription = "";
        break;
      case "/fasolidfire":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<QuickFacts />} />
      <Route path="/popular-experiences" element={<PopularExperiences />} />
      <Route path="/group-493" element={<GroupComponent5 />} />
      <Route path="/group-458" element={<GroupComponent6 />} />
      <Route path="/group-459" element={<GroupComponent7 />} />
      <Route path="/group-467" element={<GroupComponent8 />} />
      <Route path="/group-468" element={<GroupComponent9 />} />
      <Route path="/group-456" element={<GroupComponent10 />} />
      <Route path="/group-492" element={<GroupComponent12 />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/group-490" element={<GroupComponent13 />} />
      <Route path="/fasolidfire" element={<FaSolidfire />} />
    </Routes>
  );
}
export default App;
