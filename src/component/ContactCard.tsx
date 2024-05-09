import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IPropsContactCard {
  href: string;
  title: string;
  header?: string;
  subHeader?: string;
  mainImageUrl: string;
  mainImageAlt: string;
  subImageUrl?: string;
  subImageAlt?: string;
}

function ContactCard(props: IPropsContactCard) {
  const { href, header, subHeader, title, mainImageUrl, mainImageAlt, subImageUrl, subImageAlt } = props;

  return (
    <div className="group flex w-full">
      <Link
        href={href}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
        rel="noreferrer"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={mainImageAlt}
              fetchPriority="high"
              width="64"
              height="64"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              sizes="33vw"
              src={mainImageUrl}
            />
            {subImageUrl && subImageAlt && (
              <div className="relative -right-10 -top-6 inline-flex h-8 w-8 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
                <Image
                  alt={subImageAlt}
                  fetchPriority="high"
                  width="10"
                  height="10"
                  className="w-8 rounded-full border border-neutral-200 dark:border-neutral-700"
                  sizes="33vw"
                  src={subImageUrl}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-neutral-900 dark:text-neutral-100">{header}</p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{subHeader}</p>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">{title}</p>
          </div>
        </div>
        {subImageUrl && subImageAlt && (
          <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
            </svg>
          </div>
        )}
      </Link>
    </div>
  );
}

export default ContactCard;
