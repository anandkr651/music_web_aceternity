"use client";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";

function page() {
  return (
    <div className="bg-slate-950 h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

      <Meteors number={30} />
        <div className="pt-32 px-5 lg:mx-80 sm:mx-20">
          <div className="text-center ">
          <h1 className="text-7xl font-extrabold ">
            Contact Us
          </h1>
          <p className="mt-6 text-2xl font-extralight ">
            We are here to help with any question about our courses, programs,or events. Reach out and let us know how we can assists you in your musical journey.
          </p>
        </div>
        <form action="#">
        <div className="my-10">
          <label htmlFor="Your email" className="block mb-2 text-sm front-medium text-gray-300">Your email :</label>
          <input type="email" className="shadow-sm bg-gray-500 w-full rounded p-3 border-none outline-none" placeholder="Enter Your Email"/>
        </div>
        <div>
        <label htmlFor="Your message" className="block mb-2 text-sm front-medium text-gray-300">Your message :</label>
        <textarea name="message" id="message" className="text-xl shadow-sm bg-gray-500 w-full rounded p-2 border-none outline-none" placeholder="Enter Your Message"></textarea>
        </div>
        <div className="pt-10 pb-10 ">  
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Send message
            </Button>
        </div>
        </form>
      </div>
    </div>
  );
}
export default page;
