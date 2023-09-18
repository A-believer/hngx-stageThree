

export default function Footer() {
  return (
    <footer className="flex md:flex-row flex-col items-center justify-between gap-x-10 lg:gap-x-20 gap-y-4 md:text-2xl text-xl font-playfair italic">
      <hr className="md:w-full w-[50%]"/>
      <a
        className="md:underline underline-offset-4"
        target="_blank"
        href="https://www.linkedin.com/in/thedavid-ao/" rel="noreferrer">LinkedIn</a>
      <a
        className="md:underline underline-offset-4"
        target="_blank"
        href="https://x.com/theDavid_AO?s=20" rel="noreferrer">Twitter</a>
      <a
        className="md:underline underline-offset-4"
        target="_blank"
        href="https://github.com/A-believer" rel="noreferrer">Github</a>
      <hr className="md:w-full w-[50%]"/>
    </footer>
  )
}
