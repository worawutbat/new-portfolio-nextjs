import Image from 'next/image';
import Link from 'next/link';

import ContactCard from '~/component/ContactCard';
import ImageCardWithText from '~/component/ui/ImageCardWithText';
import image from '~/constant/Image';
import TechStack from '~/constant/TechStack';

const storylogTech = ['GraphQL', 'Firebase', 'NextJs', 'NodeJS', 'Redux', 'Sass', 'CSS3', 'TailwindCSS', 'React', 'HTML5', 'JavaScript', 'TypeScript', 'Vercel'];
const venueeTech = ['GraphQL', 'Firebase', 'NextJs', 'NodeJS', 'Redux', 'Sass', 'CSS3', 'React', 'HTML5', 'JavaScript', 'TypeScript', 'Styled-Component'];
const sobtidTech = ['Material UI', 'Redux', 'CSS3', 'NodeJS', 'React', 'HTML5', 'JavaScript', 'TypeScript'];
const nodeFrameTech = ['GraphQL', 'NodeJS', 'Redux', 'Sass', 'CSS3', 'Styled-Component', 'React', 'HTML5', 'JavaScript', 'TypeScript', 'Mongodb', 'Mongoose'];
// const covidStack = ['HTML5', 'JavaScript', 'TypeScript', 'NodeJS', 'CSS3', 'TailwindCSS', 'Svelte'];
// const firebaseTech = ['HTML5', 'JavaScript', 'TypeScript', 'NodeJS', 'CSS3', 'TailwindCSS', 'Firebase'];

const STORYLOG = {
  logo: image.feature.fictionlog.home,
  alt: 'Storylog Co., Ltd',
  company: 'Storylog Co., Ltd.',
  role: 'Frontend Software Engineer (Web Application)',
  period: 'May 2020 - Dec 2023 · 3 yrs 6 mo',
  responsibility: 'Developed and improved web application of customer which used new stack technology such NextJS, TailwindCss, GraphQL',
  href: 'https://fictionlog.co/',
  techStack: TechStack.filter((item) => storylogTech.includes(item.alt)),
  products: [
    {
      src: image.feature.fictionlog.home,
      alt: 'Fictionlog Home',
      title: 'Fictionlog Home',
      subTitle: 'Frontend Software Engineer (Web Application) | 2020 - 2023',
      description: 'Developed and improved web application of customer which used new stack technology such NextJS, TailwindCss, GraphQL',
      href: 'https://fictionlog.co/',
    },
    {
      src: image.feature.pinto.home,
      alt: 'Pintobook Home',
      title: 'Pintobook Home',
      subTitle: 'Frontend Software Engineer (Web Application) | 2020 - 2023',
      description: 'Developed and improved web application of customer which used new stack technology such NextJS, TailwindCss, GraphQL',
      href: 'https://pintobook.com/',
    },
  ],
};

const VENUEE = {
  logo: image.logo.company.venuee,
  alt: 'Storylog Co., Ltd',
  company: 'VenueE Co., Ltd.',
  role: 'Frontend Developer (Web Application)',
  period: 'May 2019 - Apr 2020 · 1 yr',
  responsibility: 'Developed and improved web application of customer which used new stack technology such NextJS, Styled-Component, GraphQL',
  href: 'https://www.venuee-performance.com/',
  techStack: TechStack.filter((item) => venueeTech.includes(item.alt)),
  products: [
    {
      src: image.feature.venuee.home,
      alt: 'Venuee Home',
      title: 'Venuee Home',
      subTitle: 'Frontend Developer (Web Application) | 2019 - 2020',
      description: 'Developed and improved web application of customer which used new stack technology such NextJS, Styled-Component, GraphQL',
      href: 'https://www.venuee-performance.com/',
    },
  ],
};

const SOBTID_EDUTAINMENT = {
  logo: image.logo.company.sobtid2,
  alt: 'Sobtid Edutainment Co., Ltd',
  company: 'Sobtid Edutainment Co., Ltd',
  role: 'Frontend Developer (Web Application)',
  period: 'Sep 2018 - Jan 2019 · 5 mos',
  responsibility: 'Developed and maintained a front-end web application which used within the organization and maintain web UI that access by users (https://www.sobtid.me/).',
  href: 'https://www.sobtid.me/',
  techStack: TechStack.filter((item) => sobtidTech.includes(item.alt)),
  products: [
    {
      src: image.logo.company.sobtid1,
      alt: 'Venuee Home',
      title: 'Sobtid Edutainment Co., Lt',
      subTitle: 'Frontend Developer (Web Application) | 2018 - 2019',
      description: 'Developed and maintained a front-end web application which used within the organization and maintain web UI that access by users (https://www.sobtid.me/).',
      href: 'https://www.sobtid.me/',
    },
  ],
};

const NODEFRAME_SOLUTION = {
  logo: image.logo.company.venuee,
  alt: 'Nodeframe Solution Co., Ltd',
  company: 'Nodeframe Solution Co., Ltd',
  role: 'Cooperative Education Student (Full Stack Developer) ',
  period: 'Jun 2017 - Dec 2017 · 7 mos',
  responsibility: 'Developed and improved web application of customer which used new stack technology such ReactJS, NodeJS, GraphQL and MongoDB',
  href: 'http://www.nf-solution.com',
  techStack: TechStack.filter((item) => nodeFrameTech.includes(item.alt)),
  products: [
    {
      src: image.feature.nodeFrame.hubba_1,
      alt: 'Hubba Connec',
      title: 'HUBBA Connect',
      subTitle: 'Cooperative Education Student (Full Stack Developer) | Jun 2017 - Dec 2017',
      description: 'Developed and improved web application of customer which used new stack technology such ReactJS, NodeJS, GraphQL and MongoDB',
      href: 'https://www.hubbathailand.com/',
    },
    {
      src: image.feature.nodeFrame.hubba_1,
      alt: 'Iris Consulting',
      title: 'Iris Consulting',
      subTitle: 'Implemented UI following design by used ReactJS and connected GraphQl API',
      description: 'Developed and improved web application of customer which used new stack technology such ReactJS, NodeJS, GraphQL and MongoDB',
      href: '/',
    },
  ],
};

