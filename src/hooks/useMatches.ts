import { useLoaderData } from "react-router-dom";
import { Agent } from "../@types/Agent";
import { matchesLoaderData } from "../utils/matches.loader";
import { useEffect, useRef, useState } from "react";
import { SortStrategy } from "../@types/SortStrategy";
import { sortAgents } from "../utils/sortAgents";
import { getAgentsByIncome } from "../utils/agents.api";

export function useMatches(income: number) {
  const [moreToShow, setMoreToShow] = useState(false);

  const [lessToShow, setLessToShow] = useState(false);

  const [agents, setAgents] = useState<Agent[]>([]);

  const hiddenAgents = useRef<Agent[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(3);

  const hiddeAgent = (agent: Agent) => {
    const newAgents = agents.filter((shownAgent) => shownAgent.id != agent.id);
    setAgents(newAgents);
    if (currentIndex >= newAgents.length) {
      setMoreToShow(false);
      setCurrentIndex(newAgents.length);
    }
    if (newAgents.length === 3) {
      setCurrentIndex(newAgents.length);
      setLessToShow(false);
    }

    hiddenAgents.current.push(agent);
  };

  const getMore = () => {
    if (currentIndex + 3 > agents.length - 1) {
      setCurrentIndex(agents.length + 1);
      setMoreToShow(false);
    } else {
      setCurrentIndex(currentIndex + 3);
    }
    setLessToShow(true);
  };

  const getLess = () => {
    if (currentIndex - 3 <= 4) {
      setCurrentIndex(agents.length <= 3 ? agents.length : 3);
      setLessToShow(false);
    } else {
      setCurrentIndex(currentIndex - 3);
    }
    setMoreToShow(true);
  };

  const loadAgents = async () => {
    const agents = await getAgentsByIncome(income);

    const agentsFiltered = agents.filter((agent) => {
      const diff = Math.abs(agent.income - income);
      return diff <= 10_000;
    });

    if (agentsFiltered.length <= 3) {
      setCurrentIndex(agentsFiltered.length);
    } else if (agentsFiltered.length > 3) {
      setMoreToShow(true);
    }
    setAgents(agentsFiltered);
    setIsLoading(false);
  };

  const setSortStrategy = (sortStrategy: SortStrategy) => {
    setAgents(sortAgents([...agents], sortStrategy));
  };

  useEffect(() => {
    loadAgents();
  }, [income]);

  return {
    agents: agents.slice(0, currentIndex),
    getLess,
    getMore,
    setSortStrategy,
    moreToShow,
    lessToShow,
    hiddeAgent,
    isLoading,
    setAgents,
  };
}
