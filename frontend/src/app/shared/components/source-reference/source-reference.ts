import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EvidenceStatus } from '../../../features/onboarding/models/learning';
import { StatusBadge } from '../status-badge/status-badge';

@Component({
  selector: 'app-source-reference',
  imports: [StatusBadge],
  templateUrl: './source-reference.html',
  styleUrl: './source-reference.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceReference {
  readonly label = input.required<string>();
  readonly detail = input.required<string>();
  readonly status = input.required<EvidenceStatus>();
}
