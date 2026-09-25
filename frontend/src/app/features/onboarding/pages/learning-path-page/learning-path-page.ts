import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusBadge } from '../../../../shared/components/status-badge/status-badge';
import { LEARNING_PATH_UNITS } from '../../data/learning-content';

@Component({
  selector: 'app-learning-path-page',
  imports: [RouterLink, StatusBadge],
  templateUrl: './learning-path-page.html',
  styleUrl: './learning-path-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningPathPage {
  protected readonly units = LEARNING_PATH_UNITS;
}
