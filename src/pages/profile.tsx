import { Avatar } from "@chatscope/chat-ui-kit-react";
import { Button } from "@/components/ui/button";
import React from "react";
import IconOutlineCamera from "@/icon/IconOutlineCamera";
import Container from "@/components/Container";
import { CarouselUser } from "@/components/Carousel/CarouselStory";
import { TbMessageCircleFilled } from "react-icons/tb";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, Image } from "antd";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FormSchemaComments } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import IconOutlineEmoji from "@/icon/IconOutlineEmoji";
import Picker from "@emoji-mart/react";
import { Input } from "@/components/ui/input";
import data from "@emoji-mart/data";
import IconOutlineHeart from "@/icon/IconOutlineHeart";
import IconOutlineComments from "@/icon/IconOutlineComments";
import IconHeart from "@/icon/IconHeart";
import IconOutlineFavorite from "@/icon/IconOutlineFavorite";
import IconFavorite from "@/icon/IconFavorite";
import IconOutlineMore from "@/icon/IconOutlineMore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Profile() {
  const [posts] = React.useState<boolean>(false);

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
            <Post />
          </div>
        </div>
      )}
    </Container>
  );
}

function Post() {
  const [like, setLike] = React.useState<boolean>(false);
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [favorite, setFavorite] = React.useState<boolean>(false);
  const [comments, setComments] = React.useState<{ text: string }[]>([]);
  const form = useForm({
    resolver: zodResolver(FormSchemaComments),
    defaultValues: {
      text: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof FormSchemaComments>) => {
    setComments((prevComments) => [...prevComments, { text: data.text }]);
    form.reset();
  };

  const addEmoji = async (emoji: { native: string }) => {
    const currentComment = form.getValues("text");
    form.setValue("text", currentComment + emoji.native);
  };

  const handleLike = () => {
    setLike(!like);
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const renderComments = () => {
    if (comments.length === 0) {
      return <></>;
    }
    return comments.map((comment, index) => (
      <div className="mb-4 flex gap-2" key={index}>
        <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        <div>
          <div className="flex gap-2 mt-2">
            <span className="font-medium">Username:</span>
            <p>{comment.text}</p>
          </div>
          <span className="text-gray-400">21 giờ</span>
        </div>
      </div>
    ));
  };
  return (
    <Dialog>
      <div className="relative rounded-lg overflow-hidden border border-white/30 cursor-pointer max-w-[309px] max-h-[309px]">
        <DialogTrigger asChild>
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center z-10">
            <div className="flex gap-12">
              <div className="flex items-center">
                <span className="text-white">
                  <IconHeart />
                </span>
                <span className="text-white font-bold ml-2" id="likes-count">
                  100
                </span>
              </div>
              <div className="flex items-center">
                <TbMessageCircleFilled className="text-white size-7" />
                <span className="text-white font-bold ml-2" id="comments-count">
                  20
                </span>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt="profile post"
          className="w-full h-full object-cover"
        />
      </div>
      <DialogContent className="flex gap-4 p-0 max-w-[1000px]">
        <Carousel
          className="w-[468px]"
          arrows
          dotPosition="left"
          infinite={false}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              className="rounded-sm"
              width={468}
              height={585}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          ))}
        </Carousel>
        <div className="flex-1 flex flex-col p-5 justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 mb-4">
                <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                <span className="font-medium">username</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer" asChild>
                  <div>
                    <IconOutlineMore />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52">
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-gray-200 cursor-pointer">
                      Cập nhật bài viết
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-200 cursor-pointer">
                      Xóa bài viết
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p>
              The Rules in Nekovia are simple... 🐱 The Rules in Nekovia are
              simple... 🐱
            </p>
            <hr className="border-gray-200 mb-4" />
            <div className="mb-4 flex gap-2">
              <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              <div>
                <div className="flex gap-2 mt-2">
                  <span className="font-medium">Username:</span>
                  <p>xinh qua a 🐱</p>
                </div>
                <span className="text-gray-400">21 giờ</span>
              </div>
            </div>
            <div>{renderComments()}</div>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="cursor-pointer" onClick={handleLike}>
                  {like ? (
                    <div className="text-red-500">
                      <IconHeart />
                    </div>
                  ) : (
                    <IconOutlineHeart />
                  )}
                </div>
                <div className="cursor-pointer">
                  <IconOutlineComments />
                </div>
              </div>
              <div className="cursor-pointer" onClick={handleFavorite}>
                {favorite ? <IconFavorite /> : <IconOutlineFavorite />}
              </div>
            </div>
            <span className="font-medium">241.003 lượt thích</span>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex justify-between"
              >
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem className="w-3/4">
                      <FormControl>
                        <Input
                          type="text"
                          className="border-none"
                          placeholder="Thêm bình luận..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {form.watch("text") !== "" ? (
                  <Button
                    className="bg-[#FCFCFC] hover:bg-[#FCFCFC] hover:text-teal-800 text-teal-400"
                    variant={"secondary"}
                    type="submit"
                  >
                    Submit
                  </Button>
                ) : null}
                <div
                  className="flex justify-center items-center relative"
                  onClick={() => setShowEmoji(!showEmoji)}
                >
                  <IconOutlineEmoji />
                  {showEmoji && (
                    <div className="absolute bottom-[100%] left-8">
                      <Picker
                        data={data}
                        emojiSize={20}
                        emojiButtonSize={28}
                        onEmojiSelect={addEmoji}
                        maxFrequentRows={0}
                      />
                    </div>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
