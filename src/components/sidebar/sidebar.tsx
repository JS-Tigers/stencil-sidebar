import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'js-sidebar',
  styleUrl: './sidebar.css',
  shadow: true,
})
export class Sidebar {
  @State() show = true;
  @State() open = false;

  @Prop() text: string;
  @Prop() heading: string;
  @Prop() address: string;
  @Prop() phone: string;

  @Method()
  onopenhandler() {
    this.open = !this.open;
  }

  onshowclose() {
    console.log('in onshow');
    this.show = false;
  }
  onshowabout() {
    this.show = true;
  }

  render() {
    let maincontent = null;
    let sidebar = (
      <button onClick={this.onopenhandler.bind(this)} class="sidebaropen">
        {'>'}
      </button>
    );
    if (this.show) {
      maincontent = <div class="about">{this.text}</div>;
    }

    if (!this.show) {
      maincontent = (
        <div class="contact">
          <div class="infobox">
            <h2>{this.heading}</h2>
            <h4>{this.address}</h4>
            <h4 class="phone">Phone: {this.phone}</h4>
          </div>
        </div>
      );
    }
    if (this.open) {
      sidebar = (
        <div class="mainsidebar">
          <div class="headtitle">
            Main Menu
            <button id='closesidebar' class="closebtn" onClick={this.onopenhandler.bind(this)}>
              x
            </button>
          </div>
          <div class="togglebtn">
            <button name='about' id='aboutbutton' class="btn1" onClick={this.onshowabout.bind(this)}>
              About
            </button>
            <button name='contact' id='contactbutton' class="btn1" onClick={this.onshowclose.bind(this)}>
              Contact
            </button>
          </div>
          <main class="maincontent">{maincontent}</main>
        </div>
      );
    }
    return [sidebar];
  }
}
