import React from "react";
import { Agent } from "../@types/Agent";
import AgentCard from "./AgentCard";

type Props = {
  agents: Agent[];
  hideAgent: (agent: Agent) => void;
};

function AgentsList({ agents, hideAgent }: Props) {
  return (
    <div className="w-full flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-6 md:justify-between">
      {agents.map((agent) => (
        <AgentCard key={agent.id} hideAgent={hideAgent} agent={agent} />
      ))}
    </div>
  );
}

export default AgentsList;
