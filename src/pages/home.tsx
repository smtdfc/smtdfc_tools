import { RumiousComponent, createElementRef, Fragment, RumiousState, RumiousArrayState, createArrayState, createState, watch, denounce, renderDynamicArray } from 'rumious';
import { RumiousRouterPageProps } from 'rumious-router';
import { ToolCard } from '../components/ToolCard.js';
import { AppContext } from '../context/app.js';
import { ToolInfo } from "../types/tool.js";
import {getRandomGradient} from "../utils/background.js";

export class Page extends RumiousComponent < RumiousRouterPageProps > {
  static tagName = "smtdfc-tool-page-home";
  private search: RumiousState < string > ;
  private tools!: RumiousArrayState < ToolInfo > ;
  private headerRef:ReturnType<typeof createElementRef>;
  constructor() {
    super();
    this.headerRef = createElementRef();
    this.search = createState("");
    this.tools = createArrayState < ToolInfo > (AppContext.get("tools") !);
  }
  
  private handleSearch = denounce(() => {
    if (this.search.value.length === 0) {
      this.resetTools();
    } else {
      this.filterTools();
    }
  }, 100);
  
  private resetTools() {
    let tools = AppContext.get("tools") !;
    this.tools?.set(tools);
  }
  
  private filterTools() {
    this.tools.filter((data: ToolInfo)=>{
      return data.name.includes(this.search.value)
    });
  }
  
  onCreate() {
    watch(this.search, this.handleSearch);
  }
  
  onRender(){
    this.headerRef.setStyle({
      background:getRandomGradient()
    })
  }
  
  template() {
    return (
      <Fragment>
        <div>
          <div ref={this.headerRef} class="d-flex align-center flex-col justify-center" style="min-height:50vh; transition: background 1s ease-in -out;background-attachment: fixed;background-size: cover; ">
            <h2 class="my-4">Select your tool</h2>
            <p class="description">Discover powerful tools crafted for your success!</p>
            <input model={this.search} type="text" class="form-input search-box" placeholder="Search tool here ..." />
          </div>
          <div>
            <div class="card-group list-tool">
              {this.tools!.length === 0 ? (
                <div class="empty-state">
                  <p>No tools found. Try another search!</p>
                </div>
              ) : (
                renderDynamicArray(this.tools!, (data) => {
                  return <ToolCard name={data.name} group={data.group} />;
                })
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}