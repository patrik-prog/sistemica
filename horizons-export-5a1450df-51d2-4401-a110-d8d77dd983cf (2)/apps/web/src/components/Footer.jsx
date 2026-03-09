import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  const quickLinks = [{
    path: '/',
    label: 'Početna'
  }, {
    path: '/obiteljska-terapija',
    label: 'Obiteljsko savjetovanje'
  }, {
    path: '/individualna-terapija',
    label: 'Individualno savjetovanje'
  }, {
    path: '/blog',
    label: 'Blog'
  }, {
    path: '/o-meni',
    label: 'O meni'
  }, {
    path: '/kontakt',
    label: 'Kontakt'
  }];
  return <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Practice Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-semibold">Psihoterapija</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Profesionalna podrška za mentalno zdravlje i emocionalno blagostanje. 
              Ovdje ste sigurni, razumljeni i podržani.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-base font-semibold mb-4 block">Brzi linkovi</span>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-base font-semibold mb-4 block">Kontakt informacije</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">ivana.vidulin85@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+385 97 600 9448</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Veruda ulica 6, Pula 52100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Traženje pomoći je znak snage, ne slabosti.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Psihoterapija. Sva prava pridržana.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;