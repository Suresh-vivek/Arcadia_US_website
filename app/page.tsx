import Banner from "@/components/Banner";
import Landing from "@/components/Landing";
import TicketBanner from "@/components/TicketBanner";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Landing />
      <Banner />
      <TicketBanner />
    </main>
  );
}
