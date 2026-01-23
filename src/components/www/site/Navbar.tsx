// src/components/www/site/Navbar.tsx
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const opciones = [
  { name: 'Inicio', href: '/' },
  { name: 'Contacto', href: '/contacto' },
  { name: 'Proyecto', href: '/proyectos' },
  { name: 'Descargar CV', href: '/cv.pdf', download: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span className="text-primary font-bold tracking-tight text-xl">S.G.G</span>
            </div>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {opciones.map((item) => {
                const isCurrent = location.pathname === item.href;

                return item.download ? (
                  <a
                    key={item.name}
                    href={item.href}
                    download
                    className="text-foreground/70 hover:text-primary px-3 py-2 rounded-full text-sm font-medium transition-all"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      isCurrent 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-foreground/70 hover:bg-accent hover:text-foreground',
                      'px-4 py-2 rounded-full text-sm font-medium transition-all'
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-background/95 backdrop-blur-lg">
        <div className="space-y-1 px-2 pt-2 pb-3 border-t border-border/40">
          {opciones.map((item) => {
            const isCurrent = location.pathname === item.href;
            const activeClass = isCurrent ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-accent';

            return item.download ? (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                download
                className={classNames(activeClass, 'block rounded-lg px-3 py-2 text-base font-medium')}
              >
                {item.name}
              </DisclosureButton>
            ) : (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(activeClass, 'block rounded-lg px-3 py-2 text-base font-medium')}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}