import type {ToolInfo} from "../types/tool.ts";
import {AppContext} from "../context/app.js";

export class ToolService {
  static async getTool(limit = 20, offset = 0):Promise<ToolInfo[]> {
    let res = await fetch(`https://smtdfc-tools.netlify.app/.netlify/functions/list?offset=${offset}&limit=${limit}`, {
      method: "post",
    });
    let result = await res.json();
    AppContext.get("tools")?.push(result.data);
    return result.data as ToolInfo[];
  }
  
}