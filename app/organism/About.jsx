import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="lg:ml-[16.666%] p-5 lg:px-20 pb-20 lg:justify-center lg:p-20 bg-white"
      >
        <MaxWidthWrapper className="pt-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl font-bold text-violet">
              Front-end Developer Based in Taraz, Kazakhstan📍
            </h1>
            <p className="text-lg text-secondary max-w-prose">
              Hey, I’m Ernur, a passionate Frontend Developer. I specialize in
              creating clean, modern UI/UX designs that provide a seamless
              experience for users. I’m always eager to learn new technologies
              and improve my skills.
            </p>
            <div className="flex flex-col space-y-6 items-center">
              <p className="text-lg text-secondary">My expertise includes:</p>
              <ul className="text-lg flex text-secondary space-y-2">
                <li className="font-medium flex flex-col gap-1 sm:flex-row  sm:gap-2">
                  <span className="text-violet">React/Next.js</span>
                  <p className="text-2xl rotate-90 lg:rotate-0 ">|</p>
                  <span className="text-green-600">Tailwind CSS</span>
                  <p className="text-2xl rotate-90 lg:rotate-0 ">|</p>
                  <span className="text-blue-600">TypeScript</span>
                </li>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
