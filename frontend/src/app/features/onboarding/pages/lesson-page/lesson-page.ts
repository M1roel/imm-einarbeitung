import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Callout } from '../../../../shared/components/callout/callout';
import { ProgressIndicator } from '../../../../shared/components/progress-indicator/progress-indicator';
import { SourceReference } from '../../../../shared/components/source-reference/source-reference';
import { StatusBadge } from '../../../../shared/components/status-badge/status-badge';
import { KnowledgeCheck } from '../../components/knowledge-check/knowledge-check';
import { LearningStepComponent } from '../../components/learning-step/learning-step';
import { PracticeConfirmation } from '../../components/practice-confirmation/practice-confirmation';
import { PracticeExercise } from '../../components/practice-exercise/practice-exercise';
import {
  EXERCISE_SCENARIOS,
  KNOWLEDGE_QUESTIONS,
  LESSON_SOURCES,
  OPEN_QUESTIONS,
  REGULAR_STEPS,
} from '../../data/learning-content';
import { ProgressStore } from '../../data/progress.store';

@Component({
  selector: 'app-lesson-page',
  imports: [
    RouterLink,
    Callout,
    ProgressIndicator,
    SourceReference,
    StatusBadge,
    KnowledgeCheck,
    LearningStepComponent,
    PracticeConfirmation,
    PracticeExercise,
  ],
  templateUrl: './lesson-page.html',
  styleUrl: './lesson-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonPage {
  protected readonly progressStore = inject(ProgressStore);
  protected readonly steps = REGULAR_STEPS;
  protected readonly questions = KNOWLEDGE_QUESTIONS;
  protected readonly scenarios = EXERCISE_SCENARIOS;
  protected readonly sources = LESSON_SOURCES;
  protected readonly openQuestions = OPEN_QUESTIONS;
}
