import { newSpecPage } from '@stencil/core/testing';
import { MyArray } from '../my-array';

describe('my-array', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyArray],
      html: `<my-array></my-array>`,
    });
    expect(page.root).toEqualHtml(`
      <my-array>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-array>
    `);
  });
});
