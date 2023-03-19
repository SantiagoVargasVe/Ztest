import { renderHook } from "@testing-library/react";
import { useMatches } from "../useMatches";
import { act } from "react-dom/test-utils";
import { agents } from "./mockData";
import { getAgentsByIncome } from "../../utils/agents.api";

jest.mock("../../utils/agents.api");

test("Should load or discard agents acorrding to button pressed", () => {
  const mockgetAgentsByIncome = getAgentsByIncome as jest.MockedFunction<
    typeof getAgentsByIncome
  >;
  mockgetAgentsByIncome.mockResolvedValue(agents);
  const { result } = renderHook(() => useMatches(30000));

  act(() => {
    //Those agents are 6
    result.current.setAgents(agents);
  });

  act(() => {
    result.current.getMore();
  });
  expect(result.current.moreToShow).toBe(false);
  expect(result.current.lessToShow).toBe(true);

  act(() => {
    result.current.getLess();
  });

  expect(result.current.moreToShow).toBe(true);
  expect(result.current.lessToShow).toBe(false);
});
