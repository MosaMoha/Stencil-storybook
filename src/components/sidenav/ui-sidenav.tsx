import { Component, h, Prop, State, Event, EventEmitter, Listen, Method } from '@stencil/core';

@Component({
  tag: 'ui-sidenav',
  styleUrl: 'ui-sidenav.css',
  shadow: true, 
  //scoped: false,
})
export class SideNav {

  @State() showContactInfo: boolean;
  @Prop() title: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  @Event() sidenavOpened: EventEmitter<string>;

  onCloseDrawer() {
    this.opened = false;
    this.sidenavOpened.emit('\nSide nav was openend in'+ Date())
  }

  @Listen('sidenavOpened')
  sidenavOpenedHandler(event: CustomEvent<string>) {
    console.log('\nReceived the custom sidenavOpened event: ', event.detail);
  }

  onContentChange(content){
    console.log(content)
    this.showContactInfo = content === 'contact'
  }

  @Method()
  open(){
    this.opened= true;
    console.log('Open() Method');
  }

  render() {
    let content=  <slot/>;
    if (this.showContactInfo){
      
      content =(
        <div id="contact-info">
          <h2>Contact Info</h2>
          <p>moha@mosa@sqli.fr</p>
        </div>
      )
    }
    
    return (
      <div>
        <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>
        <aside>
            <header>
              <h1>{this.title}</h1>
              <button onClick={this.onCloseDrawer.bind(this)}>X</button>
            </header>
            <section id="tabs">
              <button 
                class={this.showContactInfo ? 'active' : ''}
                onClick={this.onContentChange.bind(this, 'navigation')}>
                Navigation
              </button>
              <button 
                class={!this.showContactInfo? 'active' : ''}
                onClick={this.onContentChange.bind(this, 'contact')}>
                contact
              </button>
            </section>
            <main>
              {content}
            </main>
        </aside>
      </div>
    );
  }
}
