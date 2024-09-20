import { Avatar } from "@chatscope/chat-ui-kit-react";
import { Button } from "@/components/ui/button";
import React from "react";
import IconOutlineCamera from "@/icon/IconOutlineCamera";
import Container from "@/components/Container";
import { CarouselUser } from "@/components/Carousel/CarouselStory";
import PostInProflie from "@/components/post/PostInProflie";
import { Link } from "react-router-dom";

export default function MyProfile() {
  const [posts] = React.useState<boolean>(false);

  return (
    <Container>
      <div className="flex gap-5 my-5">
      <Avatar
          className="max-w-[150px] max-h-[150px] !w-full !h-full"
          name="Emily"
          src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
        />
        <div className="flex flex-col justify-between">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col justify-center items-center">
              <span className="font-medium">xuan tuyen</span>
              <span>cuaa.xt19</span>
            </div>
            <Button
              className="bg-gray-200 hover:bg-gray-300"
              variant={"secondary"}
            >
              <Link to={"/profile/edit"}>Chỉnh sửa trang cá nhân</Link>
            </Button>
          </div>
          <div className="flex gap-3">
            <span>0 bài viết</span>
            <span>23 người theo dõi</span>
            <span>47 người theo dõi</span>
          </div>
          <div>
            <span>
              Chào tất cả mọi người
            </span>
          </div>
        </div>
      </div>
      <div className="flex border-b pb-5">
        <CarouselUser />
      </div>
      {posts ? (
        <div className="my-5">
          <span className="font-normal text-xl">Tất cả bài viết</span>
          <div className="py-9 gap-3 flex flex-col items-center justify-center">
            <IconOutlineCamera />
            <span className="font-medium">Chia sẻ ảnh</span>
            <span>
              Khi bạn chia sẻ ảnh, ảnh sẽ xuất hiện trên trang cá nhân của bạn.
            </span>
          </div>
        </div>
      ) : (
        <div className="my-9">
          <span className="font-semibold text-xl">Tất cả bài viết</span>
          <div className="grid grid-cols-4">
            <PostInProflie />
          </div>
        </div>
      )}
    </Container>
  );
}

