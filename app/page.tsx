import RealWorldFeatures from "@/components/FeaturesOfRealWorld/RealWorldFeatures";
import GetRealResults from "@/components/GetRealResults/GetRealResults";
import TeachingPhilosophy from "@/components/TeachingPhilosophy/TeachingPhilosophy";
import WhatIsTheRealWorld from "@/components/What-is-the-real-world/WhatIsTheRealWorld";
import WhatDoWeTeach from "@/components/WhatDoWeTeach/WhatDoWeTeach";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import JoinTheRealWorld from "@/components/join-the-real-world/JoinTheRealWorld";
import Navbar from "@/components/navbar/Navbar";

export default function HomePage() {
  return (
    <div className="bg-stone-900 text-neutral-50">
      {/* Navbar */}
      <Navbar />
      {/* Join the real world */}
      <JoinTheRealWorld />
      {/* Philosphy */}
      <TeachingPhilosophy />
      {/* Step by Step */}
      <RealWorldFeatures />
      {/* What is the Real World*/}
      <WhatIsTheRealWorld />
      {/* What do we Teach */}
      <WhatDoWeTeach />
      {/* Faq */}
      <Faq />
      {/* Get Real Results */}
      <GetRealResults />
      {/* footer */}
      <Footer />
    </div>
  );
}
