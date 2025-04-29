import { RumiousComponent, Fragment } from 'rumious';

interface ToolCardProps {
  name:string,
  group: string 
};

export class ToolCard extends RumiousComponent < ToolCardProps > {
  static tagName = "smtdfc-tool-card";
  static classNames = "card p-3 ";
  
  template() {
    return (
      <Fragment>
        <div class="card-body ">
          <div class="d-flex align-center justify-between p-1">
            <h4>{this.props.name}</h4>
            <span class="badge badge-filled badge-success">{this.props.group}</span>
          </div>
          <div class="p-3 sub-text">
            Simple expression with Math.js
          </div>
          <div class="d-flex align-center justify-between p-1">
            <button class="ml-auto btn btn-icon material-icons">arrow_forward</button>
          </div>
        </div>
      </Fragment>
    );
  }
}