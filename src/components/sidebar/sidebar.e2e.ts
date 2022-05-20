import { newE2EPage } from '@stencil/core/testing';

describe('example', () => {
  it('should render a js-sidebar', async () => {
    const page = await newE2EPage();
    console.log(page);
    await page.setContent(`<js-sidebar></js-sidebar>`);
    const el = await page.find('js-sidebar');
    expect(el).not.toBeNull();
  });

  it('find open button', async () => {
    const page = await newE2EPage();
    await page.setContent(`<js-sidebar></js-sidebar>`);
    const el = await page.find('js-sidebar >>> .sidebaropen');
    expect(el).toBeTruthy();
  });

  it('about and contact button not renderd', async () => {
    const page = await newE2EPage();
    await page.setContent(`<js-sidebar></js-sidebar>`);
    const btn1 = await page.find('js-sidebar >>> .btn1');
    expect(btn1).not.toBeTruthy();
  });

  it('about and contact button  renderd', async () => {
    const page = await newE2EPage();
    await page.setContent(`<js-sidebar></js-sidebar>`);
    const el = await page.find('js-sidebar >>> .sidebaropen');
    el.click();
    await page.waitForChanges();
    const btn1 = await page.find('js-sidebar >>> .btn1');
    expect(btn1).toBeTruthy();
  });

  it('checking if contact section is available when about is active', async () => {
    const page = await newE2EPage();
    await page.setContent(`<js-sidebar></js-sidebar>`);
    const el = await page.find('js-sidebar >>> .sidebaropen');
    el.click();
    await page.waitForChanges();
    const contactsection = await page.find('js-sidebar >>> .contact');
    expect(contactsection).not.toBeTruthy();
  });

  it('checking if about is available ', async () => {
    const page = await newE2EPage();
    await page.setContent(`<js-sidebar></js-sidebar>`);
    const el = await page.find('js-sidebar >>> .sidebaropen');
    el.click();
    await page.waitForChanges();
    const aboutsection = await page.find('js-sidebar >>> .about');
    expect(aboutsection).toBeTruthy();
  });

  it('check incoming prop', async () => {
    const page = await newE2EPage();
    await page.setContent(`<js-sidebar></js-sidebar>`);
    await page.$eval('js-sidebar', elm => {
      elm.text = 'welcome';
    });
    const el = await page.find('js-sidebar >>> .sidebaropen');
    el.click();
    await page.waitForChanges();
    const aboutsection = await page.find('js-sidebar >>> .about');
    expect(aboutsection.innerHTML).toBe('welcome');
  });

  it('sidebar gets removed', async () => {
    const page = await newE2EPage();
    await page.setContent(`<js-sidebar></js-sidebar>`);
    const el = await page.find('js-sidebar >>> .sidebaropen');
    el.click();
    await page.waitForChanges();
    const closebtn = await page.find('js-sidebar >>> .closebtn');
    await page.waitForChanges();
    closebtn.click();
    await page.waitForChanges();
    const about = await page.find('js-sidebar >>> .about');
    const contact = await page.find('js-sidebar >>> .contact');
    expect(contact).not.toBeTruthy();
    expect(about).not.toBeTruthy();
  });

  it('button toggle check', async () => {
    const page = await newE2EPage();
    await page.setContent(`<js-sidebar></js-sidebar>`);
    const el = await page.find('js-sidebar >>> .sidebaropen');
    el.click();
    await page.waitForChanges();
    const btn = await page.find('js-sidebar >>> #contactbutton');
    await page.waitForChanges();
    btn.click();
    await page.waitForChanges();
    const aboutsection = await page.find('js-sidebar >>> .about');
    await page.waitForChanges();
    const contactsection = await page.find('js-sidebar >>> .contact');
    expect(contactsection).toBeTruthy();
    expect(aboutsection).not.toBeTruthy();
  });


});
