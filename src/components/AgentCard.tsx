import React from "react";
import { Agent } from "../@types/Agent";
import { formatToUSD } from "../utils/currency";

type Props = {
  agent: Agent;
  hideAgent: (agent: Agent) => void;
};

function AgentCard({ agent, hideAgent }: Props) {
  return (
    <div
      onClick={() => hideAgent(agent)}
      className="flex shadow-custom p-4 gap-5 rounded-xl md:flex-col md:w-[320px] md:items-center md:gap-10 md:pb-0 md:px-0 cursor-pointer"
    >
      <img
        className="rounded-full max-h-full md:h-28 md:w-28"
        src={`https://ui-avatars.com/api/?name=${agent.name}&background=random`}
        alt={`avatar-${agent.name}`}
      />

      <div className="flex flex-col w-full  md:items-center md:gap-5">
        <h5 className="font-bold text-xl text-zambezi">{agent.name}</h5>

        <label className="text-zambezi"> ID: {agent.id}</label>

        <label className="text-zambezi md:w-full md:bg-white_smoke md:text-center md:h-16 md:flex md:justify-center md:items-center">
          Income:
          <span className="font-bold"> {formatToUSD(agent.income)}</span>
        </label>
      </div>
    </div>
  );
}

export default AgentCard;
