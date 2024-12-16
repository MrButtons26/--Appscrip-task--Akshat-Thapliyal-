
import Navbar from "@/components/Navbar/Navbar";
import Banner from '@/components/Banner/Banner'
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/Footer/Footer";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
export default function Home() {
  return (
<>
<header>
<Banner></Banner>
<Navbar></Navbar>
</header>
<HeroSection></HeroSection>
<ProductShowcase></ProductShowcase>
<Footer></Footer>
</>  
);
}
