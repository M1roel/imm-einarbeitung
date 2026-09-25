import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.html',
  styleUrl: './callout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Callout {
  readonly title = input.required<string>();
  readonly kind = input<'info' | 'warning' | 'stop'>('info');
}
