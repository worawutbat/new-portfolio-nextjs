'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CardBody, CardContainer, CardItem } from './threed-card';

interface IPropsImageCardWithText {
  src: string;
  title: string;
  subTitle?: string;
  description?: string;
  alt?: string;
  href?: string;
}

export default function ImageCardWithText({ src, title, subTitle, description, alt, href }: IPropsImageCardWithText) {
  return (
    <Link key={src} href={href || '/'} target="_blank" rel="noreferrer" title={alt}>
      <CardContainer className="">
        <CardBody>
          <CardItem translateZ="100" className="w-full mt-4">
            <CardItem translateZ="100" className="w-full mt-4 rounded-lg">
              <Image src={src} height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt={alt || 'overview'} />
            </CardItem>
          </CardItem>
          <div className="my-2">
            <div className="mt-20 w-full text-lg font-extrabold">{title}</div>
            {subTitle && <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">{subTitle}</p>}
            {description && <div className="!line-clamp-2 w-full">{description}</div>}
          </div>
        </CardBody>
      </CardContainer>
      {/* {description && <div className="line-clamp-3">{description}</div>} */}
    </Link>
  );
}
