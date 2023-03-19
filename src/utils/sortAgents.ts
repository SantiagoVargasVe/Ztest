import { Agent } from "../@types/Agent";
import { SortStrategy } from "../@types/SortStrategy";

export const sortAgents = (agents: Agent[], sortStrategy: SortStrategy) => {
  if (sortStrategy === "name") {
    return sortByName(agents);
  } else if (sortStrategy === "high") {
    return sortByIncomeHigh(agents);
  } else if (sortStrategy === "low") {
    return sortByIncomeLow(agents);
  } else if (sortStrategy === "id") {
    return sortById(agents);
  } else {
    return agents;
  }
};

const sortByName = (agents: Agent[]) => {
  return agents.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

const sortById = (agents: Agent[]) => {
  return agents.sort((a, b) => a.id - b.id);
};

const sortByIncomeLow = (agents: Agent[]) => {
  return agents.sort((a, b) => a.income - b.income);
};

const sortByIncomeHigh = (agents: Agent[]) => {
  return agents.sort((a, b) => b.income - a.income);
};
