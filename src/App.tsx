import type { FC } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

const BUSINESS_ID = "09c355c4-7c67-4334-b2d7-7c297772527b";

const businessDetails = {
  name: "The Waterside Restaurant",
  description: "Continental & Asian fare offered in an outdoor riverside setting with fountains & mood lighting.",
  summary: "The Waterside Restaurant offers a luxurious dining experience with a diverse menu featuring Indian, Continental, and Asian cuisines. Guests can enjoy a range of dishes from traditional Indian delicacies to international favorites, all prepared with fresh ingredients. The restaurant is known for its elegant ambiance and scenic views.",
  address: "NH 8C, Sarkhej - Gandhinagar Hwy, beside Narmada Canal, Ahmedabad, Gujarat 382423, India",
  cuisine: ["Indian", "Continental", "Asian"],
};

const App: FC = () => {
  return (
    <>
      <Header name={businessDetails.name} />
      <main>
        <Hero 
          name={businessDetails.name} 
          tagline="Continental & Asian fare in a scenic riverside setting."
        />
        <About 
          summary={businessDetails.summary} 
        />
        <Menu 
          cuisine={businessDetails.cuisine}
        />
        <Contact 
          address={businessDetails.address}
        />
      </main>
      <Footer name={businessDetails.name} />
    </>
  );
};

export default App;