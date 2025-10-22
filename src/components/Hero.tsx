import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

const Hero = () => {
  // Removido handleCall
  const handleWhatsApp = () => {
    window.open("https://wa.me/5548988320711", "_blank");
  };

  return (
    <section className="relative py-12 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="space-y-6 animate-fadeInUp text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Urgência? Chaveiro Itacorubi 24h
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Atendimento imediato em Florianópolis/SC. Aberturas, instalação e manutenção de fechaduras.
          </p>

          <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Atendimento 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Florianópolis/SC</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp} className="text-base">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;