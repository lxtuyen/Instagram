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

type MessageType = {
  message: string;
  direction: "incoming" | "outgoing";
};

export default function Messages() {
  const [show, setShow] = React.useState(true);
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [messages] = React.useState<MessageType[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const debounced = UseDebounce(searchValue, 400);
 

  const addEmoji = async (emoji: { native: string }) => {
    setSearchValue(debounced + emoji.native);
    console.log(searchValue);
  };
  const handleSend = async () => {
    console.log(debounced);
  }

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
                <Message
                  avatarSpacer
                  model={{
                    message: "Hello my friend",
                    sentTime: "just now",
                    sender: "Joe",
                    direction: "incoming",
                    position: "single",
                  }}
                >
                  <Avatar
                    name="Zoe"
                    status="available"
                    src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                    about="hello"
                  />
                </Message>
                {messages.map((m, i) => (
                  <Message
                    key={i}
                    model={{
                      message: m.message,
                      direction: m.direction,
                      position: "single",
                    }}
                  />
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
                  setSearchValue(e.target.value);
                }}
                className="border-none"
                type="text"
                value={searchValue}
              />
              {searchValue ? <span onClick={handleSend} className="cursor-pointer text-cyan-500 hover:text-cyan-700 font-medium">Gửi</span>: <IconOutlineImage />}
              
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
