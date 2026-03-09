
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Brain, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const BlogPage = () => {
  const { toast } = useToast();

  const blogPosts = [
    {
      icon: Heart,
      title: 'Kako razumjeti emocije u odnosima',
      summary: 'Emocije su srce svakog odnosa. Naučite prepoznati, razumjeti i zdravo izraziti svoje osjećaje kako biste izgradili dublje i autentičnije veze s ljudima oko sebe.',
      category: 'Odnosi',
      readTime: '5 min čitanja'
    },
    {
      icon: Brain,
      title: 'Savladavanje anksioznosti u svakodnevnom životu',
      summary: 'Anksioznost može biti iscrpljujuća, ali postoje praktični načini za njeno upravljanje. Otkrijte tehnike disanja, mindfulnessa i kognitivne strategije koje vam mogu pomoći.',
      category: 'Mentalno zdravlje',
      readTime: '7 min čitanja'
    },
    {
      icon: Sparkles,
      title: 'Važnost samopoštovanja za mentalno zdravlje',
      summary: 'Samopoštovanje je temelj mentalnog zdravlja. Istražite kako razviti zdraviji odnos sa sobom, prihvatiti svoje nesavršenosti i graditi samopouzdanje kroz svakodnevne prakse.',
      category: 'Osobni rast',
      readTime: '6 min čitanja'
    }
  ];

  const handleReadMore = (title) => {
    toast({
      title: "🚧 Članak uskoro dostupan",
      description: `Članak "${title}" je u pripremi. Uskoro ćemo objaviti više sadržaja o mentalnom zdravlju!`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Psihoterapija</title>
        <meta name="description" content="Edukativni članci o mentalnom zdravlju, odnosima, anksioznosti i osobnom rastu. Praktični savjeti i stručne informacije." />
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
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Blog o mentalnom zdravlju
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Edukativni sadržaji, praktični savjeti i stručne informacije koje vam mogu pomoći 
              na putu prema boljem razumijevanju sebe i boljitku.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
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
                Zašto je edukacija o mentalnom zdravlju važna?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Razumijevanje mentalnog zdravlja ključno je za kvalitetan život. Što više znamo o 
                  tome kako funkcioniraju naše emocije, misli i ponašanja, to smo bolje opremljeni 
                  za suočavanje s životnim izazovima.
                </p>
                <p>
                  Kroz ovaj blog dijelim znanje, alate i perspektive koje mogu pomoći u svakodnevnom 
                  životu. Teme pokrivaju širok spektar - od upravljanja stresom i anksioznošću, 
                  preko izgradnje zdravijih odnosa, do osobnog rasta i samopoštovanja.
                </p>
                <p>
                  Cilj je demistificirati mentalno zdravlje, smanjiti stigmu i pružiti praktične 
                  informacije koje možete primijeniti u svom životu. Mentalno zdravlje nije luksuz - 
                  to je temelj našeg blagostanja.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Najnoviji članci
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Istražite teme koje vas zanimaju i naučite više o mentalnom zdravlju
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/30 flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <post.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-3">{post.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group"
                      onClick={() => handleReadMore(post.title)}
                    >
                      <span>Pročitaj više</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Više sadržaja uskoro
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Redovito objavljujemo nove članke o mentalnom zdravlju, odnosima i osobnom rastu. 
                Pratite nas kako biste bili u toku s najnovijim sadržajima i praktičnim savjetima.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
