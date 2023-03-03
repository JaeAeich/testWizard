import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-string',
  styleUrl: 'my-string.css',
  shadow: true,
})
export class MyString {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
