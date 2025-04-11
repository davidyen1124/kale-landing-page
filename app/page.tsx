import { Navbar } from "@/app/components/layout";
import { Hero } from "@/app/components/home";
import ClientPage from "@/app/components/ClientPage";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <ClientPage />
    </main>
  );
}
