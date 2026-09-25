import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should provide the application router outlet', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should configure the three public routes', () => {
    const childPaths = routes[0].children?.map((route) => route.path);
    expect(childPaths).toContain('dashboard');
    expect(childPaths).toContain('lernpfad');
    expect(childPaths).toContain('lernmodule/leihset-aus-schablone-anlegen');
  });
});
