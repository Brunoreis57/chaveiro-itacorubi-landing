import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";

const Header = () => {
  const handleCall = () => {
    window.open("tel:+5548988320711", "_self");
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">C</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Chaveiro Itacorubi</h1>
            <p className="text-sm text-muted-foreground">Atendimento 24h</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={handleCall} className="hidden md:flex">
            <Phone className="w-4 h-4" />
            (48) 98832-0711
          </Button>
          <Button 
            variant="hero" 
            size="sm" 
            onClick={handleCall}
            className="md:hidden"
          >
            <Phone className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;