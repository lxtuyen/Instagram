import { SearchItem } from "@/components/SearchItem";
import { CarouselList } from "@/components/CarouselStory";
import { Link } from "react-router-dom";
import Post from "@/components/post";
import React from "react";
import SkeletonTag from "@/components/skeletonTag";

export default function Home() {
  const [loading, setLoading] = React.useState<boolean>(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

  return (
    <div className="bg-[#FCFCFC] px-6 py-3 flex">
      <div className="flex flex-col w-2/3">
        <div className="flex justify-center my-5">
          <CarouselList />
        </div>
        <div className="flex justify-center">
          <Post />
        </div>
      </div>
      <div className="w-1/3">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-500 text-lg ">
            Gợi ý cho bạn
          </span>
          <Link className="hover:text-gray-400 font-medium" to={"/"}>
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
            <>
              <SearchItem fullName="nguyen van a" username="Cuaaa.45" />
              <SearchItem fullName="nguyen van a" username="Cuaaa.45" />
              <SearchItem fullName="nguyen van a" username="Cuaaa.45" />
              <SearchItem fullName="nguyen van a" username="Cuaaa.45" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
