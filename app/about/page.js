import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center w-full mb-8 md:w-1/3 md:mb-0 ">
              <div className="relative w-48 h-48 overflow-hidden rounded-full">
                <Image
                  src="/ph 1.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full md:w-2/3 ">
              <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">About Me</h1>
              <p className="mb-4 text-lg text-gray-600 dark:text-gray-50">
                Hello ! I'm Ankit, a passionate Web developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I'm here to help others on their path to mastering the art of coding.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-50">
                Whether you're just starting out or looking to sharpen your skills, you'll find a variety of resources and insights here. Let's explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">My Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to Web developer, here's how I navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/3">
                <img src="/nature.jpg" alt="Harry as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="mt-8 md:w-2/3 md:pl-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                My coding journey began in the first year of  B.Tech program. Driven by curiosity and a passion for technology, I started exploring programming languages and solving problems. Over time, I honed my skills, embracing challenges and continuously expanding my knowledge to become a confident and skilled programmer.</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="md:w-1/3">
                <img src="/wondering.jpg" alt="Harry learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="mt-8 md:w-2/3 md:pr-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  After mastering the basics, My thirst for knowledge grew.I began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps,I quickly expanded my skill set, taking on freelance projects to apply my knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/3">
                <img src="/party.jpg" alt="Harry working on a big project" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="mt-8 md:w-2/3 md:pl-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  With three years of experience , I began tackling more significant challenges. From contributing to open-source projects to developing my own applications, I continued to push my limits, always looking for opportunities to learn and grow. My journey wasn’t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer i am happy today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
