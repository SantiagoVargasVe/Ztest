import { useEffect, useState } from "react";
import { getAgentsByIncome } from "../utils/agents.api";
import { Agent } from "../@types/Agent";

type Props = {
  income: number;
};

function Matches({ income = 80000 }: Props) {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    getAgentsByIncome(income).then((agents) => {
      setAgents(agents);
    });
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center  justify-center">
      <h1> Your matches</h1>
      <h3> Your income: {income}</h3>

      <div className="w-full flex flex-col items-center  justify-center text-xl font-black">
        <ul>
          {agents.map((agent) => {
            return (
              <li>
                {agent.name} - {agent.income}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Matches;
