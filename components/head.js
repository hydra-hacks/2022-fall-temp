import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "Hydra Hacks";
  const description =
    "The West Coast's largest hackathon for marginalized genders.";
  const keywords =
    "female, lgbtq, tech, STEM, nonbinary, coding, computer science, hackathon";
  const author = "Hydra Hacks";
  const twitter = "@hydrahacks";
  const image =
    "https://cdn.discordapp.com/attachments/794104267634900994/822298283678367774/hydra-01.jpg"; 
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:url" content="hydrahacks.org" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <script src="https://analytics.stacc.cc/api/script/l3LtIxiiWld0"></script>
      {children}
    </Head>
  );
}
