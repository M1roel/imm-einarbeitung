import { Injectable, computed, signal } from '@angular/core';
import { LessonProgress } from '../../../shared/models/progress';

const INITIAL_PROGRESS: LessonProgress = {
  contentViewed: false,
  knowledgeChecked: false,
  exerciseCompleted: false,
  practiceConfirmed: false,
};

@Injectable({ providedIn: 'root' })
export class ProgressStore {
  private readonly lessonProgress = signal<LessonProgress>(INITIAL_PROGRESS);

  readonly progress = this.lessonProgress.asReadonly();
  readonly completedLearningStages = computed(() => {
    const progress = this.lessonProgress();
    return [progress.contentViewed, progress.knowledgeChecked, progress.exerciseCompleted].filter(
      Boolean,
    ).length;
  });

  markContentViewed(): void {
    this.lessonProgress.update((progress) => ({ ...progress, contentViewed: true }));
  }

  markKnowledgeChecked(): void {
    this.lessonProgress.update((progress) => ({ ...progress, knowledgeChecked: true }));
  }

  markExerciseCompleted(): void {
    this.lessonProgress.update((progress) => ({ ...progress, exerciseCompleted: true }));
  }
}
