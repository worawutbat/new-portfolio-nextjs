import Image from 'next/image';

import ContactCard from '~/component/ContactCard';
import ThreeDCard from '~/component/ui/ThreeDCard';
import image from '~/constant/Image';
import TechStack from '~/constant/TechStack';

const OverViewImage = [
  image.feature.fictionlog.home,
  image.feature.fictionlog.filter_search,
  image.feature.pinto.home,
  image.feature.pinto.price_setting_2,
  image.feature.venuee.home,
  image.feature.nodeFrame.hubba_1,
  image.feature.nodeFrame.hubba_3,
  image.demo.covid,
  image.demo.fireBasePost,
  image.demo.rachagitja,
];

const HOME_CONTACTS = [
  {
    href: 'https://github.com/worawutbat/worawutbat/edit/main/README.md',
    title: '@worawutbat',
    mainImageUrl: '/logo/tech/github_logo.png',
    mainImageAlt: '@worawutbat',
    subImageUrl: '/profile.jpg',
    subImageAlt: '@github',
  },
  {
    href: 'https://www.linkedin.com/in/worawut-tititumjariya-337400170/',
    title: '@linkedin-worawut',
    mainImageUrl: '/logo/social/linkedin_logo.png',
    mainImageAlt: '@linkedin',
    subImageUrl: '/profile.jpg',
    subImageAlt: '@github',
  },
];

const EDUCATION_ITEMS = [
  {
    href: 'https://www.ku.ac.th/th',
    title: 'G.P.A. 3.27',
    mainImageUrl: '/logo/school/KU.png',
    mainImageAlt: '@Kasetsart University',
    header: 'Kasetsart University',
    subHeader: 'Bachelor of Science, Computer Science (2014 - 2018)',
  },
  {
    href: 'https://www.cru.ac.th/',
    title: 'G.P.A. 3.49',
    mainImageUrl: '/logo/school/cru.png',
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

      <h3 className="font-medium text-lg">My work (Overview):</h3>
      <div className="space-y-3">
        {OverViewImage.map((src) => (
          <div key={src}>
            <ThreeDCard src={src} />
          </div>
        ))}
      </div>

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
