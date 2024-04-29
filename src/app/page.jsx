import Image from 'next/image';
import ThreeDCard from '~/component/ui/ThreeDCard';
import { image } from '~/constant/Image';
import { TechStack } from '~/constant/TechStack';

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

export default function Home() {
  return (
    <section>
      <div className="flex items-start justify-start gap-2">
        <Image
          alt="@worawutbat"
          fetchpriority="high"
          width="64"
          height="64"
          className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
          sizes="33vw"
          src="/profile.jpg"
        />
        <h1 class="mt-2 mb-8 text-2xl font-medium tracking-tighter">Hi, I am Worawut 👋</h1>
      </div>
      <p class="prose prose-neutral dark:prose-invert">
        I am Frontend Software Engineer. I currently
        <a href="/work"> work</a> as the Front end software engineer of Product at{' '}
        <span class="not-prose">
          <a
            href="https://fictionlog.co/"
            target="_blank"
            class="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-1"
              src="/fictionlog-logo.webp"
              alt="Fictionlog Logo"
              width={14}
              height={14}
              priority
            />
            FictionLog
          </a>
        </span>{' '}
        and
        <span class="not-prose">
          <a
            href="https://pintobook.com/"
            target="_blank"
            class="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
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
          class="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        >
          <Image alt="Next.js logomark" src="logo/tech/next-logo.svg" class="!mr-1" width="14" height="14" />
          Nextjs
        </a>{' '}
        .
      </p>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="group flex w-full">
          <a
            href="https://github.com/worawutbat/worawutbat/edit/main/README.md"
            target="_blank"
            className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-center space-x-3">
              <div className="relative h-16">
                <Image
                  alt="@worawutbat"
                  fetchpriority="high"
                  width="64"
                  height="64"
                  className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
                  sizes="33vw"
                  src="/github_logo.png"
                />
                <div className="relative -right-10 -top-6 inline-flex h-8 w-8 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
                  <Image
                    alt="@github"
                    fetchpriority="high"
                    width="10"
                    height="10"
                    className="w-8 rounded-full border border-neutral-200 dark:border-neutral-700"
                    sizes="33vw"
                    src="/profile.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">@worawutbat</p>
              </div>
            </div>
            <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="group flex w-full">
          <a
            href="https://www.linkedin.com/in/worawut-tititumjariya-337400170/"
            target="_blank"
            className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-center space-x-3">
              <div className="relative h-16">
                <Image
                  alt="@linkedin"
                  fetchpriority="high"
                  width="64"
                  height="64"
                  className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
                  sizes="33vw"
                  src="/linkedin_logo.png"
                />
                <div className="relative -right-10 -top-6 inline-flex h-8 w-8 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
                  <Image
                    alt="@github"
                    fetchpriority="high"
                    width="10"
                    height="10"
                    className="w-8 rounded-full border border-neutral-200 dark:border-neutral-700"
                    sizes="33vw"
                    src="/profile.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">@linkedin-worawut</p>
              </div>
            </div>
            <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </a>
        </div>
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
              <img src={techItem.src} width="36" height="36" alt={techItem.alt} />
            </a>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-medium text-lg">Education:</h3>
        <p>
          <span className="font-semibold">Kasetsart University</span>
          <span className="text-neutral-600 dark:text-neutral-400 text-sm"> Bachelor of Science, Computer Science (2014 - 2018)</span>
          <p>G.P.A. 3.27</p>
        </p>
        <p>
          <span className="font-semibold">Chonradsadornumrung School</span>
          <span className="text-neutral-600 dark:text-neutral-400 text-sm"> High School , Scinece-Mathematic (2010 - 2013)</span>
          <p>G.P.A. 3.49</p>
        </p>
      </section>
    </section>
  );
}
