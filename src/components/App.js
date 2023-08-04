import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../routes/home/Home';
import About from '../routes/about/About';
import WebDesign from '../routes/WebDesign';
import SEO from '../routes/SEO';
import Services from '../routes/Services';
import Layout from './Layout';
import Frontend from '../routes/Frontend';
import PHP from '../routes/PHP';
import Node from '../routes/Node';
import AboutWho from '../routes/AboutWho';
import OurValues from '../routes/OurValues';
import WebDev from '../routes/WebDev';
import ScrollToTop from "./ScrollToTop";
import Training from "../routes/training/Training";
import TrainingDetail from "../routes/training/TrainingDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Navigate to="/trang-chu" />} />
          <Route path="/trang-chu" element={<Home />} />
          <Route path="/ve-chung-toi" element={<About />} />
          <Route path="/dao-tao" element={<Training />} />
          <Route path="/dao-tao/:id" element={<TrainingDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="who-we-are" element={<AboutWho />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;
