import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Blog",
  description: "Worawut Tititumjariy Portfolio",
};

const blogs = [
{
  href: "https://medium.com/@worawuttititumjariya/css-unit-px-em-and-rem-c6352ae9176f",
  title: "📖 CSS Unit: px, em and rem",
  // comments: "2 👏 1 💬"
},
{
  href: "https://medium.com/@woravootbat/semantic-version-%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87-lib-%E0%B9%83%E0%B8%99-package-json-10dbcef9b817",
  title: "📖 Semantic Version (ตัวเลขหลังของ lib ใน package.json)",
  // comments: "0 👏 0 💬"
},
{
  href: "https://medium.com/@woravootbat/kubernetes-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%81%E0%B8%B1%E0%B8%9A-docker-%E0%B8%9B%E0%B9%88%E0%B8%B0-4c9d5fddb182",
  title: "📖 Kubernetes คืออะไร? แล้วเกี่ยวอะไรกับ Docker ป่ะ 🧐",
  // comments: "0 👏 0 💬"
},{
  href: "",
  title: "✍️ Up comming..."
  // comments: "0 👏 0 💬"
},]

const Blog = () => {
  return (

    <section>
      <div className='space-y-4'>
        {blogs.map(({href, title, }) =>
          <div className="group">
            <a
              href={href}
              className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
            >
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">{title}</p>
                {/* <p className="text-neutral-600 dark:text-neutral-400">{comments}</p> */}
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
        )}
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
                  // fetchpriority="high"
                  width="64"
                  height="64"
                  className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
                  sizes="33vw"
                  src="/logo/social/medium_logo.png"
                />
                <div className="relative -right-10 -top-6 inline-flex h-8 w-8 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
                  <Image
                    alt="@github"
                    // fetchpriority="high"
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
        <div className="group flex w-full">
          <a
            href="https://medium.com/@worawuttititumjariya/"
            target="_blank"
            className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="flex items-center space-x-3">
              <div className="relative h-16">
                <Image
                  alt="@worawuttititumjariya"
                  // fetchpriority="high"
                  width="64"
                  height="64"
                  className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
                  sizes="33vw"
                  src="/logo/social/medium_logo.png"
                />
                <div className="relative -right-10 -top-6 inline-flex h-8 w-8 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
                  <Image
                    alt="@github"
                    // fetchpriority="high"
                    width="10"
                    height="10"
                    className="w-8 rounded-full border border-neutral-200 dark:border-neutral-700"
                    sizes="33vw"
                    src="/profile.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">@worawuttititumjariya</p>
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
  </section>
  )
}

export default Blog