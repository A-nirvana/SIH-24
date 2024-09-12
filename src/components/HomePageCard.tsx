import Image from "next/image";

interface inputProps {
  svg: string;
  text: string;
}
export default function HomePageCard(props: inputProps) {
  return (
    <div className="h-[12rem] w-[12rem] cursor-pointer hover:bg-[#27252510] hover:border hover:border-[#6B58CA] hover:border-spacing-4 rounded-2xl flex flex-col items-center justify-center">
      <Image src={props.svg} width={40} height={40} alt="svg" />
      <h6 className="text-black text-xl">{props.text}</h6>
    </div>
  );
}
