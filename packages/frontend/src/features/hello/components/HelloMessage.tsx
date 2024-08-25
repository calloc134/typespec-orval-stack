import { useHelloHelloSuspense } from "@/hooks/query/query";

export const HelloMessage = () => {
  const { data } = useHelloHelloSuspense();

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl">{data.data.message}</h1>
    </div>
  );
};
