/* eslint-disable react/no-unescaped-entities */
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
      <div className="py-6 md:py-12">
        <div className="mt-8 flex h-auto flex-col items-start md:h-64 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <p className="mb-2 text-lg font-bold">FAQ</p>
            <h1 className="text-5xl font-extrabold lg:text-6xl">Frequently</h1>
            <h1 className="my-2 text-5xl font-extrabold lg:text-6xl">Ask</h1>
            <h1 className="text-5xl font-extrabold lg:text-6xl">Question</h1>
          </div>
          <div className="md:w-1/2">
            <p className="mb-2 mt-5 text-xl font-bold">
              Do you have questions?
            </p>
            <p className="mb-6 md:mb-3">
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
