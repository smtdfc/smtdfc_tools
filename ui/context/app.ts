import { createContext } from 'rumious';
import { ToolInfo ,ToolGroupInfo} from "../types/tool.js";

interface IAppContext {
  tools: ToolInfo[];
  groups:Record<string,ToolGroupInfo>;
}

export const AppContext = createContext < IAppContext > ({
  tools:[],
  groups:{
    "Math tool":{
      name:"Math tool",
      host:"https://smtdfc-tools.netlify.app/tools/math"
    }
  }
});