const MYWorksAndExperience = [STORYLOG, VENUEE, SOBTID_EDUTAINMENT, NODEFRAME_SOLUTION];

const HOME_CONTACTS = [
  {
    href: 'https://github.com/worawutbat/worawutbat/edit/main/README.md',
    title: '@worawutbat',
    mainImageUrl: image.logo.tech.github,
    mainImageAlt: '@worawutbat',
    subImageUrl: '/profile.jpg',
    subImageAlt: '@github',
  },
  {
    href: 'https://www.linkedin.com/in/worawut-tititumjariya-337400170/',
    title: '@linkedin-worawut',
    mainImageUrl: image.logo.social.linkedin,
    mainImageAlt: '@linkedin',
    subImageUrl: '/profile.jpg',
    subImageAlt: '@github',
  },
];

const EDUCATION_ITEMS = [
  {
    href: 'https://www.ku.ac.th/th',
    title: 'G.P.A. 3.27',
    mainImageUrl: image.logo.school.ku,
    mainImageAlt: '@Kasetsart University',
    header: 'Kasetsart University',
    subHeader: 'Bachelor of Science, Computer Science (2014 - 2018)',
  },
  {
    href: 'https://www.cru.ac.th/',
    title: 'G.P.A. 3.49',
    mainImageUrl: image.logo.school.cru,
    mainImageAlt: '@CRU school',
    header: 'Chonradsadornumrung School',
    subHeader: 'High School , Scinece-Mathematic (2010 - 2013)',
  },
];

export default function Home() {
  return (
    <section>
      <div className="flex items-start justify-start gap-2">
        <Image
          alt="@worawutbat"
          fetchPriority="high"
          width="64"
          height="64"
          className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
          sizes="33vw"
          src="/profile.jpg"
        />
        <h1 className="mt-2 mb-8 text-2xl font-medium tracking-tighter">Hi, I am Worawut 👋</h1>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        I am Frontend Software Engineer. I currently
        <a href="/work"> work</a> as the Front end software engineer of Product at{' '}
        <span className="not-prose">
          <a
            href="https://fictionlog.co/"
            target="_blank"
            className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            rel="noreferrer"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-1"
              src="/logo/company/fictionlog-logo.webp"
              alt="Fictionlog Logo"
              width={14}
              height={14}
              priority
            />
            FictionLog
          </a>
        </span>{' '}
        and
        <span className="not-prose">
          <a
            href="https://pintobook.com/"
            target="_blank"
            className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            rel="noreferrer"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-1"
              src="/logo/company/pinto-logo.svg"
              alt="Pintobook Logo"
              width={14}
              height={14}
              priority
            />
            Pintobook
          </a>
        </span>
        , where is platform online for buy and sell web novel and ebook that built with{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          rel="noreferrer"
        >
          <Image alt="Next.js logomark" src="logo/tech/next-logo.svg" className="!mr-1" width="14" height="14" />
          Nextjs
        </a>{' '}
        .
      </p>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        {HOME_CONTACTS.map((contact) => (
          <ContactCard
            key={contact.href}
            href={contact.href}
            title={contact.title}
            mainImageUrl={contact.mainImageUrl}
            mainImageAlt={contact.mainImageAlt}
            subImageUrl={contact.subImageUrl}
            subImageAlt={contact.subImageAlt}
          />
        ))}
      </div>

      <section className="my-6">
        <h3 className="font-medium text-2xl">My Work and Experience:</h3>
        {MYWorksAndExperience.map((work) => (
          <div className="border-b">
            <h3 className="font-medium text-xl mb-1 mt-8 tracking-tighter">{work.company}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{`${work.role} | ${work.period}`}</p>
            <p className="my-2">{work.responsibility}</p>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-2">
              {work.products.map(({ title, subTitle, alt, src, description, href }) => (
                <ImageCardWithText src={src} title={title} subTitle={subTitle} alt={alt} description={description} href={href} key={src} />
              ))}
            </div>

            <section className="my-4">
              Tech Stack:
              <div className="flex gap-1">
                {work.techStack.map((techItem) => (
                  <Link key={techItem.alt} href={techItem.href} target="_blank" rel="noreferrer">
                    <Image src={techItem.src} width="36" height="36" alt={techItem.alt} />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        ))}
      </section>

      <section className="my-6">
        <h3 className="font-medium text-lg">Skills:</h3>
        <div className="flex gap-1 flex-wrap">
          {TechStack.map((techItem) => (
            <a key={techItem.alt} href={techItem.href} target="_blank" rel="noreferrer">
              <Image src={techItem.src} width="36" height="36" alt={techItem.alt} />
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-medium text-lg">Education:</h3>
        {EDUCATION_ITEMS.map((education) => (
          <ContactCard
            key={education.href}
            href={education.href}
            title={education.title}
            mainImageUrl={education.mainImageUrl}
            mainImageAlt={education.mainImageAlt}
            header={education.header}
            subHeader={education.subHeader}
          />
        ))}
      </section>
    </section>
  );
}
