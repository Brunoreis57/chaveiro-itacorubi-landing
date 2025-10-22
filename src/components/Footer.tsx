import { Phone, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Chaveiro Itacorubi</h3>
            <p className="text-primary-foreground/80">
              Agilidade e qualidade em serviços de chaveiro
            </p>
          </div>
          
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(48) 98832-0711</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>@chaveiroitacorubi</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Florianópolis/SC</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Chaveiro Itacorubi
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Atendimento 24 horas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;