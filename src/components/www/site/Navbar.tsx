import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const opciones = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Contacto', href: '/contacto', current: false },
  { name: 'Descargar CV', href: '/cv.pdf', download: true },
];

const opcionesPerfil = [
  { nombre: 'Profile', url: '/perfil/mi' },
  { nombre: 'Setting', url: '/perfil/setting' },
  { nombre: 'DashBoard', url: '/perfil/admin' },
  { nombre: 'Salir', url: '/perfil/out' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-neutral-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=gray&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              {opciones.map((item) =>
                item.download ? (
                  <a
                    key={item.name}
                    href={item.href}
                    download
                    className="text-gray-200 hover:bg-neutral-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'bg-neutral-800 text-white' : 'text-gray-200 hover:bg-neutral-700 hover:text-white',
                      'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full bg-neutral-900 p-1 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="flex rounded-full bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/img/2BF41C0F-3A4C-4F86-9858-66ED4BBDA1A2.JPG"
                    alt=""
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                {opcionesPerfil.map((item) => (
                  <MenuItem key={item.nombre}>
                    <Link
                      to={item.url}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.nombre}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {opciones.map((item) =>
            item.download ? (
              <a
                key={item.name}
                href={item.href}
                download
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-neutral-700 hover:text-white"
              >
                {item.name}
              </a>
            ) : (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-neutral-800 text-white' : 'text-gray-200 hover:bg-neutral-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
