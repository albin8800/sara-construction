import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <div className="mt-10 flex flex-col px-4 md:px-20 md:mt-20">
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <hr className="grow border-[#5D4634]" />
        <h1 className="text-center text-[16px] md:text-[24px] font-bold text-[#5D4634] whitespace-nowrap">
          Customer Testimonials
        </h1>
        <hr className="grow border-[#5D4634]" />
      </div>

      <div className="mt-20 flex overflow-x-hidden items-stretch scroll-smooth gap-4">
        {testimonials.map((item) => (
            <div key={item.id} className="flex shrink-0 w-[510px] h-full ">
                <div className="flex flex-col h-full w-full bg-[#F5EFE9] rounded-2xl p-6 gap-6">
                    <div className="flex flex-col gap-0.5">
                        <h2 className="text-[20px] font-semibold text-[#816549]">{item.name}</h2>
                        <p className="text-[14px] text-[#B2A293]">{item.place}</p>
                    </div>

                    <p className="flex-1 leading-relaxed text-[16px] text-[#777777]">{item.review}</p>
                </div>
            </div>
        ))}
      </div>
      
    </div>
  );
}
