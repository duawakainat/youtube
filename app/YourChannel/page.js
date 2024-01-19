export const metadata = {
  title: "YourChannel Page",
  description: "YourChannel more discription",
};
import Image from "next/image";
import YourInfo from "./YourInfo";
const Page = (props) => {
  return (
    <div>
      <YourInfo />
    </div>
  );
};

export default Page;
