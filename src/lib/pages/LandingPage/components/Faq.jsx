/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqData } from "@/lib/constants/faq";

export default function Faq() {
  return (
    <>
      <div className="py-16">
        <div className="mt-8 flex h-64 flex-col items-center md:flex-row">
          <div className="md:w-1/2">
            <p className="mb-2 text-lg font-bold">FAQ</p>
            <h1 className="text-6xl font-extrabold">Frequently</h1>
            <h1 className="my-2 text-6xl font-extrabold">Ask</h1>
            <h1 className="text-6xl font-extrabold">Question</h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl font-bold">Do you have questions?</p>
            <p className="mb-3">
              Get the most out of your shopping experience! Find answers to the
              most common questions below to help you with your shopping
              journey.
            </p>
            <div>
              <Accordion type="single" collapsible>
                {faqData.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
