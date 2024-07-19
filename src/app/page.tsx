export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col p-6 bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://kangacook.com/assets/landing-page-bg-D3sH5q7Y.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
        {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 mt-4 flex grow flex-col gap-4 md:flex-row md:items-center">
        <div className="flex items-center justify-center p-6 md:w-1/2 md:px-10 md:py-12">
          <img
            src="https://kangacook.com/assets/kangacook_logo_en-C6XaWo8m.svg"
            className="w-full h-auto max-h-96 rounded-lg shadow-lg object-cover"
            alt="Flowbite Logo"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white bg-opacity-80 px-6 py-10 md:w-1/2 md:px-20 shadow-lg backdrop-blur-lg">
          <h1 className="text-3xl font-bold text-gray-800">Help Us Improve Our Service</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            We are preparing our website, help us improve our service by answering a few questions!<br />
            Share your cooking experiences with us. We will draw three lucky winners at the end of August to receive a $15 Amazon gift card! (Be sure to leave your email)
          </p>
        </div>
      </div>
    </main>
  );
}
