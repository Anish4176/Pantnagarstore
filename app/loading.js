import Image from "next/image";
import loader from "@/public/loader.svg";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center w-full h-[100vh] ">
      <div>
        <Image src={loader} alt="Loading..." width={150} height={150} />
      </div>
    </div>
  );
}
