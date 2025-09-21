import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/chaveiro-itacorubi-hero.png";

const Hero = () => {
  const handleCall = () => {
    window.open("tel:+5548988320711", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5548988320711", "_blank");
  };

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Chaveiro
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Itacorubi</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                Agilidade e qualidade!
              </p>
              <p className="text-lg text-muted-foreground max-w-md">
                Atendimento emergencial 24 horas em Florianópolis/SC. Especialistas em abertura, instalação e manutenção de fechaduras.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Atendimento 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Florianópolis/SC</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" onClick={handleCall} className="text-base">
                <Phone className="w-5 h-5" />
                Ligar Agora
              </Button>
              <Button variant="whatsapp" size="lg" onClick={handleWhatsApp} className="text-base">
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={heroImage} 
                alt="Serviços de chaveiro profissional"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-primary text-primary-foreground p-6 rounded-xl shadow-strong animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm">Emergências</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;