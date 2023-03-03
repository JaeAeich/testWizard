import { newSpecPage } from '@stencil/core/testing';
import { MyString } from '../my-string';

describe('my-string', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyString],
      html: `<my-string></my-string>`,
    });
    expect(page.root).toEqualHtml(`
      <my-string>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-string>
    `);
  });
});
