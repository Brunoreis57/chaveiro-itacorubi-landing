import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Aparece após 2 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/5548988320711?text=Olá! Preciso de atendimento de chaveiro.", "_blank");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fadeInUp">
      <Button
        variant="whatsapp"
        size="lg"
        onClick={handleWhatsApp}
        className="rounded-full shadow-whatsapp animate-bounce-subtle hover:animate-pulse-scale"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline ml-2">WhatsApp</span>
      </Button>
      
      {/* Pulso de animação */}
      <div className="absolute inset-0 rounded-full bg-success/30 animate-ping" />
    </div>
  );
};

export default FloatingWhatsApp;