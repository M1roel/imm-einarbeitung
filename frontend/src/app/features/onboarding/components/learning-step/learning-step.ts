import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SourceReference } from '../../../../shared/components/source-reference/source-reference';
import { LessonStep } from '../../models/learning';

@Component({
  selector: 'app-learning-step',
  imports: [SourceReference],
  templateUrl: './learning-step.html',
  styleUrl: './learning-step.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningStepComponent {
  readonly step = input.required<LessonStep>();
}
