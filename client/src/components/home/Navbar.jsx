import { Bars3Icon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="tw-bg-gray-900 tw-sticky tw-top-0 tw-border-b tw-border-gray-700">
      <div className="tw-max-w-screen-xl tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto tw-p-4">
        <Link
          to="/"
          className="tw-flex tw-items-center tw-space-x-3 rtl:tw-space-x-reverse"
        >
          <img src="/clublogo.png" className="tw-h-8" alt="Xceed Logo" />
          {/* <span class="tw-self-center tw-text-2xl tw-font-semibold tw-whitespace-nowrap dark:tw-text-white">Xceed</span> */}
        </Link>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="tw-inline-flex tw-items-center tw-p-2 tw-w-10 tw-h-10 tw-justify-center tw-text-sm tw-text-gray-500 tw-rounded-lg md:tw-hidden hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-200 dark:tw-text-gray-400 dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="tw-sr-only">Open main menu</span>
          <Bars3Icon className="tw-w-6 tw-h-6" />
        </button>
        <div
          className={clsx(
            'tw-w-full md:tw-block md:tw-w-auto',
            navbarOpen ? 'tw-block' : 'tw-hidden'
          )}
          id="navbar-default"
        >
          <ul className="tw-list-none tw-font-medium tw-flex tw-flex-col tw-items-center tw-p-4 md:tw-p-0 tw-mt-4 tw-border tw-rounded-lg tw-space-y-5 md:tw-space-y-0 md:tw-flex-row md:tw-space-x-8 rtl:tw-space-x-reverse md:tw-mt-0 md:tw-border-0 tw-bg-gray-900 tw-border-gray-700">
            <li>
              <a
                href="#home"
                className="tw-block tw-py-2 tw-px-3 tw-text-cyan-600 tw-rounded md:tw-bg-transparent md:tw-text-cyan-600 md:tw-p-0 dark:tw-text-cyan-300 md:dark:tw-text-cyan-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="tw-block tw-py-2 tw-px-3 tw-text-white tw-rounded hover:tw-text-cyan-300 md:hover:tw-bg-transparent md:tw-border-0 md:hover:tw-text-cyan-600 md:tw-p-0 dark:tw-text-white md:dark:hover:tw-text-cyan-600 dark:hover:tw-bg-gray-700 md:dark:hover:tw-bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="tw-block tw-py-2 tw-px-3 tw-text-white tw-rounded hover:tw-text-cyan-300 md:hover:tw-bg-transparent md:tw-border-0 md:hover:tw-text-cyan-600 md:tw-p-0 dark:tw-text-white md:dark:hover:tw-text-cyan-600 dark:hover:tw-bg-gray-700 md:dark:hover:tw-bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="tw-block tw-py-2 tw-px-3 tw-text-white tw-rounded hover:tw-text-cyan-300 md:hover:tw-bg-transparent md:tw-border-0 md:hover:tw-text-cyan-600 md:tw-p-0 dark:tw-text-white md:dark:hover:tw-text-cyan-600 dark:hover:tw-bg-gray-700 md:dark:hover:tw-bg-transparent"
              >
                Team
              </a>
            </li>
            <li>
              <Link
                to="/login"
                className="tw-text-white tw-bg-gradient-to-r tw-from-cyan-600 tw-to-cyan-500 hover:tw-bg-gradient-to-bl focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-cyan-300 dark:focus:tw-ring-cyan-800 tw-font-bold tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
