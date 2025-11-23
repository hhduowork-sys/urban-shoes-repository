import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer cash on delivery?",
    answer: "Yes, we offer cash on delivery for all orders within our delivery zones. Simply select COD at checkout.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund within 30 days.",
  },
  {
    question: "How long is delivery?",
    answer: "Standard delivery takes 3-5 business days. Express delivery is available for 1-2 business days at checkout.",
  },
  {
    question: "What sizes do you offer?",
    answer: "We offer sizes from EU 36 to EU 46 for most styles. Check individual product pages for specific size availability.",
  },
  {
    question: "Are your shoes true to size?",
    answer: "Yes, our shoes are true to size. We recommend ordering your normal size. Size guides are available on each product page.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can use this to track your package in real-time.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl animate-fade-in">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="animate-fade-in">
              <AccordionTrigger className="text-left font-bold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
