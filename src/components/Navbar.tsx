import { RumiousComponent } from 'rumious';

interface NavbarProps{};

export class Navbar extends RumiousComponent<NavbarProps>{
  static tagName="smtdfc-navbar";
  
  template(){
    return (
      <div class="navbar navbar-shadow">
        <div class="navbar-header">
          <button class="btn btn-icon material-icons">menu</button>
          <h3 class="navbar-title">smtdfc tools</h3>
        </div>
      </div>
    );
  }
}