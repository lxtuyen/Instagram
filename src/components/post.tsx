import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import CarouselPost from "./CarouselImage";
import IconOutlineHeart from "@/icon/IconOutlineHeart";
import IconOutlineComments from "@/icon/IconOutlineComments";
import IconHeart from "@/icon/IconHeart";
import IconOutlineEmoji from "@/icon/IconOutlineEmoji";
import IconOutlineFavorite from "@/icon/IconOutlineFavorite";
import IconFavorite from "@/icon/IconFavorite";
import { Input } from "./ui/input";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import React from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from '@/components/ui/form';
import { useForm } from "react-hook-form";
import { FormSchemaComments } from '@/utils/schema';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";

const Post = () => {
  const [like, setLike] = React.useState<boolean>(false);
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [favorite, setFavorite] = React.useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(FormSchemaComments),
    defaultValues: {
      comment: "",
    },
  })

  const onSubmit = async (data:  z.infer<typeof FormSchemaComments>) => {
    console.log(data);
  };

  const addEmoji = async (emoji: { native: string }) => {
    const currentComment = form.getValues("comment");
    form.setValue("comment", currentComment + emoji.native);
  };

  const handleLike = () => {
    setLike(!like);
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="w-full sm:max-w-[470px]">
      <div>
        <Avatar
          className="size-9"
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        <span className="font-semibold m-1">lf.tlinh</span>
        <span className="text-gray-500">• 6 ngày</span>
      </div>
      <CarouselPost />
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div onClick={handleLike}>
            {like ? (<div className="text-red-500"><IconHeart /></div>) : <IconOutlineHeart />}
          </div>
          <IconOutlineComments />
        </div>
        <div onClick={handleFavorite}>
          {favorite ? <IconFavorite /> : <IconOutlineFavorite />}
        </div>
      </div>
      <div className="flex flex-col">
        <span>1.374 lượt thích</span>
        <div className="flex">
          <span className="font-semibold mr-1">lf.tlinh</span>
          <span className="text-sm mt-[2px]">
            tiffany nguyễn trong vai cô hiệu trưởng/nữ doanh nhân 🤵🏻‍♀️
          </span>
        </div>
      </div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-between">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem className="w-3/4">
              <FormControl>
                <Input type="text" className="border-none"  placeholder="Thêm bình luận..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch("comment") !== "" ? <Button className="bg-[#FCFCFC] hover:bg-[#FCFCFC] hover:text-teal-800 text-teal-400" variant={"secondary"} type="submit">Submit</Button>: null }
        <div className="flex justify-center items-center relative" onClick={() => setShowEmoji(!showEmoji)}>
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
  );
};

export default Post;
