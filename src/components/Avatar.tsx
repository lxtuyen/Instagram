import { Avatar } from "antd";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import React from "react";
import { Link } from "react-router-dom";
import IconOutlineMessage from "@/icon/IconOutlineMessage";

export default function AvatarUser() {
  const [follow, setFollow] = React.useState<boolean>(false);
  const onClick = () => {
    setFollow(!follow);
  };
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar
          className="size-12 cursor-pointer"
          src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="">
          <div className="flex gap-2">
            <Link to={"/"}>
            <Avatar
              className="size-12"
              src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
            />
            </Link>
            <div className="flex flex-col">
              <span className="font-semibold">oafnghh</span>
              <span>Lê Minh Hoàng</span>
            </div>
          </div>
          <div className="p-5 border-b-2 flex gap-4 justify-center">
            <div className="flex flex-col  items-center">
              <span className="font-medium">0</span>
              <span>bài viết</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">7</span>
              <span>người theo dõi</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-medium">6</span>
              <span>đang theo dõi</span>
            </div>
          </div>

          {follow === true ? (
            <div className="mt-5 flex justify-around items-center">
              <Button
                className="w-1/3 bg-cyan-500 hover:bg-cyan-600 flex gap-2"
                variant={"default"}
              >
                <IconOutlineMessage/>
                <Link to={'/'}> Nhắn tin</Link>
              </Button>
              <Button
                onClick={onClick}
                className="hover:bg-gray-300 bg-gray-200 text-black w-1/3"
                variant={"default"}
              >
                Đang theo dõi
              </Button>
            </div>
          ) : (
            <Button
              className="mt-5 w-full bg-cyan-500 hover:bg-cyan-600"
              variant={"default"}
              onClick={onClick}
            >
              Theo dõi
            </Button>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
