import { Avatar } from "@chatscope/chat-ui-kit-react";
import { Button } from "@/components/ui/button";
import { Card } from "antd";
import { FaRegMessage } from "react-icons/fa6";
import IconOutlineHeart from "@/icon/IconOutlineHeart";
import React from "react";
import IconOutlineCamera from "@/icon/IconOutlineCamera";
import Container from "@/components/container";
import { CarouselUser } from "@/components/CarouselStory";

export default function Profile() {
  const [posts] = React.useState([]);


  return (
    <Container>
      <div className="flex gap-2 my-5">
        <Avatar
          size="lg"
          name="Emily"
          src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
        />
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col justify-center items-center">
              <span className="font-medium">xuan tuyen</span>
              <span>cuaa.xt19</span>
            </div>
            <Button
              className="bg-gray-200 hover:bg-gray-300"
              variant={"secondary"}
            >
              Chỉnh sửa trang cá nhân
            </Button>
            <Button
              className="bg-gray-200 hover:bg-gray-300"
              variant={"secondary"}
            >
              Xem kho lưu trữ
            </Button>
          </div>
          <div className="flex gap-3">
            <span>0 bài viết</span>
            <span>23 người theo dõi</span>
            <span>47 người theo dõi</span>
          </div>
        </div>
      </div>
      <div className="flex border-b pb-5">
            <CarouselUser />
      </div>
      {posts !== null ? (
        <div className="my-5">
          <span className="font-normal text-xl">Tất cả bài viết</span>
          <div className="py-9 gap-3 flex flex-col items-center justify-center">
            <IconOutlineCamera />
            <span className="font-medium">Chia sẻ ảnh</span>
            <span>Khi bạn chia sẻ ảnh, ảnh sẽ xuất hiện trên trang cá nhân của bạn.</span>
          </div>
        </div>
      ) : (
        <div className="my-9">
          <span className="font-normal text-xl">Tất cả bài viết</span>
          <div className="grid grid-cols-4">
            <Post />
            <Post />
          </div>
        </div>
      )}
    </Container>
  );
}
function Post() {
  return (
    <Card
      className="m-2"
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <div className="flex justify-between p-2">
        <div className="flex gap-2">
          <IconOutlineHeart />
          <span>123.564</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <FaRegMessage className="size-5" />
          <span>123</span>
        </div>
      </div>
    </Card>
  );
}
