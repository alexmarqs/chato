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
    scrollRef.current?.scrollIntoView(); // no smooth scroll to avoid slowness
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col gap-2 h-[100vh - 3.5rem] w-full pb-[180px]">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message}
          userAvatar={userAvatar}
          userName={userName}
        />
      ))}
      <div ref={scrollRef} />
    </div>
  );
};
