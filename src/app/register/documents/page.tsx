"use client";
import Button from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-10 gap-10">
        <span className="flex justify-between w-[50%]">
          <label htmlFor="aadhar">Aadhar Card:</label>
          <label
            htmlFor="aadhar"
            className=" flex items-center justify-around w-[20rem] h-[2rem] bg-white rounded-md border-[0.5px] border-black"
          >
            <Upload />
            <input hidden type="file" id="aadhar" />
            <div className="btn min-h-[1rem] h-[1.5rem]  text-sm bg-[#6b58cad6] hover:bg-[#6b58cad6] text-white border-none">
              Browse
            </div>
          </label>
        </span>
        <span className="flex justify-between w-[50%]">
          <label htmlFor="aadhar">Passport Size Photo:</label>
          <label
            htmlFor="aadhar"
            className=" flex items-center justify-around w-[20rem] h-[2rem] bg-white rounded-md border-[0.5px] border-black"
          >
            <Upload />
            <input hidden type="file" id="aadhar" />
            <div className="btn min-h-[1rem] h-[1.5rem]  text-sm bg-[#6b58cad6] hover:bg-[#6b58cad6] text-white border-none">
              Browse
            </div>
          </label>
        </span>
        <span className="flex justify-between w-[50%]">
          <label htmlFor="aadhar">Class 12 Marksheet:</label>
          <label
            htmlFor="aadhar"
            className=" flex items-center justify-around w-[20rem] h-[2rem] bg-white rounded-md border-[0.5px] border-black"
          >
            <Upload />
            <input hidden type="file" id="aadhar" />
            <div className="btn min-h-[1rem] h-[1.5rem]  text-sm bg-[#6b58cad6] hover:bg-[#6b58cad6] text-white border-none">
              Browse
            </div>
          </label>
        </span>
        <span className="flex justify-between w-[50%]">
          <label htmlFor="aadhar">Class 10 Marksheet:</label>
          <label
            htmlFor="aadhar"
            className=" flex items-center justify-around w-[20rem] h-[2rem] bg-white rounded-md border-[0.5px] border-black"
          >
            <Upload />
            <input hidden type="file" id="aadhar" />
            <div className="btn min-h-[1rem] h-[1.5rem]  text-sm bg-[#6b58cad6] hover:bg-[#6b58cad6] text-white border-none">
              Browse
            </div>
          </label>
        </span>
        <span className="flex justify-between w-[50%]">
          <label htmlFor="aadhar">Caste Certificate:</label>
          <label
            htmlFor="aadhar"
            className=" flex items-center justify-around w-[20rem] h-[2rem] bg-white rounded-md border-[0.5px] border-black"
          >
            <Upload />
            <input hidden type="file" id="aadhar" />
            <div className="btn min-h-[1rem] h-[1.5rem]  text-sm bg-[#6b58cad6] hover:bg-[#6b58cad6] text-white border-none">
              Browse
            </div>
          </label>
        </span>
        <span className="flex justify-between w-[50%]">
          <label htmlFor="aadhar">Domicile Certificate:</label>
          <label
            htmlFor="aadhar"
            className=" flex items-center justify-around w-[20rem] h-[2rem] bg-white rounded-md border-[0.5px] border-black"
          >
            <Upload />
            <input hidden type="file" id="aadhar" />
            <div className="btn min-h-[1rem] h-[1.5rem]  text-sm bg-[#6b58cad6] hover:bg-[#6b58cad6] text-white border-none">
              Browse
            </div>
          </label>
        </span>
        <Button className="bg-[#6B58CA] w-[6rem] self-center">Submit</Button>
      </div>
    </div>
  );
}
