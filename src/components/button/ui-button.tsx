import { Component, h } from '@stencil/core'


@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  // shadow: false,
  scoped: false,

})
export class UiButton{
  constructor(){

  }

  render(){
   return (<div>Stencil is here</div>);
  }
}