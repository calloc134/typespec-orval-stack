import { HelloMessage } from "../components/HelloMessage";

export const Hello = () => {
  return (
    <div className="flex flex-col items-center  h-full">
      <h1 className="text-4xl">Hello World</h1>
      <HelloMessage />
    </div>
  );
};
