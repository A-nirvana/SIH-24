import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const ReqStar = () => {
  return <span className="text-red-700 text-xl">*</span>;
};

export default function Page() {
  return (
    <div className="flex flex-col gap-1 p-10">
      <div className="py-10 px-[12%] pt-12">
        <div className="w-[60%] mb-8">
          <p className="">
            Bank A/C Number <ReqStar />
          </p>
          <Input />
        </div>
        <div className="w-[60%] mb-8">
          <p className="">
            IFSC Code <ReqStar />
          </p>
          <Input />
        </div>
        <div className="w-[60%] mb-8">
          <p className="">
            Bank Name <ReqStar />
          </p>
          <Input />
        </div>
        <div className="w-[60%] mb-8">
          <p className="">
            Bank Branch Name <ReqStar />
          </p>
          <Input />
        </div>
        <div className="w-[60%] mb-8">
          <p className="">Bank A/C Holder Name</p>
          <Input />
        </div>
      </div>
      <Button className="bg-[#6B58CA] w-[6rem] self-center">Submit</Button>
    </div>
  );
}
