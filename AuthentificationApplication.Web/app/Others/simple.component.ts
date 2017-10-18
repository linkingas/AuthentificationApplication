import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'simple',

  template: `You entered : {{ simpleInput}}`
})
export class SimpleComponent implements OnChanges {





  ngOnChanges(changes: SimpleChanges): void {

    for (let property in changes) {
      let change = changes[property];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(property + ': current value = ' + current + ' old value = '+ previous);

    }

  }

  @Input()
  public simpleInput: string;





}


