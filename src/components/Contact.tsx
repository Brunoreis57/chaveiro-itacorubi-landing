import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Instagram, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleCall = () => {
    window.open("tel:+5548988320711", "_self");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/chaveiroitacorubi", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5548988320711", "_blank");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você 24 horas por dia!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-card border-border/50 text-center hover:shadow-medium transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">Telefone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">(48) 98832-0711</p>
              <Button variant="outline" size="sm" onClick={handleCall} className="w-full">
                Ligar Agora
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 text-center hover:shadow-medium transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">Instagram</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">@chaveiroitacorubi</p>
              <Button variant="outline" size="sm" onClick={handleInstagram} className="w-full">
                Seguir
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 text-center hover:shadow-medium transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">Localização</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Florianópolis/SC</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 text-center hover:shadow-medium transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">Horário</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">24 horas por dia</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-primary text-primary-foreground max-w-2xl mx-auto shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl">Emergência?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-primary-foreground/90">
                Precisa de atendimento imediato? Entre em contato conosco agora mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  onClick={handleCall}
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleWhatsApp}
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;