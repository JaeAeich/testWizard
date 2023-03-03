import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-array',
  styleUrl: 'my-array.css',
  shadow: true,
})
export class MyArray {
  render() {
    return (
      <Host>
        <slot> this is array</slot>
      </Host>
    );
  }
}
