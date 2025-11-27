import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  phone: z.string().trim().min(8, "Telefone inválido").max(20, "Telefone muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo")
});

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LeadCaptureDialog = ({ open, onOpenChange }: LeadCaptureDialogProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate using zod schema
    const validation = leadSchema.safeParse({ name, phone, email });
    
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        title: "Erro de validação",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database with validated data
      const { name: validatedName, phone: validatedPhone, email: validatedEmail } = validation.data;
      const { error } = await supabase
        .from('leads')
        .insert([{ name: validatedName, phone: validatedPhone, email: validatedEmail }]);

      if (error) throw error;

      toast({
        title: "Dados enviados!",
        description: "Você será redirecionada para o WhatsApp em instantes.",
      });

      // Clear form
      setName("");
      setPhone("");
      setEmail("");
      onOpenChange(false);

      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        window.open("https://wa.link/c9hzra", "_blank");
      }, 1000);

    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border shadow-elegant">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-foreground">
            Fale com a Fernanda
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Preencha seus dados para continuar no WhatsApp
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Nome completo</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-border focus:ring-primary"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">WhatsApp</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-border focus:ring-primary"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-border focus:ring-primary"
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-smooth"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Continuar no WhatsApp"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
