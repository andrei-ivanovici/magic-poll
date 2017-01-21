import { Component, NgZone, AfterViewInit, OnDestroy, Input, SimpleChange } from '@angular/core';
import { Chart } from './chart.model';
declare var zingchart:any;
@Component({
  selector: 'zingchart',
  template: `<div id="poll-result"></div>`
})
export class ZingChart implements OnDestroy {
  @Input()
  chart: Chart;

  constructor(private zone: NgZone) { }
  ngAfterViewInit() {
    if (this.chart) {
      this.zone.runOutsideAngular(() => zingchart.render(this.chart));
    }
  }

  ngOnChanges(changes: SimpleChange) {
    if (this.chart) {
      this.zone.runOutsideAngular(() => zingchart.render(this.chart));
    }
  }

  ngOnDestroy() {
    zingchart.exec(this.chart.id, 'destroy');
  }
}
