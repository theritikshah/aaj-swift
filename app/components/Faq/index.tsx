import React from "react";
import Button from "../common/Button";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I track my shipment?",
      answer:
        "You can track your shipment through the tracking page using your tracking number.",
    },
    {
      question: "My shipment status is still at 'Pick up.' What should I do?",
      answer:
        "If the shipment status remains at pick-up, contact customer support for assistance.",
    },
    {
      question: "My shipment is out for delivery. When will I receive it?",
      answer:
        "Your shipment can be delivered to you anytime between 10:00 am and 8:00 pm on the same day when it is marked as out for delivery.",
    },
    {
      question:
        "How can I get the delivery of my shipment if I missed it today?",
      answer:
        "You can reschedule the delivery or pick it up from the nearest depot.",
    },
    {
      question: "How can I reschedule delivery/pickup for my order?",
      answer:
        "You can reschedule delivery or pickup via the delivery options page after logging into your account.",
    },
  ];

  return (
    <div className="container mx-auto py-12 pb-2 px-4 mt-16">
      <div className="flex">
        {/* Left Side */}
        <div className="w-1/3 pr-6">
          <h2 className="text-4xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-6">
            Find answers to common questions about our shipping services, rates,
            delivery times, and more.
          </p>
          <Button className="btn-wide">Calculate Shipping Cost</Button>
        </div>

        {/* Right Side */}
        <div className="w-2/3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              tabIndex={0}
              className="custom-plus-color collapse collapse-plus border border-[#F7E2E2] bg-base-100 rounded-box mb-4"
            >
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
