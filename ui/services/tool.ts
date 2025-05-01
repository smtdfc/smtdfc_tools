import type {ToolInfo} from "../types/tool.ts";


export class ToolService {
  static async getTool(limit = 20, page = 0):Promise<ToolInfo[]> {
    let res = await fetch(`https://smtdfc-tools.netlify.app/.netlify/functions/tools?page=${page}&limit=${limit}`, {
      method: "post",
    });
    let result = await res.json() as ToolInfo[];
    return result;
  }
  
}