import { newE2EPage } from '@stencil/core/testing';

describe('my-string', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-string></my-string>');

    const element = await page.find('my-string');
    expect(element).toHaveClass('hydrated');
  });
});
