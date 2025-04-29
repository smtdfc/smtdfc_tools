import { createContext } from 'rumious';
import { ToolInfo } from "../types/tool.js";

interface IAppContext {
  tools: ToolInfo[];
}


function generateRandomTools(count: number): ToolInfo[] {
  const tools: ToolInfo[] = [];
  for (let i = 0; i < count; i++) {
    tools.push({
      id: (Date.now() + i).toString(16),
      name: `Tool ${i + 1}`,
      group: `Group ${Math.floor(i / 100) + 1}`
    });
  }
  return tools;
}

export const AppContext = createContext < IAppContext > ({
  tools: generateRandomTools(1000)
});