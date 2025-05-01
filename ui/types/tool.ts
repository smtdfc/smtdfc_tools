export interface ToolInfo {
  id: string,
  name: string,
  group ? : string,
  description?: string
}

export interface ToolGroupInfo {
  name: string,
  host ? : string
}