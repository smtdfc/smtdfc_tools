import {
  RumiousComponent,
  Fragment,
  RumiousState,
  createState,
  createInfinityScroll
} from 'rumious';
import { RumiousRouterPageProps } from 'rumious-router';
import { ToolCard } from '../components/ToolCard.js';
import { AppContext } from '../context/app.js';
import { ToolService } from "../services/tool.js";


export class Page extends RumiousComponent < RumiousRouterPageProps > {
  static tagName = "smtdfc-tool-page-home";
  private infinityScrollController: RumiousState < string > ;
  
  constructor() {
    super();
    this.infinityScrollController = createState < string > ("");
  }
  
  onRender() {
    let tools = AppContext.get("tools");
    if (tools && tools.get().length == 0) {
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
                  data:AppContext.get("tools")!,
                  template:(data)=> <ToolCard name={data.name} group={data.group}/>,
                  scrollElement: window,
                  loader:ToolService.getTool,
                  controller:this.infinityScrollController!,
                  limit:20,
                  offset:0,
                  threshold:30
                })
              }
            </div>

          </div>
        </div>
      </Fragment>
    );
  }
}