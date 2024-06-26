/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import ThreeDCard from '~/component/ui/ThreeDCard';
import image from '~/constant/Image';
import TechStack from '~/constant/TechStack';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Worawut Tititumjariy Portfolio',
};

const storylogText = [
  "Led the transition from JavaScript to TypeScript in 2020-2021, independently refactoring the entire website's codebase.",
  'Introduced a feature enabling writers to register for cashout of gold coins, enhancing user experience.',
  'Led the successful launch of the Pinto product in 2022, advancing to a leadership role within the web team.',
  'Initiated a feedback event to integrate new team members, fostering seamless teamwork.',
];

const storylogTech = ['GraphQL', 'Firebase', 'NextJs', 'NodeJS', 'Redux', 'Sass', 'CSS3', 'TailwindCSS', 'React', 'HTML5', 'JavaScript', 'TypeScript', 'Vercel'];
const venueeTech = ['GraphQL', 'Firebase', 'NextJs', 'NodeJS', 'Redux', 'Sass', 'CSS3', 'React', 'HTML5', 'JavaScript', 'TypeScript', 'Styled-Component'];
const sobtidTech = ['Material UI', 'Redux', 'CSS3', 'NodeJS', 'React', 'HTML5', 'JavaScript', 'TypeScript'];
const nodeFrameTech = ['GraphQL', 'NodeJS', 'Redux', 'Sass', 'CSS3', 'Styled-Component', 'React', 'HTML5', 'JavaScript', 'TypeScript', 'Mongodb', 'Mongoose'];
const covidStack = ['HTML5', 'JavaScript', 'TypeScript', 'NodeJS', 'CSS3', 'TailwindCSS', 'Svelte'];
const firebaseTech = ['HTML5', 'JavaScript', 'TypeScript', 'NodeJS', 'CSS3', 'TailwindCSS', 'Firebase'];

