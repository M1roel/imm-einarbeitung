import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KNOWLEDGE_QUESTIONS } from '../../data/learning-content';
import { KnowledgeCheck } from './knowledge-check';

describe('KnowledgeCheck', () => {
  let fixture: ComponentFixture<KnowledgeCheck>;
  let component: KnowledgeCheck;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [KnowledgeCheck] }).compileComponents();
    fixture = TestBed.createComponent(KnowledgeCheck);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('questions', KNOWLEDGE_QUESTIONS);
    fixture.detectChanges();
  });

  it('does not emit completion for wrong answers', () => {
    let completed = false;
    component.completed.subscribe(() => (completed = true));
    const inputs = fixture.nativeElement.querySelectorAll('input') as NodeListOf<HTMLInputElement>;

    [0, 4, 8, 12].forEach((index) => inputs[index].click());
    fixture.detectChanges();
    (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(completed).toBe(false);
    expect(fixture.nativeElement.textContent).toContain('Mindestens eine Antwort ist noch falsch');
  });

  it('emits completion only when every answer is correct', () => {
    let completed = false;
    component.completed.subscribe(() => (completed = true));
    const inputs = fixture.nativeElement.querySelectorAll('input') as NodeListOf<HTMLInputElement>;

    [1, 4, 10, 13, 14, 16].forEach((index) => inputs[index].click());
    fixture.detectChanges();
    (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(completed).toBe(true);
    expect(fixture.nativeElement.textContent).toContain('Alle Antworten sind richtig');
  });
});
