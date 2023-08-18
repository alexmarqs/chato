'use client';

import { ChatMessageForm } from './ChatMessageForm';
import { ChatMessages } from './ChatMessages';
import { useChat } from 'ai/react';
import { ScrollArea } from '../ui/ScrollArea';
import { EmptyPlaceholder } from '../ui/EmptyPlaceholder';
type ChatProps = {
  userFirstName: string | null;
  userAvatarUrl: string;
};

export const Chat = ({ userFirstName, userAvatarUrl }: ChatProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages
  } = useChat({
    api: '/api/chat'
  });

  return (
    <div className="flex h-full w-full flex-1 bg-slate-50">
      {messages.length === 0 ? (
        <EmptyPlaceholder className="h-full w-full self-center">
          <EmptyPlaceholder.Icon name="LogoEngineer" />
          <EmptyPlaceholder.Description>
            No messages yet? Oh, please be chato. Ask!
          </EmptyPlaceholder.Description>
        </EmptyPlaceholder>
      ) : (
        <ScrollArea className="h-full w-full mx-auto max-w-2xl">
          <ChatMessages messages={messages} userAvatar={userAvatarUrl} />
        </ScrollArea>
      )}

      <div className="fixed inset-x-0 bottom-0 p-6 bg-white border-t-[1px] border-slate-200">
        <ChatMessageForm
          isLoading={isLoading}
          value={input}
          onValueChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
