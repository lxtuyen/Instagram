import { GoArrowLeft } from "react-icons/go";
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
import { Input } from "@/components/ui/input";
import IconOutlineSend from "@/icon/IconOutlineSend";
import IconOutlineHeart from "@/icon/IconOutlineHeart";
import IconHeart from "@/icon/IconHeart";
import React from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Stories from "react-insta-stories";
import { Link,/* useNavigate*/ } from "react-router-dom";
import {
  Avatar,
  Conversation,
  ConversationList,
  Sidebar,
} from "@chatscope/chat-ui-kit-react";

interface Story {
  url: string;
  header?: {
    heading: string;
    subheading: string;
    profileImage: string;
  };
  type?: string;
  duration?: number;
  seeMore?: ({ close }: { close: () => void }) => React.ReactNode;
  preloadResource?: boolean;
}

export default function Story() {
  const [like, setLike] = React.useState<boolean>(false);
  const [comments, setComments] = React.useState<{ text: string }[]>([]);
  //const navigate = useNavigate();
  const stories: Story[] = [
    {
      url: "https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg",
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 5h ago",
        profileImage: "https://picsum.photos/1000/1920",
      },
      duration: 4000,
      preloadResource: true,
    },
    {
      url: "https://res.cloudinary.com/multi-library/video/upload/v1715779516/Music_Video_Em_Xinh_out_now_c%C3%A1c_ems_xinh_nh%E1%BB%9B_y%C3%AAu_th%C6%B0%C6%A1ng_thi%E1%BB%87t_nhi%E1%BB%81u_cho_EM_XINH_nh%C3%A1_elbppu.mp4",
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 32m ago",
        profileImage: "https://picsum.photos/1080/1920",
      },
      preloadResource: true,
      type: "video",
    },
    {
      url: "https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg",
      header: {
        heading: "mohitk05/react-insta-stories",
        subheading: "Posted 32m ago",
        profileImage:
          "https://avatars0.githubusercontent.com/u/24852829?s=400&v=4",
      },
      preloadResource: true,
    },
  ];
  const form = useForm({
    resolver: zodResolver(FormSchemaComments),
    defaultValues: {
      text: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof FormSchemaComments>) => {
    setComments((prevComments) => [...prevComments, { text: data.text }]);
    form.reset();
    console.log(comments);
  };

  return (
    <div className="bg-[rgb(26,26,26)] flex justify-between  w-full h-full">
      <Link to={"/"} className="p-5">
        <GoArrowLeft className="text-white size-7" />
      </Link>
      <div className="flex flex-col items-center justify-center relative overflow-hidden w-[30%] h-full">
        <div className="absolute flex flex-col justify-end w-[90%] h-[85%] z-[1000]">
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
                          className="border bg-transparent rounded-2xl text-white"
                          placeholder="Thêm bình luận..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div
                  onClick={() => {
                    setLike(!like);
                  }}
                  className="flex items-center"
                >
                  {like ? (
                    <div className="text-red-500">
                      <IconHeart />
                    </div>
                  ) : (
                    <div className="text-white">
                      <IconOutlineHeart />
                    </div>
                  )}
                </div>
                <Button
                  className="bg-transparent hover:bg-transparent p-2"
                  type="submit"
                >
                  <IconOutlineSend />
                </Button>
              </form>
            </Form>
        </div>
        <Stories
          stories={stories}
          defaultInterval={3000}
          width={"100%"}
          height={"95%"}
          loop={true}
          keyboardNavigation={true}
          preloadCount={3}
          //onStoryEnd={()=>{navigate("/")}}
          //onAllStoriesEnd={()=>{navigate("/")}}
        />
      </div>
      <Sidebar className="p-2 w-1/4 " position="right">
        <span className="font-semibold mb-2">Tất cả tin</span>
        <ConversationList className="h-full">
          <Link to={"/story"}>
            <Conversation
              info="nguyen van a"
              name="angh.yr"
              lastActivityTime={<span style={{ color: "teal" }}>43 phút</span>}
            >
              <Avatar src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg" />
            </Conversation>
          </Link>
          <Link to={"/"}>
            <Conversation
              info="le xuan b"
              name="ahfr.eas"
              lastActivityTime={<span style={{ color: "teal" }}>19 giờ</span>}
            >
              <Avatar src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg" />
            </Conversation>
          </Link>
        </ConversationList>
      </Sidebar>
    </div>
  );
}
