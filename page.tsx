import Head from "next/head";

export default function Home() {
  const title = "Next.js page";

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <section>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-myLg">
          Click me
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-mySm">
          Click me
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[var(--my-radius)]">{/**--my-radius変数は globals.cssに記入する */}
          Click me
        </button>
        <div className="container">
          <h1 className="text-my2xl">Hello TailwindCSS</h1>
          <p className="text-myLg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-myXs">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
    </div>
  );
}

