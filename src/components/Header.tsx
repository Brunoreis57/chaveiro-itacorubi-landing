import { Button } from "@/components/ui/button";
import { Phone, Instagram } from "lucide-react";
import logo from "@/assets/chaveiroitaco.jpg";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const handleCall = () => {
    window.open("tel:+5548988320711", "_self");
  };

  return (
    <header className="bg-gradient-header backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-medium">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Chaveiro Itacorubi" className="w-10 h-10 rounded-lg object-cover" />
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;