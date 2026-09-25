import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EXERCISE_SCENARIOS } from '../../data/learning-content';
import { PracticeExercise } from './practice-exercise';

describe('PracticeExercise', () => {
  let fixture: ComponentFixture<PracticeExercise>;
  let component: PracticeExercise;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PracticeExercise] }).compileComponents();
    fixture = TestBed.createComponent(PracticeExercise);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('scenarios', EXERCISE_SCENARIOS);
    fixture.detectChanges();
  });

  it('completes only after regular, exception and stop scenarios are fully checked', () => {
    let completed = false;
    component.completed.subscribe(() => (completed = true));
    const inputs = fixture.nativeElement.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    inputs[0].click();
    button.click();
    fixture.detectChanges();
    expect(completed).toBe(false);

    inputs.forEach((input) => {
      if (!input.checked) {
        input.click();
      }
    });
    button.click();
    fixture.detectChanges();

    expect(completed).toBe(true);
    expect(fixture.nativeElement.textContent).toContain(
      'Alle drei Fälle wurden vollständig bearbeitet',
    );
  });
});
