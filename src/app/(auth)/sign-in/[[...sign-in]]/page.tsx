import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <SignIn />
    </div>
  );
}
