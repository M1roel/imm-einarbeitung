export type EvidenceStatus =
  'quellenbelegt' | 'Plattformvorschlag' | 'fachliche Auskunft 25.09.2026';

export interface SourceNote {
  readonly label: string;
  readonly detail: string;
  readonly status: EvidenceStatus;
}

export interface LearningPathUnit {
  readonly number: number;
  readonly title: string;
  readonly state: 'available' | 'planned';
  readonly route?: string;
  readonly moduleTitle?: string;
}

export interface LessonStep {
  readonly number: number;
  readonly title: string;
  readonly description: string;
  readonly source: SourceNote;
}

export interface KnowledgeOption {
  readonly id: string;
  readonly label: string;
}

export interface KnowledgeQuestion {
  readonly id: string;
  readonly type: 'single' | 'multiple';
  readonly prompt: string;
  readonly options: readonly KnowledgeOption[];
  readonly correctOptionIds: readonly string[];
  readonly rationale: string;
  readonly source: string;
}

export interface ExerciseTask {
  readonly id: string;
  readonly label: string;
}

export interface ExerciseScenario {
  readonly id: string;
  readonly title: string;
  readonly tone: 'regular' | 'exception' | 'stop';
  readonly introduction: string;
  readonly tasks: readonly ExerciseTask[];
}
