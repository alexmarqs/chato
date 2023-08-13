import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Skeleton className="rounded-lg w-[700px] h-[65vh]" />
    </div>
  );
}
