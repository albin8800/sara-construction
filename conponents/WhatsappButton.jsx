"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919446327288"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center
        shadow-lg animate-softBounce hover:scale-110 transition-transform duration-300">
        <img
          src="/icons/whatsapp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </div>
    </a>
  );
}
