import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/app-shell/app-shell').then((component) => component.AppShell),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        title: 'Übersicht | IMM Lernen',
        loadComponent: () =>
          import('./features/dashboard/dashboard-page/dashboard-page').then(
            (component) => component.DashboardPage,
          ),
      },
      {
        path: 'lernpfad',
        title: 'Lernpfad | IMM Lernen',
        loadComponent: () =>
          import('./features/onboarding/pages/learning-path-page/learning-path-page').then(
            (component) => component.LearningPathPage,
          ),
      },
      {
        path: 'lernmodule/leihset-aus-schablone-anlegen',
        title: 'Leihset aus Schablone anlegen | IMM Lernen',
        loadComponent: () =>
          import('./features/onboarding/pages/lesson-page/lesson-page').then(
            (component) => component.LessonPage,
          ),
      },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];