function Work() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="my-6">
        I am Frontend Software Engineer. I am actively seeking a role that provides meaningful and valuable challenges for me. Currently, I am exploring opportunities that align
        with my career goals. Below is a summary of my professional experience thus far.
      </p>
      <div>
        <h3 className="font-medium text-xl mb-1 mt-8 tracking-tighter">Storylog</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Frontend Software Engineer (Web Application) | 2020 - 2023</p>
        <p>
          I joined{' '}
          <Link href="https://fictionlog.co/" className="underline">
            Storylog
          </Link>{' '}
          just before the onset of COVID-19. During my time there, I felt the strong dedication of my product team to delivering high-quality products and services to our users.
          This environment instilled in me the mindset and habit of consistently striving to create the best possible solutions and deliver top-notch code to serve our users
          effectively.
        </p>

        <ul className="ml-5 list-disc space-y-2">
          {storylogText.map((text, index) => (
            <li key={`Storylog-${index}`}>{text}</li>
          ))}

          <li className="space-y-2">
            <p>In 2023, I spearheaded two key initiatives:</p>
            <ol className="list-decimal ml-4 space-y-2">
              <li>Migrated asset fonts and images to a CDN, reducing serverless function costs by 10-20%</li>
              <li>Updated ebook pricing setup, emphasizing the importance of thorough testing and process improvement</li>
            </ol>
            <p>These experiences reinforced my dedication to delivering high-quality solutions, prioritizing rigorous testing, and continuous process improvement.</p>
          </li>
        </ul>

        <div className="space-y-3">
          {([...Object.values(image.feature.fictionlog)] as string[]).map((src) => (
            <Link key={src} href="https://fictionlog.co/" target="_blank" rel="noreferrer" aria-label="Fictionlog link">
              <ThreeDCard src={src} />
            </Link>
          ))}
          {([...Object.values(image.feature.pinto)] as string[]).map((src) => (
            <Link key={src} href="https://pintobook.com/" target="_blank" rel="noreferrer" aria-label="Pintobook link">
              <ThreeDCard src={src} />
            </Link>
          ))}
        </div>

        <section className="my-4">
          Stack:
          <div className="flex gap-1">
            {TechStack.filter((item) => storylogTech.includes(item.alt)).map((techItem) => (
              <Link key={techItem.alt} href={techItem.href} target="_blank" rel="noreferrer">
                <img src={techItem.src} width="36" height="36" alt={techItem.alt} />
              </Link>
            ))}
          </div>
        </section>

        <h3 className="font-medium text-xl mb-1 mt-8 tracking-tighter">Venuee.co</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Frontend Developer (Web Application) | 2019 - 2020</p>
        <p className="my-2">Developed and improved web application of customer which used new stack technology such NextJS, Styled-Component, GraphQL</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>created an application features for event places in Venuee&apos;s platform</li>
          <li>used stack and technologies by NextJS, TypeScript, React, GraphQL, Styled component, Scss, Github, Jest, Docker unit test, E2E test</li>
          <li>utilized Aglie methodolgy and asana as a tools for manage work tasking</li>
          <li>used Github as a platform to conduct source code versioning, CI/CD, code review</li>
        </ul>

        <div className="space-y-3">
          {[...Object.values(image.feature.venuee)].map((src) => (
            <Link key={src} href="https://www.venuee-performance.com/" target="_blank" rel="noreferrer">
              <ThreeDCard src={src} />
            </Link>
          ))}
        </div>

        <section className="my-4">
          Stack:
          <div className="flex gap-1">
            {TechStack.filter((item) => venueeTech.includes(item.alt)).map((techItem) => (
              <Link key={techItem.alt} href={techItem.href} target="_blank" rel="noreferrer">
                <img src={techItem.src} width="36" height="36" alt={techItem.alt} />
              </Link>
            ))}
          </div>
        </section>

        <h3 className="font-medium text-xl mb-1 mt-8 tracking-tighter">Sobtid Edutainment Co., Lt</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Frontend Developer (Web Application) | 2018 - 2019</p>
        <p className="my-2">
          Developed and maintained a front-end web application which used within the organization and maintain web UI that access by users (https://www.sobtid.me/).
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Developed all Feature about input data and bring data to show and can editable.</li>
          <li>Maintain all Feature and created some new feature</li>
        </ul>

        <section className="my-4">
          Stack:
          <div className="flex gap-1">
            {TechStack.filter((item) => sobtidTech.includes(item.alt)).map((techItem) => (
              <Link key={techItem.alt} href={techItem.href} target="_blank" rel="noreferrer">
                <img src={techItem.src} width="36" height="36" alt={techItem.alt} />
              </Link>
            ))}
          </div>
        </section>

        <h3 className="font-medium text-xl mb-1 mt-8 tracking-tighter">Nodeframe Solution Co., Ltd.</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Cooperative Education Student (Full Stack Developer) | Jun 2017 - Dec 2017</p>
        <p className="my-2">Developed and improved web application of customer which used new stack technology such ReactJS, NodeJS, GraphQL and MongoDB</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Iris Consulting: Provide API service that used GraphQL and MongoDB</li>
          <li>Hubba Connect: Implemented UI following design by used ReactJS and connected GraphQl API</li>
        </ul>

        <div className="space-y-3">
          {[...Object.values(image.feature.nodeFrame)].map((src) => (
            <div key={src}>
              <ThreeDCard src={src} />
            </div>
          ))}
        </div>

        <section className="my-4">
          Stack:
          <div className="flex gap-1">
            {TechStack.filter((item) => nodeFrameTech.includes(item.alt)).map((techItem) => (
              <Link key={techItem.alt} href={techItem.href} target="_blank" rel="noreferrer">
                <img src={techItem.src} width="36" height="36" alt={techItem.alt} />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div>
        <h2 className="font-medium text-xl mb-1 mt-8 tracking-tighter">Github POC and Contribute</h2>

        <h3 className="font-medium text-xl mb-1 mt-8 tracking-tighter">Demo covid 19 daily</h3>
        <p>This demo is about covid 19 data by show in daily chart. Why contribute this app, I would like to know covid 19 data in simple visual data.</p>
        <Link href="https://euphonious-bienenstitch-05020d.netlify.app/" target="_blank" rel="noreferrer">
          <ThreeDCard src={image.demo.covid} />
        </Link>
        <section className="my-4">
          Stack:
          <div className="flex gap-1">
            {TechStack.filter((item) => covidStack.includes(item.alt)).map((techItem) => (
              <Link key={techItem.alt} href={techItem.href} target="_blank" rel="noreferrer">
                <img src={techItem.src} width="36" height="36" alt={techItem.alt} />
              </Link>
            ))}
          </div>
        </section>

        <h3 className="font-medium text-xl mb-1 mt-8 tracking-tighter">Demo firestore crud posts</h3>
        <p>this demo is learing about firebase service such as</p>
        <ul className="ml-5 list-disc space-y-2">
          <li> auth service: i use gmail to auth in this web demo</li>
          <li> firebase store realtime service: for CRUD post in this demo</li>
          <li> other: i add a feature comment this is a emoji comment https://www.npmjs.com/package/emoji-picker-react</li>
          <li> and other feature for additional in feture 🌟</li>
        </ul>
        <Link href="https://firestore-crud-posts.vercel.app/" target="_blank" rel="noreferrer">
          <ThreeDCard src={image.demo.fireBasePost} />
        </Link>
        <section className="my-4">
          Stack:
          <div className="flex gap-1">
            {TechStack.filter((item) => firebaseTech.includes(item.alt)).map((techItem) => (
              <Link key={techItem.alt} href={techItem.href} target="_blank" rel="noreferrer">
                <img src={techItem.src} width="36" height="36" alt={techItem.alt} />
              </Link>
            ))}
          </div>
        </section>

        <h3 className="font-medium text-xl mb-1 mt-8 tracking-tighter">Ratchagitja (Contribute)</h3>
        <p>Contribute the website Ratchagitja about the laws announcement</p>
        <Link href="https://ratchagitja.vercel.app/entries/page/3" target="_blank" rel="noreferrer">
          {' '}
          <ThreeDCard src={image.demo.rachagitja} />
        </Link>
        <Link href="https://github.com/withastro/astro" target="_blank" rel="noreferrer">
          https://github.com/withastro/astro
        </Link>
      </div>

      <p className="my-6">{`*Now I'm learning Golang and Jenkins 👨‍🏫`}</p>
    </section>
  );
}

export default Work;
