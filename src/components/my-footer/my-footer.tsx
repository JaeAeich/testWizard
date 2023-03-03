import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true,
})
export class MyFooter {
  render() {
    return (
      <Host>
        <slot>
          <div class="footer">
            <div class="container">
              <div class=" mini-container">
                <div class="text">made with </div>
                <div class="heart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                  </svg>
                </div>
                <div class="text"> by Jae Aeich</div>
              </div>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
