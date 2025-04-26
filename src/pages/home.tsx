import { RumiousComponent } from 'rumious';
import { RumiousRouterPageProps } from 'rumious-router';


export class Page extends RumiousComponent <RumiousRouterPageProps> {
  static tagName = "smtdfc-tool-page-home";
  
  template() {
    return (
      <h1>Home page</h1>
    );
  }
}