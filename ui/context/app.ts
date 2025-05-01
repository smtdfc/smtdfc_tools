import { createContext,createArrayState } from 'rumious';
import { ToolInfo ,ToolGroupInfo} from "../types/tool.js";

interface IAppContext {
  tools: ReturnType<typeof createArrayState>;
  groups:ToolGroupInfo[];
}

export const AppContext = createContext < IAppContext > ({
  tools:createArrayState<ToolInfo>([]),
  groups:[]
});