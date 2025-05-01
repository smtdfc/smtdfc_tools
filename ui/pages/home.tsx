import {
  RumiousComponent,
  Fragment,
  RumiousState,
  createArrayState,
  createState,
  createInfinityScroll,
  watch,
  createElementRef
} from 'rumious';
import { RumiousRouterPageProps } from 'rumious-router';
import { ToolCard } from '../components/ToolCard.js';
import { AppContext } from '../context/app.js';
import { ToolService } from "../services/tool.js";
import type {ToolInfo} from "../types/tool.js";

export class Page extends RumiousComponent < RumiousRouterPageProps > {
  static tagName = "smtdfc-tool-page-home";
  private infinityScrollController: RumiousState < string > ;
  private infinityScrollState: RumiousState < string > ;
  private loaderRef: ReturnType < typeof createElementRef > ;
  private tools: ReturnType < typeof createArrayState > ;
  
  constructor() {
    super();
    this.infinityScrollState = createState < string > ("");
    this.infinityScrollController = createState < string > ("");
    this.loaderRef = createElementRef();
    this.tools = createArrayState<ToolInfo>(AppContext.get("tools")!);
  }
  
  onRender() {
    watch(this.infinityScrollState, (commit) => {
      if (commit.value == "START_FETCH") this.loaderRef.removeClassName("d-none");
      else this.loaderRef.addClassName("d-none");
    });
    let tools = AppContext.get("tools");
    if (tools && tools.length == 0) {
      this.infinityScrollController.set("FETCH");
    }
  }
  
  template() {
    return (
      <Fragment>
        <div>
          <div class="d-flex align-center flex-col justify-center" style="min-height:50vh; transition: background 1s ease-in -out;background-attachment: fixed;background-size: cover; ">
            <h2 class="my-4">Select your tool</h2>
            <p class="description">Discover powerful tools crafted for your success!</p>
            <input  type="text" class="form-input search-box" placeholder="Search tool here ..." />
          </div>
          <div>
            <div class="card-group list-tool">
              {createInfinityScroll({
                  data:this.tools,
                  template:(data)=> <ToolCard name={data.name} group={data.group} description={data.description}/>,
                  scrollElement: window,
                  loader:(limit,offset)=> ToolService.getTool(limit,offset),
                  controller:this.infinityScrollController!,
                  state:this.infinityScrollState,
                  limit:20,
                  offset:0,
                  threshold:30
                })
              }
            </div>
            <div ref={this.loaderRef} class="loader" style="width: 100vw;display: flex; justify-content: center; align-items: center;">
              <div class="spinner-loader"></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}