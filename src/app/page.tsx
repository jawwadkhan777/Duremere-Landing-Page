import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";
import Services from "@/components/shared/Services";
import About from "@/components/shared/About";
import Advertisment from "@/components/shared/Advertisment";
import Journey from "@/components/shared/Journey";
import Footer from "@/components/shared/Footer";
export default function Home() {
  return (
    <div>
      <div className="bg-[url('/images/MidjourneyImage1.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Header />
      </div>
      <div className="bg-[url('/images/services-bg-image.png')] bg-no-repeat bg-right bg-size-[auto_200%]">
        <Services />

      </div>
      <About />
      <Advertisment />
      <Journey />
      <Footer />
    </div>
  );
}
