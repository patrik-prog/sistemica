import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
const ContactPage = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Greška",
        description: "Molimo unesite vaše ime.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.email.trim()) {
      toast({
        title: "Greška",
        description: "Molimo unesite vašu email adresu.",
        variant: "destructive"
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Greška",
        description: "Molimo unesite valjanu email adresu.",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.message.trim()) {
      toast({
        title: "Greška",
        description: "Molimo unesite vašu poruku.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Store in localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      toast({
        title: "Poruka uspješno poslana!",
        description: "Hvala što ste me kontaktirali. Javit ću vam se uskoro."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredContact: 'email',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  const contactInfo = [{
    icon: Mail,
    title: 'Email',
    value: '[email@example.com]',
    description: 'Odgovorim u roku 24 sata'
  }, {
    icon: Phone,
    title: 'Telefon',
    value: '[+385 XX XXX XXXX]',
    description: 'Pon-Pet, 9:00-17:00'
  }, {
    icon: MapPin,
    title: 'Adresa',
    value: '[Adresa ordinacije]',
    description: '[Grad, Poštanski broj]'
  }, {
    icon: Clock,
    title: 'Radno vrijeme',
    value: '[Radno vrijeme]',
    description: 'Termini po dogovoru'
  }];
  return <>
      <Helmet>
        <title>Kontakt - Psihoterapija</title>
        <meta name="description" content="Kontaktirajte me za zakazivanje terapijske sesije. Dostupan sam putem emaila, telefona ili kontakt forme." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Kontaktirajte me
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Traženje pomoći je hrabar korak. Ovdje sam da vas saslušam i podržim. 
              Javite mi se i dogovorimo prvi razgovor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Pošaljite poruku</CardTitle>
                    <CardDescription>
                      Popunite formu i javit ću vam se u najkraćem mogućem roku
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ime i prezime *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Vaše ime" className="text-foreground" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email adresa *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="vasa.email@example.com" className="text-foreground" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+385 XX XXX XXXX" className="text-foreground" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredContact">Preferirani način kontakta</Label>
                        <select id="preferredContact" name="preferredContact" value={formData.preferredContact} onChange={handleChange} className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                          <option value="email">Email</option>
                          <option value="phone">Telefon</option>
                          <option value="any">Bilo koji</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Poruka *</Label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Opišite ukratko razlog kontakta ili pitanja koja imate..." rows={5} className="text-foreground resize-none" required />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Šaljem...' : <>
                            Pošalji poruku
                            <Send className="ml-2 w-4 h-4" />
                          </>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Kontakt informacije
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Možete me kontaktirati putem forme, emaila ili telefona. 
                    Odgovaram na sve upite i trudim se javiti u najkraćem mogućem roku.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                            <p className="text-foreground mb-1">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>

                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Povjerljivost zajamčena
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Sve informacije koje podijelite sa mnom ostaju strogo povjerljive. 
                          Vaša privatnost i sigurnost su moj prioritet.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Spremni zakazati razgovor?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Prvi korak je najvažniji. Kontaktirajte me danas i započnimo vaš put prema boljitku.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all" onClick={() => window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })}>
                Zakažite rezgovor
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reassuring Message */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "Traženje pomoći nije znak slabosti - to je hrabar čin brige o sebi. 
                Svaki put počinje prvim korakom, i ja sam ovdje da vas podržim na tom putu."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};
export default ContactPage;