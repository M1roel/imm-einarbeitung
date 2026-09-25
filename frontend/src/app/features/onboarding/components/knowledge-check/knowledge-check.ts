import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { KnowledgeQuestion } from '../../models/learning';

@Component({
  selector: 'app-knowledge-check',
  templateUrl: './knowledge-check.html',
  styleUrl: './knowledge-check.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnowledgeCheck {
  readonly questions = input.required<readonly KnowledgeQuestion[]>();
  readonly completed = output<void>();

  protected readonly selections = signal<Record<string, readonly string[]>>({});
  protected readonly submitted = signal(false);
  protected readonly allAnswered = computed(() =>
    this.questions().every((question) => (this.selections()[question.id]?.length ?? 0) > 0),
  );
  protected readonly allCorrect = computed(() =>
    this.questions().every((question) => this.isQuestionCorrect(question)),
  );

  protected isSelected(questionId: string, optionId: string): boolean {
    return this.selections()[questionId]?.includes(optionId) ?? false;
  }

  protected select(question: KnowledgeQuestion, optionId: string): void {
    this.submitted.set(false);
    this.selections.update((selections) => {
      const current = selections[question.id] ?? [];
      const next =
        question.type === 'single'
          ? [optionId]
          : current.includes(optionId)
            ? current.filter((id) => id !== optionId)
            : [...current, optionId];
      return { ...selections, [question.id]: next };
    });
  }

  protected isQuestionCorrect(question: KnowledgeQuestion): boolean {
    const selected = [...(this.selections()[question.id] ?? [])].sort();
    const expected = [...question.correctOptionIds].sort();
    return (
      selected.length === expected.length &&
      selected.every((value, index) => value === expected[index])
    );
  }

  protected checkAnswers(): void {
    this.submitted.set(true);
    if (this.allCorrect()) {
      this.completed.emit();
    }
  }
}
