import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-hero',
  styleUrl: 'my-hero.css',
  shadow: true,
})
export class MyHero {
  render() {
    return (
      <Host>
        <slot>
          <div id="particles-js">
            <div class="container">
              <div class="left">
                <div class="text">
                  <div class="lg-text">Test case simplified</div>
                  <div class="sm-text">generating randomness quicker than ever</div>
                </div>
                <div class="nav">
                  <stencil-route-link url="/array">
                    <button class="vector btn-primary">Arrays</button>
                  </stencil-route-link>
                  <stencil-route-link url="/string">
                    <button class="string btn-primary">String</button>
                  </stencil-route-link>
                </div>
              </div>
              <div class="right">
                <img src="../../assets/logo.png" alt="logo" />
              </div>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
