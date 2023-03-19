import { LoaderFunctionArgs } from "react-router-dom";

type ParamsData = {
  income: number;
};

export const loaderMatches = ({ params }: LoaderFunctionArgs) => {
  const paramsData = params as unknown as ParamsData;

  return { income: paramsData.income };
};
export type matchesLoaderData = Awaited<ReturnType<typeof loaderMatches>>;
