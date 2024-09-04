import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
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

type MessageType = {
  message: string;
  direction: "incoming" | "outgoing";
};

export default function Messages() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [show, setShow] = React.useState(true);
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const handleSend = (message: string) => {
    setMessages([...messages, { message, direction: "outgoing" }]);
    inputRef.current?.focus();
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
            <MessageInput
              onSend={handleSend}
              attachButton={false}
              ref={inputRef}
              placeholder="Enter text here..."
            />
          </ChatContainer>
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
