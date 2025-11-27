import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LeadCaptureDialog } from "@/components/LeadCaptureDialog";
import { Sparkles, Heart, Zap, Star } from "lucide-react";
import logoImg from "@/assets/logo-transforma.jpg";
import fernanda1 from "@/assets/fernanda-1.jpg";
import fernanda2 from "@/assets/fernanda-2.jpg";
import fernanda3 from "@/assets/fernanda-3.jpg";
import fernanda4 from "@/assets/fernanda-4.jpg";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const services = [
    {
      icon: Zap,
      title: "Emagrecimento",
      description: "Tratamentos avançados para eliminação de gordura localizada e conquista do corpo dos seus sonhos.",
      benefits: ["Resultados visíveis", "Procedimentos não invasivos", "Acompanhamento profissional"]
    },
    {
      icon: Sparkles,
      title: "Criolipólise",
      description: "Técnica revolucionária que congela e elimina células de gordura de forma definitiva.",
      benefits: ["Sem cirurgia", "Sem dor", "Resultados duradouros"]
    },
    {
      icon: Heart,
      title: "Harmonização de Glúteos",
      description: "Realce e contorno para conquistar um bumbum mais definido e harmonioso.",
      benefits: ["Contorno perfeito", "Resultados naturais", "Autoestima renovada"]
    },
    {
      icon: Star,
      title: "Tratamento de Flacidez",
      description: "Recupere a firmeza da pele com tecnologias de ponta para um corpo mais jovem.",
      benefits: ["Pele mais firme", "Resultados progressivos", "Rejuvenescimento corporal"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src={logoImg} alt="Transforma Clinic" className="h-12 w-auto" />
          <Button 
            onClick={() => setDialogOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-smooth"
          >
            Agendar Avaliação
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                Transforme seu corpo,
                <span className="block text-primary">renove sua confiança</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Com a Dra. Fernanda Santos, especialista em estética corporal, você alcança os resultados que sempre sonhou através de tratamentos personalizados e tecnologia de ponta.
              </p>
              <Button 
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-soft transition-smooth"
              >
                Quero Transformar Meu Corpo
              </Button>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img 
                  src={fernanda1} 
                  alt="Dra. Fernanda Santos" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={fernanda2} 
                  alt="Fernanda Santos" 
                  className="rounded-2xl shadow-elegant w-full h-auto object-cover"
                />
                <img 
                  src={fernanda3} 
                  alt="Fernanda Santos" 
                  className="rounded-2xl shadow-elegant w-full h-auto object-cover mt-8"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Conheça a Dra. Fernanda Santos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Especialista dedicada em estética corporal, a Dra. Fernanda Santos combina técnicas inovadoras com um atendimento humanizado e personalizado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com anos de experiência e centenas de pacientes transformadas, ela é referência em tratamentos que unem resultados reais com bem-estar e autoestima.
              </p>
              <Button 
                onClick={() => setDialogOpen(true)}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Falar com a Dra. Fernanda
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Nossos Tratamentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Procedimentos de última geração para você conquistar o corpo que sempre desejou
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 border-border bg-card hover:shadow-elegant transition-smooth cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => setDialogOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-soft transition-smooth"
            >
              Quero Conhecer os Tratamentos
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial/CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Sua transformação começa hoje
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Não deixe para depois o corpo e a autoestima que você merece. Agende agora mesmo sua avaliação gratuita e descubra qual o melhor tratamento para você.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  Avaliação personalizada gratuita
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  Planos de tratamento sob medida
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </span>
                  Acompanhamento de perto durante todo o processo
                </li>
              </ul>
              <Button 
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-soft transition-smooth"
              >
                Agendar Minha Avaliação Gratuita
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img 
                  src={fernanda4} 
                  alt="Dra. Fernanda Santos" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Pronta para se transformar?
          </h2>
          <p className="text-xl text-muted-foreground">
            Dê o primeiro passo rumo ao corpo dos seus sonhos
          </p>
          <Button 
            size="lg"
            onClick={() => setDialogOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-8 shadow-soft transition-smooth"
          >
            Falar com a Dra. Fernanda Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-secondary/20">
        <div className="container mx-auto max-w-6xl text-center">
          <img src={logoImg} alt="Transforma Clinic" className="h-10 w-auto mx-auto mb-4" />
          <p className="text-muted-foreground">
            © 2024 Transforma Clinic - Dra. Fernanda Santos. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Lead Capture Dialog */}
      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Index;
