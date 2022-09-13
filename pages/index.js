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
              </h1> 
              <h3 className="mx-3 text-xl text-gray-100 font-openSans text-shadow-sm lg:text-2xl md:mx-24 mt-4">
          The West Coast's largest hackathon for marginalized genders.
              </h3> 
            </div>

            <div className="flex flex-col justify-center mt-8 text-center text-gray-200 font-poppins w-9/12 md:w-1/2 text-md mx-auto" style={{position:'relative',zIndex:10}}>
              {/* <p className="italic text-gray-200">
                  Register your interest now (non-binding)! By submitting the form
                  below, you consent to receiving periodic email updates regarding Hydra
                  Hacks. We promise not to spam or sell your email.
              </p> */}
              <a href="https://airtable.com/shrWxpro32PLk76aB" rel="noopener noreferrer" target="_blank">
                <button className="p-1 px-3 text-white border-2 border-white lg:text-2xl lg:font-semibold rounded-xl font-openSans mt-4">
                  Contest Signup
                </button>
              </a> 
              
            </div>


          </div>
        </section>

        {/* <section className="w-full">
          <div className="flex flex-col md:flex-row md:items-center">
            <div>
              <h2>
                About <span className="text-hydrangea">Hydra Hacks</span>
              </h2>
              <p className="w-full text-gray-600 dark:text-gray-300">
              Hydra Hacks hosts gender-focused events open to high school and college students of marginalized genders.
              Whether you're writing your first line of code or you're an expert hacker, Hydra Hacks is for you. 
              You'll have the opportunity to meet new friends, develop awesome projects, and attend workshops! 
              </p>
            </div>
            <div>
              <Image
                src="/logo.png"
                alt="hydra hacks logo"
                width={250}
                height={250}
                layout="fixed"
                className="absolute hidden w-full md:float-right md:relative"
              />
            </div>
          </div> 
        </section> */}

        <section className="w-full">
          <div className="flex flex-col md:flex-row md:items-center">
            <div>
              <h2>
                Programming <span className="text-hydrangea">Contest</span>
              </h2>
              <p className="w-full text-gray-600 dark:text-gray-300">
              The Hydra Hacks Programming Contest is a 4 hour event on November 12 comprising a programming contest, keynote speech, panel discussion, and awards.
              The competition will provide high school students identifying as a marginalized gender with the opportunity to solve 
              3 creative programming problems in a beginner, intermediate, or advanced division. 
              It will take place on the HackerRank platform where participants can use a programming language of their choice.
              All participants will receive Hydra Hacks swag, and the 
              top 3 finalists in each division will receive prizes worth up to $50. <br /> <br />

              If you are a beginner coder, here are the fundamental concepts you would need to know: booleans/integers/float data structures,
              functions, list and string methods, if/else statements, and for loops and white loops. 
              If you are an intermediate coder, in addition to the skills listed above, you would need to know dictionaries, arrays,
              and random number generations. 
              </p>
            </div>
            <div>
              <Image
                src="/logo.png"
                alt="hydra hacks logo"
                width={250}
                height={250}
                layout="fixed"
                className="absolute hidden w-full md:float-right md:relative"
              />
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="flex flex-col md:flex-row md:items-center">
            <div>
              <h2>
                Schedule <span className="text-hydrangea">(in Pacific Time)</span>
              </h2>
              <p className="w-full text-gray-600 dark:text-gray-300">
                <b>Saturday, November 12</b> <br />
              8:45am - 9:00am: Opening Ceremony <br />
              9:00am - 12:00pm: Contest <br /> 
              12:00pm - 12:45pm: Lunch with Panel Discussion <br />
              12:45pm - 1:00pm: Closing Ceremony and Awards <br />

              </p>
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
