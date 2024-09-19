import { UserCard } from "@/components/userCard/UserSuggestedCard";
import { CarouselUser } from "@/components/Carousel/CarouselStory";
import { Link } from "react-router-dom";
import { Post } from "@/components/post/Post";
import React from "react";
import SkeletonTag from "@/components/SkeletonTag";
import { Avatar } from "antd";

export default function Home() {
  const [loading, setLoading] = React.useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div className="bg-[#FCFCFC] px-6 py-3 flex">
      <div className="flex gap-5 flex-col w-2/3 justify-center">
        <div className="flex justify-center">
          <CarouselUser />
        </div>
        <div className="flex justify-center">
          <Post />
        </div>
      </div>
      <div className="w-1/3 p-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Avatar
              className="size-12"
              src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
            />
            <div className="flex-col flex">
              <span className="font-bold">Username</span>
              <span>fullname</span>
            </div>
          </div>
          <span className="hover:text-red-500 text-teal-400 text-center">
            Đăng xuất
          </span>
        </div>
        <div className="flex justify-between py-4">
          <span className="font-semibold text-gray-500 text-lg ">
            Gợi ý cho bạn
          </span>
          <Link className="hover:text-gray-400 font-medium" to={"/suggested"}>
            Xem tất cả
          </Link>
        </div>
        <div>
          {loading ? (
            <>
              <SkeletonTag />
              <SkeletonTag />
              <SkeletonTag />
              <SkeletonTag />
            </>
          ) : (
            <div className="flex gap-2 flex-col">
              <UserCard fullName="nguyen van a" username="Cuaaa.45" />
              <UserCard fullName="nguyen van a" username="Cuaaa.45" />
              <UserCard fullName="nguyen van a" username="Cuaaa.45" />
              <UserCard fullName="nguyen van a" username="Cuaaa.45" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
