'use client';

import { ChatMessageForm } from './ChatMessageForm';
import { ChatMessages } from './ChatMessages';
import { useChat } from 'ai/react';
import { ScrollArea } from '../ui/ScrollArea';
import { EmptyPlaceholder } from '../ui/EmptyPlaceholder';

import { ActionBar } from '../ActionBar';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';
import { ConfettiParty } from '../ConfettiParty';

type ChatProps = {
  userAvatarUrl: string;
};

export const Chat = ({ userAvatarUrl }: ChatProps) => {
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
    <>
      <div className="flex h-full w-full flex-1 bg-slate-50">
        {messages.length === 0 ? (
          <EmptyPlaceholder className="h-full w-full self-center mb-[180px]">
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

        <div className="fixed inset-x-0 bottom-0 ">
          <div className="h-12 flex items-center justify-center">
            <div className="text-slate-500 text-sm">
              {isLoading ? (
                <Button variant="outline" disabled>
                  <Icons.Bot className="mr-2 h-4 w-4 animate-spin" />
                  Typing like a bot...
                </Button>
              ) : (
                <ActionBar onReset={() => setMessages([])} />
              )}
            </div>
          </div>
          <ChatMessageForm
            isLoading={isLoading}
            value={input}
            onValueChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <ConfettiParty />
    </>
  );
};
