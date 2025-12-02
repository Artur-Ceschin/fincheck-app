import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  return (
    <div className="w-full max-w-[440px] px-8">
      <header className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Log in to your account
        </h1>
        <p className="mt-6 text-gray-600">
          New here?{' '}
          <Link
            to="/register"
            className="font-medium text-teal-900"
          >
            Create an account
          </Link>
        </p>
      </header>

      <form className="mt-12 flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Email"
          name="email"
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
        />
        <Button type="submit" className="mt-2">
          Log in
        </Button>
      </form>
    </div>
  );
}
