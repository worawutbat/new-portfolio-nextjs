import Image from 'next/image';

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
        I'm a frontend developer. I currently
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
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-1" src="/pinto-logo.svg" alt="Pintobook Logo" width={14} height={14} priority />
            Pintobook
          </a>
        </span>
        , where is platform online for buy and sell web novel and ebook that built with{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          class="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        >
          <Image alt="Next.js logomark" src="/next-logo.svg" class="!mr-1" width="14" height="14" />
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
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="group flex w-full">
          <a
            href="https://medium.com/@woravootbat"
            target="_blank"
            className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-center space-x-3">
              <div className="relative h-16">
                <Image
                  alt="@medium"
                  fetchpriority="high"
                  width="64"
                  height="64"
                  className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
                  sizes="33vw"
                  src="/medium_logo.png"
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
                <p className="font-medium text-neutral-900 dark:text-neutral-100">@woravootbat</p>
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
        <div className="group flex w-full"></div>
      </div>
      Skills
      <div className="flex gap-1 flex-wrap">
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" />
        </a>
        <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="36" height="36" alt="Java" />
        </a>
        <a href="https://www.python.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" />
        </a>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          <img src="/next-logo.svg" width="36" height="36" alt="NextJs" />
        </a>
        <a href="https://jquery.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="36" height="36" alt="JQuery" />
        </a>
        <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" />
        </a>
        <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" />
        </a>
        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" />
        </a>
        <a href="https://mui.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="36" height="36" alt="Material UI" />
        </a>
        <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" />
        </a>
        <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg" width="36" height="36" alt="Webpack" />
        </a>
        <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg" width="36" height="36" alt="Svelte" />
        </a>
        {/* <a href="https://babeljs.io/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored-dark.svg" width="36" height="36" alt="Babel" />
        </a> */}
        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" />
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <img src="/express-logo.png" width="36" height="36" alt="Express" />
        </a>
        <a href="https://graphql.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg" width="36" height="36" alt="GraphQL" />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" />
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" />
        </a>
        <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" width="36" height="36" alt="Heroku" />
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" />
        </a>
      </div>
    </section>
  );
}
