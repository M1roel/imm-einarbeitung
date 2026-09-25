import { TestBed } from '@angular/core/testing';
import { ProgressStore } from './progress.store';

describe('ProgressStore', () => {
  it('keeps learning progress and practice confirmation separate', () => {
    const store = TestBed.inject(ProgressStore);

    store.markContentViewed();
    store.markKnowledgeChecked();
    store.markExerciseCompleted();

    expect(store.progress()).toEqual({
      contentViewed: true,
      knowledgeChecked: true,
      exerciseCompleted: true,
      practiceConfirmed: false,
    });
    expect(store.completedLearningStages()).toBe(3);
  });
});
