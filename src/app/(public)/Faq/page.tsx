import MainBreadcum from "@/components/Breadcum/MainBreadcum";
import { FaPlus } from "react-icons/fa";


const FAQ = () => {
  const faqs = [
    {
      question: "How we serve food?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How is our food quality?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How do we give home delivery?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And When?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi ullam est!",
    },
  ];

  return (
    <>
    <MainBreadcum name="FAQ" pageName="FAQ"/>
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
        

          <p className="text-[#333333] mt-2 text-[40px] font-semibold py-10">Questions Looks Here</p>
          <p className="text-[#4F4F4F] text-[16px] py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
          
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
             <div key={index} className="p-4 bg-white shadow rounded">
             <div className="flex justify-between items-center">
               <h2 className="font-semibold text-[18px] text-[#333333]">{faq.question}</h2>
               <FaPlus className="text-[#33333] text-xl" />
             </div>
             <p className="text-[#4F4F4F] text-[12px] mt-2">{faq.answer}</p>
           </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQ;