import { Link } from "react-router-dom";
import React from "react";
import { Button } from "../ui/button";
import AvatarUser from "../Avatar";

interface ISidebarLinkProps {
  fullName: string;
  username: string;
  id?: number;
}

export function UserSuggestedCard({
  fullName,
  username,
}: ISidebarLinkProps) {
  const [follow, setFollow] = React.useState<boolean>(false);
  const onClick = () => {
    setFollow(!follow);
  };
  return (
    <div className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md w-full max-w-[500px]">
      <Link to={"/"} className="flex hover:text-black items-center space-x-4">
        <AvatarUser />
        <div className="flex flex-col">
          <span className="font-bold">{username}</span>
          <span>{fullName}</span>
        </div>
      </Link>

      {follow === true ? (
        <Button
          onClick={onClick}
          className="hover:bg-gray-300 bg-gray-200 text-black"
          variant={"default"}
        >
          Đang theo dõi
        </Button>
      ) : (
        <Button
          onClick={onClick}
          className="mt-5 bg-cyan-500 hover:bg-cyan-600 "
          variant={"default"}
        >
          Theo dõi
        </Button>
      )}
    </div>
  );
}
export function UserCard({
  fullName,
  username,
}: ISidebarLinkProps) {
  const [follow, setFollow] = React.useState<boolean>(false);
  const onClick = () => {
    setFollow(!follow);
  };
  return (
    <div className="flex justify-between items-center hover:bg-gray-100 rounded-md w-full max-w-[500px]">
      <Link to={"/"} className="flex hover:text-black items-center space-x-4">
        <AvatarUser />
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
