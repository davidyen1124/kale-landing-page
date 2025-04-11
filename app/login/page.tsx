import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import ClientLoginForm from "@/app/components/ClientLoginForm";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow border border-gray-200 mx-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Kale
          </h1>
          <h2 className="mt-3 text-xl font-medium text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <ClientLoginForm />
      </div>
    </div>
  );
}
