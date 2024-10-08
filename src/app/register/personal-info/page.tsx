import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ReqStar = () => {
  return <span className="text-red-700 text-xl">*</span>;
};

export default function Page() {
  return (
    <div className="py-10 px-[12%] pt-12">
      <p>
        Full Name <ReqStar />{" "}
      </p>
      <div className="flex justify-between mt-2">
        <div className="w-[42%]">
          <Input />
          <p className="text-sm text-[#7A7171]">First Name</p>
        </div>
        <div className="w-[42%]">
          <Input />
          <p className="text-sm text-[#7A7171]">Last Name</p>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[42%]">
          <p className="">
            Father&apos;s Name <ReqStar />
          </p>
          <Input />
        </div>
        <div className="w-[42%]">
          <p className="">
            Mother&apos;s Name <ReqStar />
          </p>
          <Input />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[42%]">
          <p className="">
            Gender <ReqStar />
          </p>
          <div className="flex gap-10">
            <label className="flex items-center gap-1 ">
              <input
                type="radio"
                name="gender"
                id="male"
                className="appearance-none h-4 w-4 border border-black bg-white rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 "
              />
              Male
            </label>
            <label className="flex items-center gap-1 ">
              <input
                type="radio"
                name="gender"
                id="female"
                className="appearance-none h-4 w-4 border border-black bg-white rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 "
              />
              Female
            </label>
          </div>
        </div>
        <div className="w-[42%]">
          <p className="">
            Date Of Birth <ReqStar />
          </p>
          <Input type="date" />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[42%]">
          <p className="">
            E-mail <ReqStar />
          </p>
          <Input />
        </div>
        <div className="w-[42%]">
          <p className="">
            Phone Number <ReqStar />
          </p>
          <Input />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[42%]">
          <p>Get OTP</p>
          <Button className="bg-[#6B58CA]">Send OTP</Button>
        </div>
        <div className="w-[42%]">
          <p className="">
            OTP
            <ReqStar />
          </p>
          <div className="flex gap-2">
            {Array.from({ length: 6 }).map((_, idx) => {
              return <Input key={idx} className="w-[10%]" />;
            })}
          </div>
          <p className="text-sm text-[#7A7171]">OTP sent to Phone Number</p>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[42%]">
          <p className="">
            Nationality <ReqStar />
          </p>
          <Input />
        </div>
        <div className="w-[42%]">
          <p className="">
            Category <ReqStar />
          </p>
          <div className="flex gap-10">
            <label className="flex items-center gap-1 ">
              <input
                type="radio"
                name="category"
                id="general"
                className="appearance-none h-4 w-4 border border-black bg-white rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 "
              />
              General
            </label>
            <label className="flex items-center gap-1 ">
              <input
                type="radio"
                name="category"
                id="obc-ncl"
                className="appearance-none h-4 w-4 border border-black bg-white rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 "
              />
              OBC-NCL
            </label>
            <label className="flex items-center gap-1 ">
              <input
                type="radio"
                name="category"
                id="sc"
                className="appearance-none h-4 w-4 border border-black bg-white rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 "
              />
              SC
            </label>
            <label className="flex items-center gap-1 ">
              <input
                type="radio"
                name="category"
                id="ST"
                className="appearance-none h-4 w-4 border border-black bg-white rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 "
              />
              ST
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-[42%]">
          <p>
            Address <ReqStar />
          </p>
          <Input className="h-[90%]" />
        </div>
        <div className="w-[42%]">
          <p className="">
            Are you a specially abled person? <ReqStar />
          </p>
          <div className="flex gap-10 mb-4">
            <label className="flex items-center gap-1 ">
              <input
                type="radio"
                name="disable"
                id="yes"
                className="appearance-none h-4 w-4 border border-black bg-white rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 "
              />
              Yes
            </label>
            <label className="flex items-center gap-1 ">
              <input
                type="radio"
                name="disable"
                id="no"
                className="appearance-none h-4 w-4 border border-black bg-white rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none transition duration-200 "
              />
              No
            </label>
          </div>
          <p className="">
            Password <ReqStar />
          </p>
          <Input />
          <p className="mt-2">
            Confirm Password <ReqStar />
          </p>
          <Input />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Button className="bg-[#6B58CA]">Submit</Button>
      </div>
    </div>
  );
}
