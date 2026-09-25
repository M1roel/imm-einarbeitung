import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LessonProgress } from '../../models/progress';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.html',
  styleUrl: './progress-indicator.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressIndicator {
  readonly progress = input.required<LessonProgress>();
  readonly compact = input(false);
}
