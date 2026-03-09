import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, User, CheckCircle, ArrowRight, MessageCircle, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const HomePage = () => {
  const services = [{
    icon: Users,
    title: 'Obiteljsko i partnersko savjetovanje',
    description: 'Podrška za parove i obitelji u rješavanju komunikacijskih izazova, konflikata i jačanju međusobnih odnosa.',
    link: '/obiteljska-terapija'
  }, {
    icon: User,
    title: 'Individualno savjetovanje',
    description: 'Osobna podrška u suočavanju s anksioznošću, stresom, životnim tranzicijama i osobnim izazovima.',
    link: '/individualna-terapija'
  }];
  const benefits = [{
    icon: Heart,
    title: 'Emocionalna podrška',
    description: 'Siguran prostor za izražavanje osjećaja bez osude'
  }, {
    icon: MessageCircle,
    title: 'Poboljšana komunikacija',
    description: 'Naučite zdravije načine izražavanja potreba i slušanja drugih'
  }, {
    icon: Shield,
    title: 'Povjerljivost',
    description: 'Vaša privatnost i povjerenje su naš prioritet'
  }, {
    icon: Sparkles,
    title: 'Osobni rast',
    description: 'Razvijte bolje razumijevanje sebe i svojih odnosa'
  }];
  const processSteps = [{
    number: '01',
    title: 'Prvi kontakt',
    description: 'Javite nam se putem telefona, emaila ili kontakt forme. Dogovorit ćemo termin koji vam odgovara.'
  }, {
    number: '02',
    title: 'Upoznavanje',
    description: 'Na prvom susretu razgovaramo o vašim potrebama, očekivanjima i ciljevima terapije.'
  }, {
    number: '03',
    title: 'Plan terapije',
    description: 'Zajedno stvaramo individualizirani plan rada prilagođen vašim specifičnim potrebama.'
  }, {
    number: '04',
    title: 'Redovite sesije',
    description: 'Kroz redovite susrete radimo na postizanju vaših ciljeva i osobnom rastu.'
  }];
  return <>
      <Helmet>
        <title>Psihoterapija - Profesionalna podrška za mentalno zdravlje</title>
        <meta name="description" content="Profesionalno psihoterapijsko savjetovanje za pojedince, parove i obitelji. Sigurna podrška u životnim izazovima." />
      </Helmet>

      {/* Hero Section - Background Image with Overlay */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://horizons-cdn.hostinger.com/5a1450df-51d2-4401-a110-d8d77dd983cf/571017838_122096733243093961_6725582307399346861_n-GuCep.jpg" alt="Mirna priroda koja simbolizira unutarnji mir i emocionalno blagostanje" className="w-full h-full object-cover" />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px] z-10"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Vaš psihoterapeut u Puli
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Sistemica centar mjesto je za obiteljsko i partnersko savjetovanje, individualnu psihoterapiju te podršku u suočavanju s različitim životnim izazovima.
            </p>
            <Link to="/kontakt">
              <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all">
                Dogovorite prvi razgovor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Emotional Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Zašto psihoterapija?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ljudi se na psihoterapiju odlučuju iz različitih razloga. Ponekad je riječ o konkretnom problemu
- poteškoćama u partnerskom odnosu, obiteljskim konfliktima, osjećaju anksioznosti, tuge ili
kroničnog stresa. Ponekad je razlog manje jasan, ali prisutan je osjećaj da nešto u životu više ne
funkcionira kao prije ili da je svakodnevica postala preteška za nositi se s njom samostalno.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bez obzira prolazite li kroz težak period u odnosima, suočavate se s anksioznošću, 
                stresom ili jednostavno želite bolje razumjeti sebe - ovdje ste dobrodošli. 
                Traženje pomoći je znak snage i brige o sebi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Naše usluge
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pružamo profesionalnu podršku prilagođenu vašim individualnim potrebama
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <Link to={service.link}>
                  <Card className="h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary font-medium inline-flex items-center hover:gap-2 transition-all">
                        Saznajte više
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Prednosti terapije
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kako vam psihoterapija može pomoći u svakodnevnom životu
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Kako funkcionira proces?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jednostavni koraci do vaše prve terapijske sesije
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="relative">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary/5">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Spremni ste napraviti prvi korak?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Kontaktirajte nas danas i započnite put prema boljitku. 
                Prvi razgovor je prilika da se upoznamo i razgovaramo o vašim potrebama.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Dogovorite prvi razgovor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};
export default HomePage;