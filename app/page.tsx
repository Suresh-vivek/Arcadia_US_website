import Banner from "@/components/Banner";
import HotelServicesMap from "@/components/HotelService";
import Housekeeping from "@/components/Housekeeping";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import Stats from "@/components/Stats";
import TicketBanner from "@/components/TicketBanner";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Landing />
      <Banner />
      <TicketBanner />
      <Stats />
      <Projects />
      <Service />
      <HotelServicesMap />
      <Housekeeping />
    </main>
  );
}
