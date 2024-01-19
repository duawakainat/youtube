import Image from "next/image";
import YourInfo from "./YourInfo";

export const metadata = {
  title: "YourChannel Page",
  description: "YourChannel more discription",
};

const Page = (props) => {
  return (
    <div>
      <YourInfo />
    </div>
  );
};

export default Page;
