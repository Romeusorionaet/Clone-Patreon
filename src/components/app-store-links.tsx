import Image from 'next/image'

export function AppStoreLinks() {
  return (
    <nav className="mt-16 flex gap-4 max-md:justify-center md:mt-6">
      <a
        href="https://play.google.com/store/apps/details?id=com.patreon.android"
        target="_blank"
        rel="noopener noreferrer"
        title="Get it on Google Play"
      >
        <Image
          width={500}
          height={500}
          src="https://c14.patreon.com/google_app_store_button_pt_BR_a1cb398ac1.png"
          alt="Get it on Google Play"
          className="max-w-44 max-sm:w-full md:w-custom_9"
        />
      </a>
      <a
        href="https://apps.apple.com/us/app/patreon/id1044456188"
        target="_blank"
        rel="noopener noreferrer"
        title="Download on the App Store"
      >
        <Image
          width={500}
          height={500}
          src="https://c14.patreon.com/apple_app_store_button_pt_BR_30b46e88cd.png"
          alt="Download on the App Store"
          className="max-w-44 max-sm:w-full md:w-custom_9"
        />
      </a>
    </nav>
  )
}
