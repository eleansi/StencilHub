import { Component, h } from "@stencil/core";

@Component({
  tag: 'container-tag',
  styleUrls: ['./container.scss'],
  scoped: true
})

export class ButtonComponent {
  render() {
    return (
      <div class="container-wrapper">
          <slot />
      </div>
    );
  }
}