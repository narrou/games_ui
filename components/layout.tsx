import Head from "next/head";
import Image from "next/image";
import tw from "twin.macro";
import Link from "next/link";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div tw='max-w-xl px-4 mt-12 mx-auto mb-24'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header tw='flex flex-col items-center'>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              tw='rounded-full'
              height={144}
              width={144}
              alt={name}
            />
            <h1 tw='text-4xl tracking-tighter leading-5 my-4 mx-0'>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/profile.jpg'
                  tw='rounded-full'
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 tw='text-2xl leading-6 my-4 mx-0'>
              <Link href='/'>
                <a tw='text-blue-400 hover:cursor-pointer hover:text-blue-600 '>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div tw='ml-12 mx-0 mr-0'>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
