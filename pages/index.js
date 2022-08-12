import { useEffect } from "react";
import Image from "next/image";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Person from "../components/person";
import Faq from "../components/faq";
import Socials from "../components/socials";
import Sponsor from "../components/sponsor";
import Prize from "../components/prize";

const Sponsors = [
  {
    companyName: "Balsamiq",
    logo: "https://balsamiq.com/assets/company/brandassets/balsamiq-logo-screen.png",
    website: "https://balsamiq.com/",
  },
  {
    companyName: "Google Cloud",
    logo: "https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png",
    website: "https://cloud.google.com/",
  },
  {
    companyName: "Wolfram Language",
    logo: "/sponsors/wolfram.svg",
    website: "https://www.wolframalpha.com/",
  },
  {
    companyName: "Sticker Giant",
    logo: "https://sg-static-cdn.sgsr.us/data/StickerGiant-Flame-Logo-Email-Sign-Up-Thank-You__5d28c8cae4974.png",
    website:
      "https://www.stickergiant.com/event-coupons?utm_source=website&utm_medium=event",
  },
  {
    companyName: "Digital Ocean",
    logo: "https://seeklogo.com/images/D/digital-ocean-logo-FBA954B5C9-seeklogo.com.png",
    website: "https://www.digitalocean.com/",
  },
  {
    companyName: "Postman",
    logo: "https://i.pinimg.com/originals/6a/9d/0d/6a9d0d462cdc2b0b97e607f32aa124e9.png",
    website: "https://www.postman.com/",
  },
  {
    companyName: "GitHub",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png",
    website: "https://github.com/",
  },
];

export default function Home() {
  useEffect(() => {
    console.log("Sign up for Hydrangea Hacks.");
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main className="mx-6 md:mx-14 lg:mx-32 xl:mx-52">
        <section className="pt-48 pb-24 -mx-6 md:h-2/4 bg-gradient-to-t from-purple-600 to-purple-100 dark:from-purple-900 dark:to-purple-500 md:-mx-14 lg:-mx-32 xl:-mx-52 -mt-36">
          <div className="flex flex-col self-center">
            <div className="text-center">
              <h1 className="pb-2 text-5xl font-bold text-gray-100 font-poppins md:text-6xl lg:text-7xl xl:text-8xl text-shadow-lg">
                Hydra Hacks
              </h1> <br />
              <h3 className="mx-3 text-xl text-gray-200 font-openSans text-shadow-sm lg:text-2xl md:mx-24">
          The West Coast's largest hackathon for marginalized genders.
              </h3> 
              <br />
            </div>
            <div className="text-center font-poppins w-9/12 md:w-1/2 text-gray-600 dark:text-gray-400 text-md mx-auto">
              <a href="https://forms.gle/Y8NNds94L8k2K6m37">
                <button className="p-1 px-3 text-white border-2 border-white lg:text-2xl lg:font-semibold rounded-xl font-openSans">
                  Newsletter Signup
                </button>
              </a>
              
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="flex flex-col md:flex-row md:items-center">
            <div>
              <h2>
                About <span className="text-hydrangea">Hydra Hacks</span>
              </h2>
              <p className="w-full text-gray-600 dark:text-gray-300">
              Hydra Hacks is an online hackathon from the Bay Area. 
              Whether you're writing your first line of code or you're an expert hacker, Hydra Hacks is for you. 
              You'll have the opportunity to meet new friends, develop awesome projects, and attend workshops! 
              Hydra Hacks hosts gender-focused events open to high school and college students of marginalized genders!
              </p>
            </div>
            <div>
              <Image
                src="/logo.png"
                alt="hydrangea petal profile logo"
                width={250}
                height={250}
                layout="fixed"
                className="absolute hidden w-full md:float-right md:relative"
              />
            </div>
          </div>
        </section>
        
        {/* <section>
          <div className="flex flex-col justify-center">
            <h2 className="text-center">
            Our <span className="text-hydrangea">supporters</span>
            </h2>
            <p className="mx-8 mb-4 -mt-1 text-center text-gray-800 md:mx-24 dark:text-gray-100">
            Interested in being a sponsor for Hydra Hacks? We'd love to chat!
              Contact us at{" "}
              <a href="mailto:hello@hydrahacks.org" className="underline">
                hello@hydrahacks.org
              </a>
              &nbsp;&rarr;
              <br />
              <span className="text-sm">
                We also accept tax-deductible contributions through our{" "}
                <a
                  href="https://bank.hackclub.com/donations/start/hydra-hacks"
                  target="_blank"
                  className="underline"
                  rel="noopener noreferrer"
                >
                  donation page.
                </a> 
              </span>
            </p> <br />
          </div>
          <div className="grid grid-cols-1 gap-3 space-y-4 md:grid-cols-3 xl:grid-cols-5 xl:gap-5">
            {Sponsors.map(({ logo, companyName, website }) => {
              return (
                <Sponsor
                  logo={logo}
                  companyName={companyName}
                  website={website}
                />
              );
            })}
          </div>
        </section> */}
      </main>
      <Socials />
      <Footer />
    </div>
  );
}
