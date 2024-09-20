import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  Sidebar,
  Avatar,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  ConversationList,
  Conversation,
  Search,
} from "@chatscope/chat-ui-kit-react";
import React from "react";
import IconOutlineMessage2 from "@/icon/IconOutlineMessage2";
import { Input } from "@/components/ui/input";
import UseDebounce from "@/hooks/useDebounce";
import IconOutlineEmoji from "@/icon/IconOutlineEmoji";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import IconOutlineImage from "@/icon/IconOutlineImage";
import { Image, Upload } from "antd";
import { toast } from "sonner";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import { FaRegTrashAlt } from "react-icons/fa";
import { uploadImage } from "@/utils/upload";

type MessageType = {
  message?: string;
  direction: "incoming" | "outgoing";
  imageURL?: string;
};

export default function Messages() {
  const [show, setShow] = React.useState(true);
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [messages, setMessages] = React.useState<MessageType[]>([
    {
      message: "Có hình ảnh ",
      direction: "incoming",
      imageURL:
        "https://res.cloudinary.com/multi-library/image/upload/v1726592218/skqzvopglqwkfu0bj3wy.png",
    },
    {
      message: "có hình ảnh ",
      direction: "outgoing",
      imageURL:
        "https://res.cloudinary.com/multi-library/image/upload/v1726592218/skqzvopglqwkfu0bj3wy.png",
    },
    {
      message: "không có hình ảnh kk",
      direction: "incoming",
      imageURL: "",
    },
  ]);
  const [message, setMessage] = React.useState<MessageType>({
    message: "",
    direction: "outgoing",
    imageURL: "",
  });
  const debounced = UseDebounce(message?.message, 400);

  const addEmoji = async (emoji: { native: string }) => {
    setMessage({
      message: debounced + emoji.native,
      direction: "outgoing",
    });
  };
  const handleDelete = () => {
    setMessage({
      direction: "outgoing",
      imageURL: "",
    });
  };
  const handleCustomRequest = async (options: UploadRequestOption) => {
    try {
      const url = await uploadImage(options);

      if (url) {
        setMessage({
          imageURL: url,
          direction: "outgoing",
        });
      }
    } catch (error) {
      toast.error("Upload thất bại");
    }
  };
  const handleSend = async () => {
    setMessages([
      ...messages,
      { message: debounced, direction: "outgoing", imageURL: message.imageURL },
    ]);
    setMessage({
      message: "",
      direction: "outgoing",
      imageURL: "",
    });
  };

  return (
    <div className="relative h-full">
      <MainContainer>
        {show ? (
          <div className="flex flex-col gap-2 justify-center items-center w-3/4">
            <IconOutlineMessage2 />
            <span className="font-medium">Tin nhắn của bạn</span>
            <span>Gửi ảnh và tin nhắn riêng tư cho bạn bè hoặc nhóm</span>
          </div>
        ) : (
          <div className="flex flex-col-reverse w-3/4">
            <ChatContainer>
              <ConversationHeader>
                <Avatar
                  name="Emily"
                  src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
                />
                <ConversationHeader.Content
                  info="Active 10 mins ago"
                  userName="Emily"
                />
                <ConversationHeader.Actions>
                  <VoiceCallButton />
                  <VideoCallButton />
                  <InfoButton />
                </ConversationHeader.Actions>
              </ConversationHeader>
              <MessageList scrollBehavior="smooth">
                {messages.map((m, i) => (
                  <>
                    {m.imageURL && (
                      <Message
                        key={i}
                        model={{
                          direction: m.direction,
                          position: "single",
                        }}
                      >
                        <Message.ImageContent
                          src={m.imageURL}
                          alt="Sent image"
                          width={200}
                        />
                      </Message>
                    )}
                    <Message
                      key={i}
                      model={{
                        direction: m.direction,
                        position: "single",
                      }}
                    >
                      {m.message && (
                        <Message.TextContent>{m.message}</Message.TextContent>
                      )}
                    </Message>
                  </>
                ))}
              </MessageList>
            </ChatContainer>
            <div className="m-5 flex justify-center items-center border-2 rounded-2xl px-4">
              <div
                className="cursor-pointer relative"
                onClick={() => setShowEmoji(!showEmoji)}
              >
                <IconOutlineEmoji />
                {showEmoji && (
                  <div className="absolute bottom-[100%] left-8 z-50">
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
              <Input
                placeholder="Nhắn tin..."
                onChange={(e) => {
                  setMessage({
                    message: e.target.value,
                    direction: "outgoing",
                  });
                }}
                className="border-none"
                type="text"
                value={message.message}
              />
              {message?.imageURL && (
                <div className="bottom-[70px] z-[999] absolute flex gap-2 items-center">
                  <Image
                    preview={false}
                    width={150}
                    src={message.imageURL}
                    className="h-full inline-block "
                  />
                  <FaRegTrashAlt
                    className="cursor-pointer"
                    onClick={handleDelete}
                  />
                </div>
              )}
              {message.message || message.imageURL ? (
                <span
                  onClick={handleSend}
                  className="cursor-pointer text-cyan-500 hover:text-cyan-700 font-medium"
                >
                  Gửi
                </span>
              ) : (
                <Upload
                  className="cursor-pointer"
                  showUploadList={false}
                  customRequest={handleCustomRequest}
                  name="file"
                >
                  <IconOutlineImage />
                </Upload>
              )}
            </div>
          </div>
        )}
        <Sidebar
          onClick={() => setShow(!show)}
          className="p-2 w-1/3"
          position="right"
        >
          <span className="font-semibold mb-2">Tin nhắn</span>
          <Search placeholder="Search..." />
          <ConversationList className="h-full">
            <Conversation info="Đang hoạt động." name="Lilly">
              <Avatar
                status="available"
                name="Lilly"
                src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
              />
            </Conversation>
            <Conversation info="Hiện không hoạt động" name="Joe">
              <Avatar
                name="Joe"
                status="unavailable"
                src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
              />
            </Conversation>
          </ConversationList>
        </Sidebar>
      </MainContainer>
    </div>
  );
}
