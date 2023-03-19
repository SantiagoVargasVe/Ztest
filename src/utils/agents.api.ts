import { Agent } from "../@types/Agent";

export const getAgentsByIncome = async (income: number) => {
  const minIncome = income - 10_000;

  const maxIncome = income + 10_000;

  const agents = await getAgents();

  sortAgents(agents, income);

  return agents;
};

const sortAgents = (agents: Agent[], income: number) => {
  agents.sort((a: Agent, b: Agent) => {
    const closenessA = Math.abs(a.income - income);
    const closenessB = Math.abs(b.income - income);
    return closenessA - closenessB;
  });
};

const getAgents = () => {
  return fetch(import.meta.env.VITE_URL).then((value: Response) =>
    value.json().then((data: { agents: Agent[] }) => data.agents)
  );
};
