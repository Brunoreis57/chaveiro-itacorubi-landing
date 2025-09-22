import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";

const Header = () => {
  const handleCall = () => {
    window.open("tel:+5548988320711", "_self");
  };

  return (
    <header className="bg-gradient-header backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-medium">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Chaveiro Itacorubi</h1>
            <p className="text-sm text-white/80">Atendimento 24h</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={handleCall} className="hidden md:flex text-white hover:text-header-blue hover:bg-white/20">
            <Phone className="w-4 h-4" />
            (48) 98832-0711
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleCall}
            className="md:hidden text-white hover:text-header-blue hover:bg-white/20"
          >
            <Phone className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;