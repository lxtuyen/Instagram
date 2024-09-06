
import { Avatar } from "@chatscope/chat-ui-kit-react";
import React from "react";
import { Link } from "react-router-dom";

interface ISidebarLinkProps {
    username: string;
    id?: number;
  }

export function UserStoryCard({ username}:ISidebarLinkProps) {
  const [watched] = React.useState<boolean>(false);
  return (
    <Link  to={"/"} className='flex flex-col items-center p-3 rounded-md'>
      <Avatar className={`${watched ? "border-4 border-blue-700": "border-4 border-gray-500"} `} size="lg" src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg" />
      <span>{username}</span>
    </Link>
  );
}
