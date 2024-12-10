import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-tooltip',
  styleUrl: 'ui-tooltip.css',
  shadow: true,
})
export class UiTooltip {
  @Prop({ reflect: true })
  opened = false;

  showTooltip() {
    this.opened = !this.opened;
    console.log('clicked!');
  }

  render() {
    return (
      <div>
        dsdsdsdsd dsds
        <slot />
        <div class="tooltip-wrapper" onClick={this.showTooltip.bind(this)} attr-texte="text tooltip goes here">
          idsfdsfdsfdsfd
          <div class="tooltip">456 456454 456 454</div>
        </div>
      </div>
    );
  }
}
