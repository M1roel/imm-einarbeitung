import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressIndicator } from '../../../shared/components/progress-indicator/progress-indicator';
import { StatusBadge } from '../../../shared/components/status-badge/status-badge';
import { ProgressStore } from '../../onboarding/data/progress.store';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterLink, ProgressIndicator, StatusBadge],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  protected readonly progressStore = inject(ProgressStore);
}
