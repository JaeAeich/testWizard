import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <my-navbar></my-navbar>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="my-hero" exact={true} />
              <stencil-route url="/array" component="my-array" exact={true} />
              <stencil-route url="/string" component="my-string" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <my-footer></my-footer>
      </div>
    );
  }
}
