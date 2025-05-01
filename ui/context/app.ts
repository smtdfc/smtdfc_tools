import { createContext } from 'rumious';
import { ToolInfo ,ToolGroupInfo} from "../types/tool.js";

interface IAppContext {
  tools: ToolInfo[];
  groups:ToolGroupInfo[];
}

export const AppContext = createContext < IAppContext > ({
  tools:[],
  groups:[]
});