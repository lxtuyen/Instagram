import { Link } from "react-router-dom";

import AvatarUser from "../Avatar";

interface ISidebarLinkProps {
  fullName: string;
  username: string;
  id?: number;
}

export function UserSearchCard({ fullName, username }: ISidebarLinkProps) {
  return (
    <div className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md">
      <Link to={"/"} className="flex hover:text-black items-center space-x-4">
        <AvatarUser />
        <div className="flex flex-col">
          <span className="font-bold">{username}</span>
          <span>{fullName}</span>
        </div>
      </Link>
    </div>
  );
}
