import { Agent } from "../@types/Agent";

export const getAgentsByIncome = async (income: number) => {
  const minIncome = income - 10_000;

  const maxIncome = income + 10_000;

  const agents = await getAgents();

  const candidates: Agent[] = [];
  for (let index = 0; index < agents.length; index++) {
    const agent = agents[index];

    if (agent.income <= maxIncome && agent.income >= minIncome) {
      const agentDifference = Math.abs(agent.income - income);
      //   if (candidates.length < 3) {
      // }
      candidates.push(agent);
      //   else {
      //     for (
      //       let candidatesIndex = 0;
      //       candidatesIndex < candidates.length;
      //       candidatesIndex++
      //     ) {
      //       const actualCandidate = candidates[candidatesIndex];
      //       const actualCantidateDifference = Math.abs(
      //         actualCandidate.income - income
      //       );

      //       if (actualCantidateDifference > agentDifference) {
      //         candidates[candidates.indexOf(actualCandidate)] = agent;
      //       }
      //     }
      //   }
    }
  }
  return candidates;
};

const getAgents = () => {
  return fetch("http://localhost:3200/agents").then((value: Response) =>
    value.json().then((data: Agent[]) => data)
  );
};
