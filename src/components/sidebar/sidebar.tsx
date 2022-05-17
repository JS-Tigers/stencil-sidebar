import { Component, h, Method, State } from '@stencil/core';

@Component({
  tag: 'js-sidebar',
  styleUrl: './sidebar.css',
  shadow: true,
})
export class Sidebar {
  @State() show = true;
  @State() open = false;

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
    let sidebar = null;
    if (this.show) {
      maincontent = (
        <div class="about">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      );
    }

    if (!this.show) {
      maincontent = (
        <div class="contact">
          <h3>Phone:+23145878</h3>
          <h3>Email:random1456@gmail.com</h3>
          <h3>"random house"</h3>
          <h4>random street</h4>
          <h4>pincode:456788</h4>
        </div>
      );
    }
    if (this.open) {
      sidebar = (
        <div class="mainsidebar">
          <div class="headtitle">
            Main Menu
            <button class="closebtn" onClick={this.onopenhandler.bind(this)}>
              x
            </button>
          </div>
          <div class="togglebtn">
            <button class="btn1" onClick={this.onshowabout.bind(this)}>
              About
            </button>
            <button class="btn2" onClick={this.onshowclose.bind(this)}>
              Contact
            </button>
          </div>
          <main class="maincontent">{maincontent}</main>
        </div>
      );
    }
    return sidebar;
  }
}
