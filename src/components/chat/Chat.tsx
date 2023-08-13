'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/Card';
import { ChatMessageForm } from './ChatMessageForm';
import { ChatMessages } from './ChatMessages';
import { ChatHeader } from './ChatHeader';
import { useChat } from 'ai/react';
import { ScrollArea } from '../ui/ScrollArea';
type ChatProps = {
  userFirstName: string | null;
  userAvatarUrl: string;
};

export const Chat = ({ userFirstName, userAvatarUrl }: ChatProps) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: '/api/chat'
    });
  console.log('🚀 ~ file: Chat.tsx:21 ~ Chat ~ messages:', messages);

  return (
    <Card className="w-full max-w-[700px] h-full">
      <CardHeader>
        <ChatHeader name={userFirstName} />
      </CardHeader>

      <CardContent>
        <ScrollArea>
          <ChatMessages messages={messages} userAvatar={userAvatarUrl} />
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <ChatMessageForm
          isLoading={isLoading}
          value={input}
          onValueChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </CardFooter>
    </Card>
  );
};
