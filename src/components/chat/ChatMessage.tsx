import { PropsWithChildren } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';
import { cn } from '@/lib/client/utils';
import { Message } from 'ai';
import { Button } from '../ui/Button';
import { Icons } from '../ui/Icons';
import React from 'react';
import { MemoizedReactMarkdown } from './MemoizedReactMarkdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

type ChatMessageProps = {
  message: Message;
  userAvatar?: string;
  userName?: string;
};

export const ChatMessage = ({
  message,
  userAvatar,
  userName
}: ChatMessageProps) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(message.content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <ChatBubble key={message.id}>
      <Avatar>
        <AvatarImage
          src={
            message.role === 'user'
              ? userAvatar
              : 'https://github.com/alexmarqs.png'
          }
        />
        <AvatarFallback>
          {message.role === 'user'
            ? userName?.substring(0, 2)?.toUpperCase() || 'LA'
            : 'AL'}
        </AvatarFallback>
      </Avatar>
      <MemoizedReactMarkdown
        className="text-sm prose self-center break-words prose-p:leading-relaxed prose-pre:p-0"
        remarkPlugins={[remarkGfm, remarkMath]}
        components={{
          p({ children }) {
            return <p className="mb-2 last:mb-0">{children}</p>;
          }
        }}
      >
        {message.content}
      </MemoizedReactMarkdown>
      <div className="absolute right-1 top-1 pr-3 pb-3">
        <span className="text-2xs text-slate-400">
          {message.createdAt &&
            new Date(message.createdAt).toLocaleTimeString()}
        </span>
        <Button
          variant={'ghost'}
          className="ml-2 p-0 h-4 w-4"
          onClick={handleCopyClick}
        >
          {!copied ? (
            <Icons.Copy className="h-2 w-2" />
          ) : (
            <Icons.Check className="h-2 w-2" />
          )}
        </Button>
      </div>
    </ChatBubble>
  );
};

type ChatBubbleProps = PropsWithChildren<{}>;

const ChatBubble: React.FC<ChatBubbleProps> = ({ children }) => {
  return (
    <div
      className={cn(
        'relative flex gap-3 text-sm text-slate-600  bg-slate-50 p-3 w-full rounded-md pt-5'
      )}
    >
      {children}
    </div>
  );
};
