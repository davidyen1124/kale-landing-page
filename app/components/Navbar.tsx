import { auth } from "@/app/auth";
import ClientNavbar from "@/app/components/ClientNavbar";

export default async function Navbar() {
  const session = await auth();

  return <ClientNavbar isAuthenticated={!!session?.user} />;
}
