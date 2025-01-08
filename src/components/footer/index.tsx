import { CircleDollarSignIcon, Globe } from 'lucide-react'
import { AppStoreLinks } from '../app-store-links'
import { SubMenuFooter } from './sub-menu-footer'
import '@/assets/styles/components/footer.css'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-c1 px-3/100 pb-20 pt-10">
      <SubMenuFooter />

      <AppStoreLinks />

      <section className="mt-8 flex justify-between gap-10 max-md:flex-col">
        <div className="flex flex-wrap gap-4 max-md:flex-col max-md:justify-center max-md:px-8">
          <button className="flex items-center gap-2 rounded-xl bg-c3 px-2 py-1 max-md:justify-center">
            <Globe /> <span>Portuguese (Brasil)</span>
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-c3 px-2 py-1 max-md:justify-center">
            <Image
              width={200}
              height={200}
              src="https://flagcdn.com/w320/br.png"
              alt=""
              className="h-6 w-8"
            />
            <span>Brazil (brasil)</span>
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-c3 px-2 py-1 max-md:justify-center">
            <CircleDollarSignIcon /> <span>USD</span>
          </button>
        </div>

        <div className="flex w-72 flex-wrap items-center justify-center gap-3 max-md:w-full xl:w-96 xl:gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 396 396"
            className="h-12 w-12 rounded-full p-2 duration-500 hover:bg-zinc-500"
          >
            <path
              fill="currentColor"
              d="M301.026 37.125h54.582l-119.246 136.29 140.283 185.46h-109.84l-86.031-112.48-98.439 112.48H27.72l127.545-145.777L20.691 37.125H133.32l77.764 102.812 89.942-102.812Zm-19.157 289.08h30.245L116.886 68.079H84.43l197.44 258.126Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
            className="h-12 w-12 rounded-full p-2 duration-500 hover:bg-zinc-500"
          >
            <path
              fill="currentColor"
              d="m12.408 9.607.449-2.952h-2.805V4.741c0-.808.391-1.596 1.647-1.596h1.276V.632s-1.157-.2-2.263-.2c-2.31 0-3.82 1.415-3.82 3.974v2.25H4.326v2.951h2.568v7.137a10.071 10.071 0 0 0 3.16 0V9.607h2.355Z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
            className="h-12 w-12 rounded-full p-2 duration-500 hover:bg-zinc-500"
          >
            <path
              fill="currentColor"
              d="M17.251 5.083c-.041-.92-.19-1.551-.401-2.102a4.218 4.218 0 0 0-.997-1.53 4.244 4.244 0 0 0-1.53-.997c-.55-.215-1.18-.36-2.1-.402C11.299.01 11.005 0 8.659 0c-2.35 0-2.644.01-3.565.052-.92.041-1.55.19-2.1.402a4.198 4.198 0 0 0-1.534.997 4.247 4.247 0 0 0-.996 1.53c-.211.551-.36 1.181-.402 2.102C.021 6.008.01 6.303.01 8.65c0 2.351.01 2.646.052 3.567.042.92.19 1.551.402 2.102.221.567.515 1.052.996 1.53.478.481.962.78 1.53.997.55.215 1.18.36 2.1.402.925.042 1.219.052 3.565.052 2.35 0 2.644-.01 3.565-.052.92-.042 1.55-.19 2.1-.402a4.213 4.213 0 0 0 1.53-.997c.477-.481.778-.963.996-1.53.215-.551.36-1.181.402-2.102.041-.925.052-1.22.052-3.567 0-2.348-.007-2.646-.049-3.567Zm-1.553 7.064c-.039.845-.18 1.306-.298 1.607a2.694 2.694 0 0 1-.65.997 2.75 2.75 0 0 1-.997.651c-.305.118-.765.26-1.606.298-.91.042-1.184.052-3.495.052-2.312 0-2.586-.01-3.496-.052-.844-.038-1.304-.18-1.605-.298a2.692 2.692 0 0 1-.997-.65 2.753 2.753 0 0 1-.65-.998c-.118-.305-.26-.765-.298-1.607-.042-.91-.052-1.184-.052-3.497 0-2.313.01-2.587.052-3.497.038-.845.18-1.306.297-1.607.156-.402.346-.693.65-.997.305-.305.593-.489.998-.651.304-.118.764-.26 1.605-.298.91-.042 1.184-.052 3.496-.052 2.311 0 2.585.01 3.495.052.844.038 1.305.18 1.606.298.401.155.692.346.996.65.305.305.488.593.651.998.118.305.26.765.298 1.607.041.91.051 1.184.051 3.497 0 2.313-.013 2.587-.051 3.497Z"
            ></path>
            <path
              fill="currentColor"
              d="M8.652 4.204A4.443 4.443 0 0 0 4.208 8.65a4.443 4.443 0 1 0 8.887 0 4.441 4.441 0 0 0-4.443-4.446Zm0 7.33a2.884 2.884 0 1 1 .002-5.767 2.884 2.884 0 0 1-.002 5.767Zm4.616-6.464a1.039 1.039 0 1 0 0-2.078 1.039 1.039 0 0 0 0 2.077Z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 13"
            className="h-12 w-12 rounded-full p-2 duration-500 hover:bg-zinc-500"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M16.385 1.524c.267.268.46.6.559.966.37 1.354.356 4.175.356 4.175s0 2.807-.356 4.161a2.168 2.168 0 0 1-1.525 1.524c-1.354.356-6.769.356-6.769.356s-5.401 0-6.769-.37a2.169 2.169 0 0 1-1.525-1.524C0 9.472 0 6.65 0 6.65s0-2.807.356-4.159c.2-.742.798-1.34 1.525-1.54C3.235.595 8.65.595 8.65.595s5.415 0 6.769.37c.365.099.698.292.966.56Zm-4.956 5.127L6.926 9.245V4.058l4.503 2.593Z"
              clipRule="evenodd"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-12 w-12 rounded-full p-2 duration-500 hover:bg-zinc-500"
          >
            <path
              fill="currentColor"
              d="M3 5.09c0-.605.203-1.105.608-1.5.406-.393.933-.59 1.581-.59.637 0 1.153.194 1.547.582.405.4.608.921.608 1.563 0 .582-.197 1.067-.591 1.455-.405.4-.938.6-1.599.6h-.017c-.637 0-1.152-.2-1.546-.6C3.197 6.2 3 5.697 3 5.09ZM3.226 21V8.855h3.857V21H3.226Zm5.994 0h3.857v-6.782c0-.424.047-.751.14-.982.161-.412.407-.76.738-1.045.33-.285.744-.427 1.242-.427 1.297 0 1.946.915 1.946 2.745V21H21v-6.964c0-1.794-.405-3.154-1.216-4.081-.811-.928-1.883-1.391-3.214-1.391-1.495 0-2.659.672-3.493 2.018v.036h-.017l.017-.036V8.855H9.22c.023.387.035 1.593.035 3.618 0 2.024-.012 4.866-.035 8.527Z"
            ></path>
          </svg>
        </div>

        <address className="w-35/100 text-end max-md:w-full max-md:text-center lg:w-1/5 xl:w-35/100 xl:gap-2">
          <span>600 Townsend Street, Suite 500 </span>
          <br className="xl:hidden" />
          <span>San Francisco, CA 94103, USA </span>
          <br className="xl:hidden" />
          <span className="max-xl:hidden">{'|'}</span>
          <span>©️Patreon</span>
        </address>
      </section>
    </footer>
  )
}
