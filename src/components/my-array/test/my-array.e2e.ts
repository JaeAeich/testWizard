import { newE2EPage } from '@stencil/core/testing';

describe('my-array', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-array></my-array>');

    const element = await page.find('my-array');
    expect(element).toHaveClass('hydrated');
  });
});
