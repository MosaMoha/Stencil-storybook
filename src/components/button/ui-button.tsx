import { Component, h } from '@stencil/core'


@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,

})
export class UiButton{
  constructor(){

  }

  render(){
   return (<div>Stencil is here</div>);
  }
}