import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Award, BookOpen, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const AboutPage = () => {
  const values = [{
    icon: Heart,
    title: 'Empatija i razumijevanje',
    description: 'Vjerujem da je svaka osoba jedinstvena i zaslužuje biti saslušana i razumljena bez osude'
  }, {
    icon: Users,
    title: 'Suradnički pristup',
    description: 'Terapija je zajednički put - vi ste stručnjak za svoj život, ja sam ovdje da vas vodim'
  }, {
    icon: Sparkles,
    title: 'Osobni rast',
    description: 'Vjerujem u potencijal svake osobe za promjenu, rast i ostvarivanje punog života'
  }];
  return <>
      <Helmet>
        <title>O meni - Psihoterapija</title>
        <meta name="description" content="Upoznajte vašeg terapeuta. Profesionalno iskustvo, terapijski pristup i vrijednosti koje vode moj rad s klijentima." />
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
              O meni
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dobrodošli. Drago mi je što ste ovdje i što razmatrate mogućnost terapije.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Introduction with Photo */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" alt="Profesionalna fotografija terapeuta u mirnom, toplom okruženju" className="w-full h-auto object-cover" />
                </div>
              </motion.div>

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
                <h2 className="text-3xl font-bold text-foreground">
                  Moje ime je Ivana.
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Po struci sam socijalna radnica sa završenim poslijediplomskim specijalističkim studijem iz
područja prava djece te obiteljski sistemski psihoterapeut.
Profesionalno iskustvo stekla sam kroz višegodišnji rad s pojedincima, parovima i obiteljima u
različitim životnim situacijama i izazovima. Tijekom tog rada, vodila sam grupne psihoterapije s
osobama koje se liječe od ovisnosti o alkoholu, provodila obiteljsku terapiju, kao i vodila
socioterapijske grupe s osobama koje se suočavaju s depresivnim i anksioznim teškoćama.
                  </p>
                  <p>
                    U radu sam se susretala i s različitim životnim krizama i izazovima koji utječu na mentalno zdravlje i odnose, poput gubitaka, partnerskih konflikata, nevjere, obiteljskih poteškoća i drugih zahtjevnih životnih situacija.
                  </p>
                  <p>
                    Tako je nastao Sistemica centar - mjesto gdje se odnosi promatraju s pažnjom, a promjena gradi korak po korak, kroz razumijevanje i povezanost.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Profesionalno iskustvo i edukacija
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">Iskustvo</CardTitle>
                        <p className="text-muted-foreground leading-relaxed">
                          [godine iskustva] godina rada s pojedincima, parovima i obiteljima u 
                          različitim životnim situacijama i izazovima.
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">Edukacija</CardTitle>
                        <p className="text-muted-foreground leading-relaxed">
                          [naziv edukacije] - formalna edukacija iz područja psihoterapije i 
                          savjetovanja, uz kontinuiranu stručnu nadogradnju i superviziju.
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">Certifikati i specijalizacije</CardTitle>
                        <p className="text-muted-foreground leading-relaxed">
                          [certifikat] - dodatne specijalizacije i certifikati koji omogućuju 
                          pružanje kvalitetne i stručne podrške.
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapeutic Approach */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
                Moj terapijski pristup
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Obiteljski sam sistemski psihoterapeut, što znači da u svom radu primjenjujem sistemski pristup, koji pojedinca promatra u kontekstu njegovih odnosa i životnog okruženja, s posebnim naglaskom na obitelj, partnerske odnose i obrasce koji se često prenose kroz generacije.
                </p>
                <p>
                  Psihoterapija je proces koji zahtijeva vrijeme i povjerenje. U sigurnom i povjerljivom prostoru
klijenti imaju priliku govoriti o svojim iskustvima, osjećajima i odnosima te postupno razumjeti
obrasce koji se ponavljaju u njihovom životu.
                </p>
                <p>
                  Rad može biti individualan, partnerski ili obiteljski, ovisno o potrebama i situaciji klijenata.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
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
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Vrijednosti koje vode moj rad
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Ove vrijednosti su temelj svega što radim i kako pristupam svakom klijentu
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => <motion.div key={index} initial={{
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
                    <Card className="h-full text-center hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <value.icon className="w-7 h-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl mb-3">{value.title}</CardTitle>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardHeader>
                    </Card>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why I Chose This Profession */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
                Zašto sam odabrao/la ovaj poziv
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Oduvijek sam bla fascinirana ljudskim umom, emocijama i odnosima. Shvatila sam da najveća ispunjenje dolazi iz pomaganja drugima da pronađu svoj put, razumiju sebe i ostvare život koji žele živjeti.
                </p>
                <p>
                  Svaki dan u ovom poslu je privilegija - biti dio nečijeg puta prema boljitku, 
                  svjedočiti njihovoj snazi i rastu, dijeliti trenutke proboja i razumijevanja. 
                  To je posao koji zahtijeva predanost, ali donosi neizmjernu nagradu.
                </p>
                <p>
                  Vjerujem da svaka osoba ima u sebi resurse i snagu potrebnu za promjenu. 
                  Ponekad samo trebamo nekoga tko će nas voditi, podržati i pomoći nam vidjeti 
                  ono što sami ne možemo. To je moja uloga - biti taj vodič, podrška i siguran 
                  prostor na vašem putu.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Započnimo zajedno
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ako tražite podršku, razumijevanje i vodstvo na svom putu, ovdje sam za vas. 
                Kontaktirajte me i dogovorimo prvi razgovor.
              </p>
              <Link to="/kontakt">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  Dogovorite razgovor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};
export default AboutPage;