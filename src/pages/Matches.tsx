import { formatToUSD } from "../utils/currency";
import OrderBy from "../components/OrderBy";
import AgentsList from "../components/AgentsList";

import { useMatches } from "../hooks/useMatches";
import AgentsNotFound from "../components/AgentsNotFound";
import Spinner from "../components/Spinner";
import { useLoaderData } from "react-router-dom";
import { matchesLoaderData } from "../utils/matches.loader";

function Matches() {
  const { income } = useLoaderData() as matchesLoaderData;
  const {
    agents,
    getLess,
    getMore,
    setSortStrategy,
    lessToShow,
    moreToShow,
    hiddeAgent,
    isLoading,
  } = useMatches(income);

  return (
    <div className="h-full w-full flex flex-col  items-center px-6 gap-8 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold"> Your matches</h1>
        <h4 className=" text-xl mt-3">
          Your income:
          <label className="font-bold">{formatToUSD(income)}</label>
        </h4>
      </div>

      {isLoading ? (
        <Spinner />
      ) : agents.length > 0 ? (
        <>
          <OrderBy setSortStrategy={setSortStrategy} />
          <AgentsList agents={agents} hideAgent={hiddeAgent} />
          <div className="flex justify-between w-full pb-6 font-bold md:justify-end md:gap-10">
            <button
              onClick={getLess}
              disabled={!lessToShow}
              className={lessToShow ? "text-highlight" : "text-pink_swan"}
            >
              Show less -
            </button>
            <button
              onClick={getMore}
              disabled={!moreToShow}
              className={moreToShow ? "text-highlight" : "text-pink_swan"}
            >
              Show more +
            </button>
          </div>
        </>
      ) : (
        <AgentsNotFound />
      )}
    </div>
  );
}

export default Matches;
