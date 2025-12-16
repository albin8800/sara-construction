export default function WhyUs() {


  return (
    <div className="mt-10 flex flex-col px-4 md:px-20 md:mt-20">
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <hr className="grow border-[#5D4634]" />
        <h1 className="text-center text-[16px] md:text-[24px] font-bold text-[#5D4634] whitespace-nowrap">
          Why Choose Us
        </h1>
        <hr className="grow border-[#5D4634]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-20 gap-6 items-stretch">
        <div className="flex flex-col bg-white shadow-[0_0_15px_rgba(0,0,0,0.10)] rounded-2xl px-6 py-4 gap-4">
          <div className="flex items-center gap-2">
            <img className="h-[26px] w-[26px]" src="/icons/whyus1.svg" alt="" />
            <h1 className="text-[18px] font-bold text-[#816549]">25+ Years of Experience</h1>
          </div>
          <p className="text-[14px] text-[#777777]">With 25 years of experience, we bring trusted expertise and dependable quality to every project.</p>
        </div>
        <div className="flex flex-col bg-white shadow-[0_0_15px_rgba(0,0,0,0.10)] rounded-2xl px-6 py-4 gap-4">
          <div className="flex items-star gap-2">
            <img className="h-[26px] w-[26px]" src="/icons/whyus1.svg" alt="" />
            <h1 className="text-[18px] font-bold text-[#816549]">Quality Work & Durable Structures</h1>
          </div>
          <p className="text-[14px] text-[#777777]">With 25 years of experience, we bring trusted expertise and dependable quality to every project.</p>
        </div>
        <div className="flex flex-col bg-white shadow-[0_0_15px_rgba(0,0,0,0.10)] rounded-2xl px-6 py-4 gap-4">
          <div className="flex items-center gap-2">
            <img className="h-[26px] w-[26px]" src="/icons/whyus1.svg" alt="" />
            <h1 className="text-[18px] font-bold text-[#816549]">25+ Years of Experience</h1>
          </div>
          <p className="text-[14px] text-[#777777]">With 25 years of experience, we bring trusted expertise and dependable quality to every project.</p>
        </div>
        <div className="flex flex-col bg-white shadow-[0_0_15px_rgba(0,0,0,0.10)] rounded-2xl px-6 py-4 gap-4">
          <div className="flex items-center gap-2">
            <img className="h-[26px] w-[26px]" src="/icons/whyus1.svg" alt="" />
            <h1 className="text-[18px] font-bold text-[#816549]">25+ Years of Experience</h1>
          </div>
          <p className="text-[14px] text-[#777777]">With 25 years of experience, we bring trusted expertise and dependable quality to every project.</p>
        </div>
      </div>

    </div>
  );
}
