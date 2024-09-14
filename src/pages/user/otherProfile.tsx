import { Avatar } from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

import IconOutlineCamera from "@/icon/IconOutlineCamera";
import Container from "@/components/Container";
import { CarouselUser } from "@/components/Carousel/CarouselStory";
import PostInProflie from "@/components/post/PostInProflie";
import { Button } from "@/components/ui/button";
import IconOutlineMessage from "@/icon/IconOutlineMessage";
import { Link } from "react-router-dom";

export default function OtherProfile() {
  const [posts] = useState<boolean>(false);
  const [follow, setFollow] = useState<boolean>(true);
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
            <>
            <Button
                className="bg-sky-500 hover:bg-sky-600 flex gap-2"
                variant={"default"}
              >
                <IconOutlineMessage />
                <Link to={'/'}> Nhắn tin</Link>
              </Button>
            </>
            {follow ? (
              <Button
                className="bg-sky-500 hover:bg-sky-600 text-white"
                variant={"secondary"}
                onClick={() => {
                  setFollow(!follow);
                }}
              >
                Theo dõi
              </Button>
            ) : (

              <Button
                className="bg-red-500 hover:bg-red-600 text-white"
                variant={"secondary"}
                onClick={() => {
                  setFollow(!follow);
                }}
              >
                Hủy theo dõi
              </Button>
            )}
          </div>
          <div className="flex gap-3">
            <span>0 bài viết</span>
            <span>23 người theo dõi</span>
            <span>47 người theo dõi</span>
          </div>
          <div>
            <span>
              𝐿𝒾𝒻𝑒 𝒾𝓈 𝓈𝑜 𝒷𝑒𝒶𝓊𝓉𝒾𝒻𝓊𝓁, 𝑜𝓃𝑒 𝒹𝒶𝓎, 𝑜𝓃𝑒 𝒽𝑜𝓊𝓇, 𝑜𝓃𝑒 𝓂𝒾𝓃𝓊𝓉𝑒 𝓌𝒾𝓁𝓁 𝓃𝑒𝓋𝑒𝓇
              𝒸𝑜𝓂𝑒 𝒶𝑔𝒶𝒾𝓃... 𝒮𝑜 𝒿𝓊𝓈𝓉 𝒻𝑜𝓇𝑔𝑒𝓉 𝒶𝓁𝓁 𝓎𝑜𝓊𝓇 𝓅𝓇𝑜𝒷𝓁𝑒𝓂𝓈 𝒶𝓃𝒹 𝒷𝑒 𝒽𝒶𝓅𝓅𝓎 ..😊
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
