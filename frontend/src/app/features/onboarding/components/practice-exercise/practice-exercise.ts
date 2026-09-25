import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { ExerciseScenario } from '../../models/learning';

@Component({
  selector: 'app-practice-exercise',
  templateUrl: './practice-exercise.html',
  styleUrl: './practice-exercise.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracticeExercise {
  readonly scenarios = input.required<readonly ExerciseScenario[]>();
  readonly completed = output<void>();

  protected readonly selectedTasks = signal<ReadonlySet<string>>(new Set<string>());
  protected readonly submitted = signal(false);
  protected readonly allTasksDone = computed(() =>
    this.scenarios().every((scenario) =>
      scenario.tasks.every((task) => this.selectedTasks().has(task.id)),
    ),
  );

  protected isSelected(taskId: string): boolean {
    return this.selectedTasks().has(taskId);
  }

  protected toggle(taskId: string): void {
    this.submitted.set(false);
    this.selectedTasks.update((current) => {
      const next = new Set(current);
      if (next.has(taskId)) {
        next.delete(taskId);
      } else {
        next.add(taskId);
      }
      return next;
    });
  }

  protected evaluate(): void {
    this.submitted.set(true);
    if (this.allTasksDone()) {
      this.completed.emit();
    }
  }
}
