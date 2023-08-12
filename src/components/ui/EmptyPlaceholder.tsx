import { cn } from '@/lib/client/utils';
import { Icons } from './Icons';

type EmptyPlaceholderProps = React.ComponentProps<'div'>;

const EmptyPlaceholder = ({
  children,
  className,
  ...props
}: EmptyPlaceholderProps) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center h-full flex-col gap-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type EmptyPlaceholderIconProps = Partial<
  React.ComponentPropsWithoutRef<'svg'>
> & {
  name: keyof typeof Icons;
};

// eslint-disable-next-line react/display-name
EmptyPlaceholder.Icon = ({
  name,
  className,
  ...props
}: EmptyPlaceholderIconProps) => {
  const Icon = Icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <div className="flex h-36 w-36 items-center justify-center rounded-full bg-muted">
      <Icon className={cn('h-28 w-28', className)} {...props} />
    </div>
  );
};

type EmptyPlaceholderDescriptionProps = React.ComponentProps<'p'>;

// eslint-disable-next-line react/display-name
EmptyPlaceholder.Description = ({
  className,
  children,
  ...props
}: EmptyPlaceholderDescriptionProps) => {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
};

export { EmptyPlaceholder };
