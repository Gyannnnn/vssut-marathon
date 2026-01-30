"use client";

import { ParticipantRegistrationForm } from "@/components/registration/ParticipantRegistrationForm";
import OdishaPattern from "@/components/shared/OdishaPattern";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 px-4 overflow-hidden">
       
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Register for Glory
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Secure your spot in the VSSUT Burla Marathon 2026. Choose your
            category and run for a cause!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="mt-8 relative z-20 container mx-auto sm:px-4">
        <ParticipantRegistrationForm />
      </section>
    </main>
  );
}
