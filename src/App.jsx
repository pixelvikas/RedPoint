import React, { useState, useEffect, useLayoutEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import WhatsAppButton from "./components/WhatsappButton";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// MainApp manages loading state internally on route change
const MainApp = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // Faster load time for smooth transitions
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <LoadingPage />;

  return (
    <>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <WhatsAppButton phoneNumber="+91 8779567749" size={50} />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);

export default App;
