import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'primary-button',
  styleUrls: ['./button.scss'],
  scoped: true
})
export class ButtonComponent {

  // This property controls the main styles for the instance
  @Prop() type: string;

  render() {
    return (
      <button class={this.type}>
        <slot />
      </button>
    );
  }
}