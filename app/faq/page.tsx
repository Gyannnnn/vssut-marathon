"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = {
  General: [
    {
      q: "What is the VSSUT Marathon?",
      a: "It is an annual running event organized by VSSUT Burla to promote health, wellness, and social awareness.",
    },
    {
      q: "When and where is it happening?",
      a: "The marathon is scheduled for Sunday, 11th January 2026, starting from the VSSUT Main Gate, Burla.",
    },
  ],
  Registration: [
    {
      q: "How can I register?",
      a: "Registration is online only through this website. Click the 'Register Now' button to proceed.",
    },
    {
      q: "What is the registration fee?",
      a: "Fees vary by category (5K, 10K, 21.1K). Details are available on the registration portal.",
    },
    {
      q: "Can I register offline?",
      a: "Currently, we only accept online registrations to ensure smooth data processing.",
    },
  ],
  "Event Day": [
    {
      q: "What time should I report?",
      a: "Participants are advised to reach the venue by 5:00 AM. Warm-up starts at 5:15 AM.",
    },
    {
      q: "Will there be hydration points?",
      a: "Yes, hydration stations will be available every 2 KM along the route.",
    },
    {
      q: "Is there parking available?",
      a: "Yes, designated parking areas are available near the campus entrance.",
    },
  ],
};

export default function FAQPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 pt-12">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about race day.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <div className="space-y-12">
          {Object.entries(FAQS).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">
                {category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                  <AccordionItem key={index} value={`${category}-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium text-foreground">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
