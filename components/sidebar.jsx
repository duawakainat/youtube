import Image from "next/image";
import "../app/globals.css";
import classNames from "classnames";
import { useState, useRef, useMemo } from "react";
import Home from "./icon/home";
import Short from "./icon/short";
import Link from "next/link";
import Subcription from "./icon/subcription";
import { useRouter } from "next/navigation";
import Channel from "./icon/channel";
import History from "./icon/history";
import Video from "./icon/video3";
import Watch from "./icon/watch";
import Images from "../public/peakpx.jpg";
const menuItem = [
  { id: 1, Label: "Home", icon: Home, link: "/" },
  { id: 2, Label: "Short", icon: Short, link: "short" },
  { id: 3, Label: "Subcription", icon: Subcription, link: "/icon/subcription" },
];
const menuItem2 = [
  { id: 1, Label: "Your Channel", icon: Channel, link: "/icon/channel" },
  { id: 2, Label: "History", icon: History, link: "/icon/history" },
  { id: 3, Label: "Your Video", icon: Video, link: "/icon/video" },
  { id: 3, Label: "Watch Later", icon: Watch, link: "/icon/watch" },
];
const menuItem3 = [
  {
    id: 1,
    Label: "Kainat Hafeez",
    image: Images,
    link: "../public/peakpx.jpg",
  },
  { id: 2, Label: "Duawa Kainat", image: Images, link: "../public/peakpx.jpg" },
  { id: 3, Label: "Yaaho Video", image: Images, link: "../public/peakpx.jpg" },
  {
    id: 3,
    Label: "Develop Later",
    image: Images,
    link: "../public/peakpx.jpg",
  },
];
export default function Sidebar(props) {
  const [toogleCallapse, settoogleCallapse] = useState(false);
  const [isCallapse, setIsCallapse] = useState(false);
  const router = useRouter();
  const activeMenu = useMemo(
    () => menuItem.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );
  const wrapperClesses = classNames(
    "h-screen px-4 pt-4 flex justify-between flex-col",
    { ["w-60"]: !toogleCallapse, ["w-20"]: toogleCallapse }
  );
  const colapseIcon = classNames(
    "p-4 absolute rounded bg-light text-black right-0",
    {
      "rotate-180": toogleCallapse,
    }
  );

  const getNavItemClasess = (menu) => {
    console.log(router.pathname);
    return classNames(
      "flex items-center cursor-pointer hover:bg-light rounded w-full overflow-hidden whitespace-nowrap",
      {
        // ["bg-light-lighter"]: activeMenu.id === menu.id
      }
    );
  };
  const onMouseOver = () => {
    setIsCallapse(!isCallapse);
  };
  const handleSidebarToogle = () => {
    settoogleCallapse(!toogleCallapse);
  };
  return (
    <div>
      <div className="grid grid-cols-1 text-center">hellokainat</div>

      <div className="flex flex-col ">
        <div className="flex justify-between items-center relative">
          <div className="flex items-center pl-1 gap-4">
            <button onClick={handleSidebarToogle}>colapse</button>
            <Image
              src="/YouTube_Logo_2017.svg.png"
              alt="image"
              width={90}
              height={20}
            />
          </div>
        </div>
        <div
          className={wrapperClesses}
          onMouseEnter={onMouseOver}
          onMouseLeave={onMouseOver}
        >
          <div className="flex flex-col items-start">
            {menuItem.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasess(menu);
              return (
                <div
                  key={menu.id}
                  className={classes}
                  style={{ height: "40px" }}
                >
                  <Link href={menu.link}>
                    <div className="flex px-3 w-full h-full">
                      <div style={{ width: "48px" }}>
                        <Icon style={{ width: "1.5rem" }} />
                      </div>
                      {!toogleCallapse && (
                        <span
                          className={classNames(
                            "text-sm font-medium text-text-light"
                          )}
                        >
                          {menu.Label}
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <ul>
            {" "}
            <li className="border-b-[1px] border-gray-300 my-3"></li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex me-3 whitespace-nowrap">You</span>
                <svg
                  class="w-3 h-3 text-[#0f0f0f] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="#0f0f0f"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <div className="flex flex-col items-start">
            {menuItem2.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasess(menu);
              return (
                <div
                  key={menu.id}
                  className={classes}
                  style={{ height: "40px" }}
                >
                  <Link href={menu.link}>
                    <div className="flex px-3 w-full h-full">
                      {!toogleCallapse && (
                        <div style={{ width: "48px" }}>
                          <Icon style={{ width: "1.5rem" }} />
                        </div>
                      )}
                      {!toogleCallapse && (
                        <span
                          className={classNames(
                            "text-sm font-medium text-text-light"
                          )}
                        >
                          {menu.Label}
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <ul>
            <li className="border-b-[1px] border-gray-300 my-3"></li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex me-3 font-medium whitespace-nowrap">
                  Subscription
                </span>
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-start">
            {menuItem3.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasess(menu);
              return (
                <div
                  key={menu.id}
                  className={classes}
                  style={{ height: "40px" }}
                >
                  <Link href={menu.link}>
                    <div className="flex px-3 w-full h-full">
                      {!toogleCallapse && (
                        <div style={{ width: "48px" }}>
                          <Image
                            src={menu.image}
                            alt="image"
                            className="rounded-full"
                            width={24}
                            height={24}
                            style={{ width: "1.5rem", height: "1.5rem" }}
                          />
                        </div>
                      )}
                      {!toogleCallapse && (
                        <span
                          className={classNames(
                            "text-sm font-medium text-text-light"
                          )}
                        >
                          {menu.Label}
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
