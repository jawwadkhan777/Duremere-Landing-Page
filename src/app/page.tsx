import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";
import Services from "@/components/shared/Services";
export default function Home() {
  return (
    <div>
      <div className="bg-[url('/images/MidjourneyImage1.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Header />
      </div>
      <Services />
    </div>
  );
}
