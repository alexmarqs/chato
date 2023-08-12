import { Message } from 'ai';
import { EmptyPlaceholder } from '../ui/EmptyPlaceholder';
import React, { useEffect } from 'react';
import { ChatMessage } from './ChatMessage';

type ChatMessagesProps = {
  messages: Message[];
  userAvatar?: string;
  userName?: string;
};

export const ChatMessages = ({
  messages,
  userAvatar,
  userName
}: ChatMessagesProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col gap-2 h-[400px] w-full">
      {!messages.length ? (
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="LogoEngineer" />
          <EmptyPlaceholder.Description>
            No messages yet? Oh, please be chato. Ask!
          </EmptyPlaceholder.Description>
        </EmptyPlaceholder>
      ) : (
        <>
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              userAvatar={userAvatar}
              userName={userName}
            />
          ))}
          <div ref={scrollRef} />
        </>
      )}
    </div>
  );
};
