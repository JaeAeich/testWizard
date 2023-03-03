import { Component, Host, h } from '@stencil/core';
// import Typewriter from 'typewriter-effect';

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
          <div class="main-container">
            <div class="container">
              <div class="left">
                <div class="text">
                  <div class="lg-text">Test case simplified</div>
                  <div class="sm-text">generating randomness quicker than ever</div>
                </div>
                <div class="nav">
                  <div class="vector btn-primary">Arrays</div>
                  <div class="string btn-primary">String</div>
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
