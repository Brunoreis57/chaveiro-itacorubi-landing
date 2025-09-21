import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, Lock, Settings, Car, Smartphone } from "lucide-react";
import aberturaEmergencial from "@/assets/abertura-emergencial.jpg";
import instalacaoFechaduras from "@/assets/instalacao-fechaduras.jpg";
import trocaSegredo from "@/assets/troca-segredo.jpg";
import chaveiroAutomotivo from "@/assets/chaveiro-automotivo.jpg";
import fechaduraEletronica from "@/assets/fechadura-eletronica.jpg";

const Services = () => {
  const services = [
    {
      icon: Key,
      image: aberturaEmergencial,
      title: "Abertura Emergencial",
      description: "Abertura de fechaduras simples, tetra e outros modelos para casos de perda da chave ou travamento da fechadura.",
    },
    {
      icon: Lock,
      image: instalacaoFechaduras,
      title: "Venda e Instalação de Fechaduras",
      description: "Venda e instalação de fechaduras simples, tetra e outros modelos com garantia de qualidade.",
    },
    {
      icon: Settings,
      image: trocaSegredo,
      title: "Troca de Segredo",
      description: "Troca de segredo de fechaduras simples, tetra e outros modelos com rapidez e segurança.",
    },
    {
      icon: Car,
      image: chaveiroAutomotivo,
      title: "Chaveiro Automotivo",
      description: "Abertura de carros de forma segura, sem danificar o veículo ou sistema elétrico.",
    },
    {
      icon: Smartphone,
      image: fechaduraEletronica,
      title: "Instalação de Fechadura Eletrônica",
      description: "Instalação de fechadura eletrônica de diferentes marcas com tecnologia avançada.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialidades diversas para atender todas as suas necessidades de segurança e acesso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center backdrop-blur-sm bg-white/10">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;