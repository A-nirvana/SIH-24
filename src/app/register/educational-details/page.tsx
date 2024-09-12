import { Input } from "@/components/ui/input";

import { ReqStar } from "../personal-info/page";
import Button from "@/components/ui/button";

export default function Page() {
  return (
    <div className="py-10 px-[12%] pt-12 flex flex-col gap-4">
      <div>
        <div className="w-[60%] mb-8">
          <p className="">
            course currently enrolled in <ReqStar />
          </p>
          <Input />
        </div>
        <div className="w-[60%] mb-8">
          <p className="">
            Name of Institution <ReqStar />
          </p>
          <Input />
        </div>
        <span className="flex justify-between">
          <div className="w-[60%] mb-8">
            <p className="">
              Year of Enrollment <ReqStar />
            </p>
            <Input className="w-[11rem]" />
          </div>
          <div className="w-[60%] mb-8 mr-[14rem]">
            <p className="">
              Year of Passout (expected) <ReqStar />
            </p>
            <Input className="w-[13rem]" />
          </div>
        </span>
        <span className="flex justify-between items-center gap-8">
          <div className="w-[50%] mb-8">
            <p className="">
              Class 12th score
              <ReqStar />
            </p>
            <Input />
          </div>
          <div className="w-[50%] mb-8">
            <p className="">Class 10th scroe</p>
            <Input />
          </div>
        </span>
        <label className="w-[100%] mb-8">
          <p className="">Address of current Institution</p>
          <textarea className="bg-white w-full h-[10rem] p-2"></textarea>
        </label>
      </div>
      <Button className="w-[6rem] self-center bg-[#6B58CA]">Submit</Button>
    </div>
  );
}
