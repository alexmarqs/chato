import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <SignUp />
    </div>
  );
}
