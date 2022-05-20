import { Sidebar } from './sidebar';
import { newSpecPage } from '@stencil/core/testing';

describe('sidebar works for', () => {
  it('builds', () => {
    expect(new Sidebar()).toBeTruthy();
  });
  it('rendering about and contact before sidebar open', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<js-sidebar></js-sidebar>`,
    });
    const btn1 = page.root.shadowRoot.querySelector('.btn1');
    const btn2 = page.root.shadowRoot.querySelector('.btn2');
    expect(btn1).not.toBeTruthy();
    expect(btn2).not.toBeTruthy();
  });

  it('rendering prop content', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<js-sidebar  text="info about us"  ></js-sidebar>`,
    });
    const togglebtn = page.root.shadowRoot.querySelector('.sidebaropen');
    togglebtn.click();
    await page.waitForChanges();
    const info = page.root.shadowRoot.querySelector('.about');
    expect(info.innerHTML).toEqual('info about us');
  });

  it('rendering contact when contact button is active', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<js-sidebar></js-sidebar>`,
    });
    const togglebtn = page.root.shadowRoot.querySelector('.sidebaropen');
    togglebtn.click();
    await page.waitForChanges();
    const btn2 = page.root.shadowRoot.querySelector("button[name='contact']");
    btn2.click();
    await page.waitForChanges();
    const contact = page.root.shadowRoot.querySelector(".contact");
    console.log(contact);
    const about = page.root.shadowRoot.querySelector('.about');
    expect(contact).toBeTruthy();
    expect(about).not.toBeTruthy();
  });

  it('rendering about when about button is active', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<js-sidebar></js-sidebar>`,
    });
    const togglebtn = page.root.shadowRoot.querySelector('.sidebaropen');
    togglebtn.click();
    await page.waitForChanges();
    const btn1 = page.root.shadowRoot.querySelector("button[name='about']");
    btn1.click();
    await page.waitForChanges();
    const contact = page.root.shadowRoot.querySelector(".contact");
    console.log(contact);
    const about = page.root.shadowRoot.querySelector('.about');
    expect(about).toBeTruthy();
    expect(contact).not.toBeTruthy();
  });

  it('rendering about and contact button after close button clicked', async () => {
    const page = await newSpecPage({
      components: [Sidebar],
      html: `<js-sidebar></js-sidebar>`,
    });
    const togglebtn = page.root.shadowRoot.querySelector('.sidebaropen');
    togglebtn.click();
    await page.waitForChanges();
    const closebtn = page.root.shadowRoot.querySelector('.closebtn');
    closebtn.click();
    await page.waitForChanges();
    const btn1 = page.root.shadowRoot.querySelector("button[name='about']");
    const btn2 = page.root.shadowRoot.querySelector("button[name='contact']");
    expect(btn1).not.toBeTruthy();
    expect(btn2).not.toBeTruthy();
  });

 
});
