import { Avatar } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";

interface ISidebarLinkProps {
  fullName: string;
  username: string;
  id?: number;
}

export function UserSearchCard({ fullName, username }: ISidebarLinkProps) {
  const [follow, setFollow] = React.useState<boolean>(false);
  const onClick = () => {
    setFollow(!follow);
  };
  return (
    <div className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md">
      <Link to={"/"} className="flex hover:text-black items-center space-x-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Avatar
              className="size-12"
              src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent className="w-96">
            <div className="">
              <div className="flex gap-2">
                <Avatar
                  className="size-12"
                  src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                />
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
              <Button
                className="mt-5 w-full bg-cyan-500 hover:bg-cyan-600"
                variant={"default"}
              >
                Theo dõi
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>
        <div className="flex flex-col">
          <span className="font-bold">{username}</span>
          <span>{fullName}</span>
        </div>
      </Link>

      {follow === true ? (
        <span onClick={onClick} className="hover:text-red-800 text-red-400">
          Hủy theo dõi
        </span>
      ) : (
        <span onClick={onClick} className="hover:text-teal-800 text-teal-400">
          Theo dõi
        </span>
      )}
    </div>
  );
}
