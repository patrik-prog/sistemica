
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Heart, MessageCircle, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FamilyTherapyPage = () => {
  const issues = [
    {
      icon: MessageCircle,
      title: 'Komunikacijski problemi',
      description: 'Poteškoće u izražavanju osjećaja i potreba, nerazumijevanje između partnera ili članova obitelji'
    },
    {
      icon: Shield,
      title: 'Rješavanje konflikata',
      description: 'Česte svađe, nesuglasice oko važnih odluka, problemi s postavljanjem granica'
    },
    {
      icon: Heart,
      title: 'Emocionalna distanca',
      description: 'Osjećaj udaljenosti, gubitak intimnosti, nedostatak emocionalne povezanosti'
    },
    {
      icon: Users,
      title: 'Roditeljski izazovi',
      description: 'Različiti pristupi odgoju, problemi s disciplinom, suočavanje s promjenama u obitelji'
    }
  ];

  const benefits = [
    'Poboljšana komunikacija i razumijevanje',
    'Jačanje emocionalne povezanosti',
    'Razvoj zdravijih obrazaca ponašanja',
    'Učinkovitije rješavanje konflikata',
    'Bolja suradnja u roditeljstvu',
    'Povećano povjerenje i intimnost'
  ];

  const faqs = [
    {
      question: 'Koliko dugo traje obiteljska ili partnerska terapija?',
      answer: 'Trajanje terapije ovisi o specifičnim potrebama i ciljevima svake obitelji ili para. Neki parovi vide poboljšanja nakon nekoliko sesija, dok drugi preferiraju dugoročniju podršku. Obično preporučujemo početnih 6-10 sesija, nakon čega zajedno procjenjujemo napredak i odlučujemo o nastavku.'
    },
    {
      question: 'Moraju li svi članovi obitelji ili oba partnera biti prisutni?',
      answer: 'Idealno je da svi uključeni budu prisutni na sesijama, ali to nije uvijek moguće ili potrebno. Ponekad počinjemo s individualnim sesijama prije zajedničkih susreta. Važno je da svi sudionici budu motivirani za promjenu i otvoreni za rad na odnosima.'
    },
    {
      question: 'Što ako jedan partner ne želi doći na terapiju?',
      answer: 'Čak i ako jedan partner nije spreman za terapiju, drugi može doći sam i raditi na sebi. Često se dešava da kada jedan partner počne mijenjati svoje ponašanje, to pozitivno utječe na cijeli odnos. Također možemo razgovarati o načinima kako motivirati partnera da se pridruži.'
    },
    {
      question: 'Je li terapija povjerljiva?',
      answer: 'Apsolutno. Sve što se dijeli tijekom terapijskih sesija ostaje strogo povjerljivo. Postoje samo rijetke iznimke propisane zakonom (npr. opasnost po život). Na početku terapije detaljno razgovaramo o pravilima povjerljivosti i privatnosti.'
    },
    {
      question: 'Kako izgleda tipična sesija obiteljske ili partnerske terapije?',
      answer: 'Sesije obično traju 50-60 minuta. Započinjemo razgovorom o trenutnim izazovima i napretku od prošle sesije. Koristimo različite tehnike - od strukturiranih vježbi komunikacije do otvorenih razgovora. Svaka sesija završava s dogovorom o zadacima ili ciljevima za period do sljedeće sesije.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Obiteljsko i partnersko savjetovanje - Psihoterapija</title>
        <meta name="description" content="Profesionalna podrška za parove i obitelji. Poboljšajte komunikaciju, riješite konflikte i ojačajte međusobne odnose." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Obiteljsko i partnersko savjetovanje
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Zajedno gradimo jače, zdravije i ispunjenije odnose kroz razumijevanje, 
              komunikaciju i međusobnu podršku.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Family Therapy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Što je obiteljska i partnerska terapija?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Obiteljska i partnerska terapija je oblik psihoterapije koji se fokusira na poboljšanje 
                  odnosa između članova obitelji ili partnera. Umjesto da se fokusiramo samo na pojedinca, 
                  gledamo na odnose kao cjelinu i radimo na dinamici koja utječe na sve uključene.
                </p>
                <p>
                  Ova vrsta terapije pomaže parovima i obiteljima da bolje razumiju jedni druge, 
                  poboljšaju komunikaciju, riješe konflikte i izgrade jače emocionalne veze. 
                  Bez obzira prolazite li kroz težak period ili jednostavno želite ojačati svoj odnos, 
                  terapija može biti vrijedan alat.
                </p>
                <p>
                  Pristup je suradnički - zajedno identificiramo probleme, postavljamo ciljeve i 
                  radimo na praktičnim rješenjima koja funkcioniraju za vašu jedinstvenu situaciju.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Česti izazovi s kojima radimo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Svaki odnos prolazi kroz izazove. Evo nekih najčešćih tema s kojima parovi i obitelji dolaze na terapiju.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {issues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <issue.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{issue.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {issue.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Kako izgledaju sesije?
              </h2>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Trajanje i učestalost</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Sesije obično traju 50-60 minuta i održavaju se jednom tjedno ili prema dogovoru. 
                          Fleksibilni smo i prilagođavamo raspored vašim potrebama.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Struktura sesije</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Svaka sesija započinje razgovorom o trenutnim izazovima i napretku. 
                          Koristimo različite tehnike - od vježbi komunikacije do strukturiranih razgovora. 
                          Sesija završava s jasnim koracima za period do sljedećeg susreta.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Siguran prostor</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Stvaramo okruženje bez osude gdje svi sudionici mogu otvoreno izraziti svoje 
                          osjećaje i potrebe. Povjerljivost i poštovanje su temelj našeg rada.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Prednosti terapije
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Što možete očekivati od obiteljske i partnerske terapije
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Često postavljana pitanja
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Spremni ojačati svoj odnos?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Kontaktirajte me za prvi razgovor i započnite put prema zdravijim i ispunjenijim odnosima.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Kontaktirajte me za prvi razgovor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FamilyTherapyPage;
