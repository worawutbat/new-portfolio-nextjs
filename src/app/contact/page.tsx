import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Worawut Tititumjariy Portfolio',
};

const contactList = [
  {
    href: 'mailto:woravootbat@gmail.com',
    label: '📨: woravootbat@gmail.com',
  },
  {
    href: 'tel:080-4347241',
    label: '📳: 080-434-7241',
  },
];
function Contact() {
  return (
    <section className="space-y-4">
      <h2>Contact Info:</h2>
      <div className="space-y-4">
        {contactList.map(({ href, label }) => (
          <div className="group" title={label} key={label}>
            <a
              href={href}
              className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
            >
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">{label}</p>
              </div>
              <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
