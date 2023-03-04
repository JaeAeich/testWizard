import { Component, Host, h, State } from '@stencil/core';
@Component({
  tag: 'my-array',
  styleUrl: 'my-array.css',
  shadow: true,
})
export class MyArray {
  @State() ans = false;

  handleClick() {
    this.ans = true;
  }
  render() {
    return (
      <Host>
        <slot>
          <div class="container">
            {this.ans && <div class="ans-vert">Hello</div>}
            <div class="container-mini">
              <form>
                <div class="constraints">
                  <div class="constraint-container">
                    <label htmlFor="num_element" class="inp">
                      <input type="number" id="num_element" name="num_elements" placeholder=" " />
                      <span class="label">Number of element</span>
                      <span class="focus-bg" />
                    </label>
                  </div>
                  <div class="constraint-container">
                    <label htmlFor="lower_bound" class="inp">
                      <input type="number" id="lower_bound" name="lower_bound" placeholder=" " />
                      <span class="label">Lower Bound</span>
                      <span class="focus-bg" />
                    </label>
                  </div>
                  <div class="constraint-container">
                    <label htmlFor="upper_bound" class="inp">
                      <input type="number" id="upper_bound" name="upper_bound" placeholder=" " />
                      <span class="label">Upper Bound</span>
                      <span class="focus-bg" />
                    </label>
                  </div>
                </div>
                <div class="extra-info">
                  <label htmlFor="separator" class="inp">
                    <input type="string" id="separator" name="separator" placeholder=" " />
                    <span class="label">Separator</span>
                    <span class="focus-bg" />
                  </label>
                  <div>
                    <label htmlFor="num_vec" class="inp">
                      <input type="number" id="num_vec" name="num_vec" placeholder=" " />
                      <span class="label">Number of vectors</span>
                      <span class="focus-bg" />
                    </label>
                  </div>
                </div>
                <div class="vec-type">
                  <label>Vector Type:</label>
                  <label htmlFor="row">
                    <input type="radio" id="row" name="vector_type" defaultValue="row" defaultChecked={true} />
                    Row
                  </label>
                  <label htmlFor="column">
                    <input type="radio" id="column" name="vector_type" defaultValue="column" />
                    Column
                  </label>
                </div>
                <div class="sub-btn">
                  <button type="button" onClick={() => this.handleClick()}>
                    Generate Random Vectors
                  </button>
                </div>
              </form>
            </div>
          </div>
          {this.ans && <div class="ans-hort">Hello</div>}
        </slot>
      </Host>
    );
  }
}
