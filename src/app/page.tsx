"use client";
import DragAndDropImageUploader from "@/components/DragDrop";
import Footer from "@/components/Footer";
import HomePageCard from "@/components/HomePageCard";
import Button from "@/components/ui/button";
import { Jost } from "next/font/google";
import Image from "next/image";

const jost = Jost({ subsets: ["latin"] });

export default function Home() {
  const handleImageUpload = (file: File) => {
    console.log("Image uploaded:", file);
  };
  // return <DragAndDropImageUploader onImageUpload={handleImageUpload} />;
  return (
    <main className={jost.className}>
      <section className="flex justify-center h-[100vh] w-full bg-[#222831] text-white">
        <div className="flex flex-col w-[50%] justify-center gap-10 pl-[10%]">
          <div>
            <h1 className="font-bold text-4xl">
              Want to get the best scholarships available in the country? <br />
              <span className="text-[#6B58CA]">Scholarific</span> is here for you.
            </h1>
          </div>
          <div>
            <h5>
              Get the best scholarships available in The Prime Minister&apos;s Special Scholarship Scheme.
              Get reminders and notifications for the scholarships you are eligible for.
              Get verified for scholarships and recieve payments within a few days with <span className="text-[#6B58CA] text-lg">SCHOLARIFIC</span>.
            </h5>
          </div>
          <div>
            <Button className="bg-[#43BBAD]">Apply Now</Button>
          </div>
        </div>
        {/* picture is not done */}
        <div className="w-[50%] flex justify-center items-end">
          <div className="bg-gradient-to-t from-[#43BBAD] to-transparent rounded-b-3xl">
            <Image
              src="/landingGirl.svg"
              width={300}
              height={1000}
              alt="scGirl"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-[100vh] flex flex-col items-center justify-center gap-10 bg-[#D4D6D7]">
        <h1 className="text-black text-6xl font-semibold text-center leading-[5rem] w-[60%]">
          For You Category of Each Scholarships
        </h1>
        <div className="flex justify-around gap-6">
          <HomePageCard
            svg="/OfficeBuildingOutline.svg"
            text="School Students"
          />
          <HomePageCard svg="/CollectionOutline.svg" text="College Student" />
          <HomePageCard svg="/CloudUploadOutline.svg" text="Post Graduation" />
          <HomePageCard
            svg="/BookmarkAltOutline.svg"
            text="Other scholarships"
          />
        </div>
      </section>
      <section className="w-full h-[90vh] flex justify-center bg-[#D4D6D7]">
        <div className="w-1/6 bg-blue-">
          <div className="w-[80%] h-[80%] bg-gradient-to-t from-[#483C84] to-[#D4D6D7]"></div>
        </div>
        <div className="w-1/6 bg-red- mt-[10%]">
          <div className="w-[80%] h-[80%] bg-gradient-to-t from-[#43BBAD] to-[#D4D6D7]"></div>
        </div>
        <div className="w-3/6 flex flex-col gap-8">
          <h1 className="text-6xl text-black font-semibold">
            We Are Very <br />
            Experienced and Most <br /> Popular
          </h1>
          <span>
            <h1 className="text-6xl text-[#483C84] font-semibold">300k+</h1>
            <p className="text-black">Students benifitted till date</p>
          </span>
          <p className="text-black text-xl">
            We are the most experienced and popular scholarship platform in the country.
            We have helped over 300k students to get the best scholarships available in the country.
            We have a team of experts who are always ready to help you with any queries you have.
          </p>
        </div>
      </section>
      <section className="w-full h-[100vh] bg-[#D4D6D7]  flex justify-center items-center px-10">
        <div className="w-[50%] flex flex-col justify-center gap-8 pl-20">
          <h1 className="text-6xl text-black font-semibold">
            What Students
            <br />
            Say about Us ?
          </h1>
          <p className="text-xl text-black">
            It was a great experience with Scholarific. I got the best scholarship available in the country.
            Now I am studying in one of the best colleges in the country. Thank you Scholarific.
          </p>
          <button className="bg-[#6B58CA] btn text-white hover:bg-[#6B58CA] w-[8rem] border-none rounded-md">
            View More
          </button>
        </div>
        <div className="w-[50%] ">
          <div className="relative w-64 h-48 top-20 left-20">
            <div className="flex justify-center items-end absolute w-full h-[18rem] bg-[#6B58CA] shadow-lg rounded-lg z-30 bottom-0 left-0 -translate-x-4 translate-y-4">
              <Image
                src="/scholarshipGirl.png"
                width={200}
                height={400}
                alt="scholarshipGirl-image"
              />
            </div>
            <div className="absolute w-full h-[18rem] bg-[#6b58ca80] shadow-lg rounded-lg p-4 z-20 bottom-6 left-6 -translate-x-2 translate-y-2"></div>
            <div className="absolute w-full h-[18rem] bg-[#6b58ca66] shadow-lg rounded-lg p-4 z-10 bottom-12 left-12"></div>
          </div>
        </div>
      </section>
      <section className="w-full h-[80vh] flex">
        <div className="w-0 md:w-[12rem] h-[12rem] bg-gradient-to-b from-[#43BBAD] to-[#222831] "></div>
        <div className="w-full flex flex-col gap-10 items-center justify-center">
          <span>
            <h1 className="text-5xl text-center font-semibold text-white">
              Register and Subsribe
            </h1>
            <h2 className="text-4xl text-center font-semibold text-white">
              Now for Scholarship
            </h2>
          </span>
          <p className="text-center px-20 text-[#A69999]">
            No more worries for lack of financial support for your studies. Scholarific is here. <br/>
            Register quickly and subscribe to the best scholarships available in the country.<br/>
            Get reminders and notifications for the scholarships you are eligible for.
            Get to your dream college with Scholarific.<br/> Register Now.
          </p>
          <button className="w-[8rem] bg-[#6B58CA] btn text-white hover:bg-[#6B58CA]">
            Know More
          </button>
        </div>
        <div className="w-0 md:w-[12rem] h-[12rem] bg-gradient-to-t from-[#483C84] to-[#222831] self-end"></div>
      </section>
      <Footer />
    </main>
  );
}
