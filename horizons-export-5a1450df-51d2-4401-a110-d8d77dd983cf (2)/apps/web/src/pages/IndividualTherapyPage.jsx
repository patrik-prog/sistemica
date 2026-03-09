
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Brain, Heart, Sparkles, Shield, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const IndividualTherapyPage = () => {
  const issues = [
    {
      icon: Brain,
      title: 'Anksioznost i stres',
      description: 'Suočavanje s pretjeranom zabrinutošću, napetošću, paničnim napadajima i svakodnevnim stresom'
    },
    {
      icon: Heart,
      title: 'Depresija i tuga',
      description: 'Rad na osjećajima tuge, beznađa, gubitka motivacije i interesa za aktivnosti'
    },
    {
      icon: Sparkles,
      title: 'Samopoštovanje',
      description: 'Jačanje samopouzdanja, prihvaćanje sebe i razvoj pozitivne slike o sebi'
    },
    {
      icon: User,
      title: 'Životne tranzicije',
      description: 'Podrška tijekom velikih životnih promjena - karijera, odnosi, gubitak, selidba'
    },
    {
      icon: Shield,
      title: 'Trauma i prošla iskustva',
      description: 'Procesiranje teških iskustava iz prošlosti i njihovog utjecaja na sadašnjost'
    },
    {
      icon: Brain,
      title: 'Osobni rast',
      description: 'Bolje razumijevanje sebe, svojih potreba, vrijednosti i životnih ciljeva'
    }
  ];

  const benefits = [
    'Bolje razumijevanje vlastitih emocija i potreba',
    'Razvoj zdravijih mehanizama suočavanja',
    'Smanjenje simptoma anksioznosti i depresije',
    'Povećano samopoštovanje i samopouzdanje',
    'Poboljšanje odnosa s drugima',
    'Veća emocionalna stabilnost',
    'Jasnoća u donošenju životnih odluka',
    'Razvoj osobnih snaga i resursa'
  ];

  const faqs = [
    {
      question: 'Koliko dugo traje individualna terapija?',
      answer: 'Trajanje terapije je individualno i ovisi o vašim ciljevima i potrebama. Neki klijenti osjećaju poboljšanje nakon nekoliko sesija, dok drugi preferiraju dugoročniju podršku. Obično preporučujemo početnih 8-12 sesija, nakon čega zajedno procjenjujemo napredak i odlučujemo o nastavku. Važno je da terapija traje onoliko koliko vam je potrebno.'
    },
    {
      question: 'Kako znam je li terapija za mene?',
      answer: 'Terapija može pomoći gotovo svakome tko prolazi kroz izazove ili želi bolje razumjeti sebe. Ako se osjećate preopterećeno, tužno, anksiozno, ili jednostavno želite razgovarati s nekim tko će vas razumjeti bez osude - terapija može biti korisna. Prvi razgovor je prilika da zajedno procijenimo može li vam terapija pomoći.'
    },
    {
      question: 'Što ako ne znam o čemu razgovarati?',
      answer: 'To je potpuno u redu i normalno! Mnogi klijenti dolaze bez jasne ideje o čemu žele razgovarati. Kao terapeut, pomoći ću vam identificirati teme koje su važne za vas kroz pitanja i razgovor. Ponekad je samo prisutnost u sigurnom prostoru dovoljna da se osjećaji i misli počnu otvarati prirodno.'
    },
    {
      question: 'Je li ono što kažem u terapiji povjerljivo?',
      answer: 'Apsolutno. Sve što podijelite tijekom terapije ostaje strogo povjerljivo. Postoje samo rijetke zakonske iznimke (npr. ako postoji neposredna opasnost po život). Povjerljivost je temelj terapijskog odnosa i vaša privatnost je moj prioritet. Na prvoj sesiji detaljno razgovaramo o pravilima povjerljivosti.'
    },
    {
      question: 'Kako izgleda tipična terapijska sesija?',
      answer: 'Sesije traju 50-60 minuta i odvijaju se u opuštenom, sigurnom okruženju. Obično započinjemo razgovorom o tome kako ste se osjećali od prošle sesije i što se događalo u vašem životu. Zajedno istražujemo vaše misli, osjećaje i ponašanja, koristeći različite tehnike ovisno o vašim potrebama. Svaka sesija je prilagođena vama i vašem trenutnom stanju.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Individualno savjetovanje - Psihoterapija</title>
        <meta name="description" content="Profesionalna individualna terapija za suočavanje s anksioznošću, stresom, depresijom i osobnim izazovima. Sigurna podrška za vaš osobni rast." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Individualno savjetovanje
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Osobna podrška na vašem putu prema boljitku, razumijevanju sebe i 
              ostvarivanju punog potencijala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Individual Therapy */}
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
                Što je individualna terapija?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Individualna terapija je osobni prostor samo za vas - mjesto gdje možete otvoreno 
                  razgovarati o svojim mislima, osjećajima i izazovima bez straha od osude. 
                  To je suradnički proces u kojem zajedno radimo na razumijevanju vaših potreba i 
                  pronalaženju načina za suočavanje s teškoćama.
                </p>
                <p>
                  Za razliku od razgovora s prijateljima ili obitelji, terapija pruža profesionalnu 
                  podršku i strukturiran pristup rješavanju problema. Kao vaš terapeut, ovdje sam da 
                  vas slušam, razumijem i vodim kroz proces osobnog rasta i iscjeljenja.
                </p>
                <p>
                  Bez obzira suočavate li se s anksioznošću, depresijom, stresom, životnim promjenama 
                  ili jednostavno želite bolje razumjeti sebe - individualna terapija može vam pomoći. 
                  Svaki put je jedinstven, a terapija se prilagođava vašim specifičnim potrebama i ciljevima.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Issues Addressed */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              S čim vam mogu pomoći
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Individualna terapija može biti korisna za širok spektar izazova i životnih situacija
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <issue.icon className="w-6 h-6 text-accent" />
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

      {/* What to Expect */}
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
                Što možete očekivati na sesijama
              </h2>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Trajanje i učestalost</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Sesije traju 50-60 minuta i obično se održavaju jednom tjedno. 
                          Fleksibilni smo i možemo prilagoditi raspored vašim potrebama i mogućnostima.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Siguran i podržavajući prostor</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Stvaram okruženje bez osude gdje se možete osjećati sigurno da podijelite 
                          svoje najdublje misli i osjećaje. Vaša privatnost i povjerenje su prioritet.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Sparkles className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Personalizirani pristup</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Svaka osoba je jedinstvena, pa prilagođavam terapijski pristup vašim 
                          specifičnim potrebama, ciljevima i stilu učenja. Koristim različite tehnike 
                          ovisno o tome što vam najbolje odgovara.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Aktivna suradnja</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Terapija nije pasivno slušanje - to je aktivna suradnja. Zajedno postavljamo 
                          ciljeve, istražujemo vaše misli i osjećaje, te razvijamo strategije za 
                          suočavanje s izazovima. Vi ste stručnjak za svoj život, ja sam ovdje da vas vodim.
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
                Prednosti individualne terapije
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Kako vam terapija može pomoći u svakodnevnom životu
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
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Spremni započeti svoj put?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Zakazite svoju prvu sesiju i napravite prvi korak prema boljitku i osobnom rastu.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Zakazite sesiju
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

export default IndividualTherapyPage;
