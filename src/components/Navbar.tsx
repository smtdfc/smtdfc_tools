import { RumiousComponent } from 'rumious';

interface NavbarProps {}

export class Navbar extends RumiousComponent < NavbarProps > {
  static tagName = "smtdfc-navbar";
  
  onRender() {
    const navbar = this.element.querySelector('.navbar') as HTMLElement;
    
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollTop >= 25) {
        navbar.style.background = 'white';
      } else {
        navbar.style.background = 'transparent';
      }
    };
    
    window.addEventListener('scroll', onScroll);
  }
  
  template() {
    return (
      <div class="navbar navbar-shadow" style="background: transparent;">
        <div class="navbar-header">
          <button class="btn btn-icon material-icons">menu</button>
          <h3 class="navbar-title">smtdfc tools</h3>
        </div>
      </div>
    );
  }
}