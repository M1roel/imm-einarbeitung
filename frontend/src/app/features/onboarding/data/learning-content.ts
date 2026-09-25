import {
  ExerciseScenario,
  KnowledgeQuestion,
  LearningPathUnit,
  LessonStep,
  SourceNote,
} from '../models/learning';

export const LEARNING_PATH_UNITS: readonly LearningPathUnit[] = [
  { number: 1, title: 'Allgemeine Einarbeitung', state: 'planned' },
  { number: 2, title: 'Neue Medizinprodukte aufnehmen', state: 'planned' },
  {
    number: 3,
    title: 'Herstellerangaben bewerten und Medizinprodukte einstufen',
    state: 'planned',
  },
  { number: 4, title: 'Sieblisten erstellen und pflegen', state: 'planned' },
  { number: 5, title: 'Siebe und Sets kennzeichnen', state: 'planned' },
  {
    number: 6,
    title: 'Leihinstrumente managen',
    state: 'available',
    route: '/lernmodule/leihset-aus-schablone-anlegen',
    moduleTitle: 'Neues Leihset aus einer vorhandenen Schablone anlegen',
  },
  { number: 7, title: 'Medizinprodukte neu beschaffen', state: 'planned' },
  { number: 8, title: 'Nachlegelager verwalten', state: 'planned' },
  { number: 9, title: 'Statistiken erstellen', state: 'planned' },
];

export const LESSON_SOURCES = [
  {
    label: 'Fachliche Auskunft',
    detail:
      'Erfahrener IMM-Mitarbeiter/Stammdatenmanager, 25.09.2026; vorgesehener standortübergreifender Standard, noch nicht formal freigegeben.',
    status: 'fachliche Auskunft 25.09.2026',
  },
  {
    label: 'Historische Primärquelle',
    detail:
      'Anlegen Set_Leih_überarbeitet.pdf, PDF-Metadatum 06.03.2025, ohne erkennbare Version oder Freigabe.',
    status: 'quellenbelegt',
  },
  {
    label: 'Lernpfadquelle',
    detail:
      'Einarbeitungsplan IMM, Version 02 vom 18.10.2021, Abschnitt 6, damaliger Geltungsbereich „alle AEMP“.',
    status: 'quellenbelegt',
  },
] as const satisfies readonly SourceNote[];

export const REGULAR_STEPS = [
  {
    number: 1,
    title: 'Voraussetzungen prüfen',
    description:
      'Anmeldung, Herstellerangaben und Bewertung müssen für das konkrete Leihset vorhanden und gültig beziehungsweise freigegeben sein. Lieferschein und Vollständigkeit werden für den regulären Weg ebenfalls geprüft.',
    source: {
      label: 'Stop-Regel und Unterlagen',
      detail:
        'Fachliche Klärung, Abschnitte 4–6; historische Bezüge: PDF-Seiten 16, 19, 21, 23 und 28.',
      status: 'fachliche Auskunft 25.09.2026',
    },
  },
  {
    number: 2,
    title: 'Setcode bilden',
    description:
      'Fachbereich und Einsatzbereich aus Anmeldung und Einsatz bestimmen, Kürzel unter Stammdaten → Kostenstellen prüfen und im passenden Setcode-Bereich die nächste laufende Nummer verwenden.',
    source: {
      label: 'Setcode',
      detail: 'Fachliche Klärung, Punkte 3–8; historisch PDF-Seiten 1, 6–9 und 17.',
      status: 'fachliche Auskunft 25.09.2026',
    },
  },
  {
    number: 3,
    title: 'Bezeichnung und Schablone wählen',
    description:
      'Bezeichnung aus der Anmeldung übernehmen und die passende, bereits geprüfte Schablone auswählen. Dieses Modul erstellt keine neue Schablone.',
    source: {
      label: 'Anmeldung und Schablone',
      detail: 'Fachliche Klärung, Punkt 9; vorhandene Schablone historisch PDF-Seite 24.',
      status: 'fachliche Auskunft 25.09.2026',
    },
  },
  {
    number: 4,
    title: 'Set erzeugen',
    description:
      'An der ausgewählten Schablone „Set erzeugen“ aufrufen und Ausgangsschablone sowie Setdaten kontrollieren.',
    source: {
      label: 'Instacount-Aktion',
      detail:
        'Historisch quellenbelegt auf PDF-Seiten 24–25; Kontrollhinweis ist Plattformvorschlag.',
      status: 'quellenbelegt',
    },
  },
  {
    number: 5,
    title: 'Seriennummer übernehmen',
    description:
      'Im regulären Weg die Lieferscheinnummer als Seriennummer eintragen und den Setdatensatz erzeugen.',
    source: {
      label: 'Seriennummer',
      detail: 'Fachliche Klärung, Punkt 10; historisch PDF-Seiten 22, 25 und 26.',
      status: 'quellenbelegt',
    },
  },
  {
    number: 6,
    title: 'Übernahmen und Medien kontrollieren',
    description:
      'Übernommene Herstellerangaben und Bewertung kontrollieren. Anmeldung, Lieferschein und Bilder am erzeugten Set ergänzen.',
    source: {
      label: 'Schablonen- und Setdaten',
      detail: 'Fachliche Klärung, Punkte 12–14; historisch PDF-Seiten 23, 27 und 28.',
      status: 'quellenbelegt',
    },
  },
  {
    number: 7,
    title: 'Nacharbeiten abschließen',
    description:
      'Jede Siebschale einzeln fotografieren, Anmeldung und Lieferschein als PDF zuordnen, abschließend kontrollieren und die berechnete Zahl Barcodeetiketten drucken.',
    source: {
      label: 'Fotografie, Dokumente und Etiketten',
      detail: 'Fachliche Klärung, Punkte 14–17; historisch PDF-Seiten 28–37 und 39–50.',
      status: 'fachliche Auskunft 25.09.2026',
    },
  },
] as const satisfies readonly LessonStep[];

export const KNOWLEDGE_QUESTIONS = [
  {
    id: 'setcode',
    type: 'single',
    prompt:
      'Die synthetischen Kürzel SIM, UC und O sind geprüft; 198 ist die nächste Nummer im passenden Bereich. Welcher Setcode ist richtig?',
    options: [
      { id: 'a', label: 'SIM-L-UC-O-198' },
      { id: 'b', label: 'SIM-UC-O-L-198' },
      { id: 'c', label: 'UC-SIM-O-198-L' },
      { id: 'd', label: 'SIM-UC-L-O-198' },
    ],
    correctOptionIds: ['b'],
    rationale: 'Das Muster lautet Mandant–Fachbereich–Einsatzbereich–L–laufende Nummer.',
    source: 'Fachliche Klärung vom 25.09.2026, Punkte 3–8; historisch PDF-Seiten 1 und 6–9.',
  },
  {
    id: 'exception',
    type: 'single',
    prompt: 'In welchem Fall darf der gesonderte Ausnahmeweg geprüft werden?',
    options: [
      {
        id: 'a',
        label:
          'Nur der Lieferschein fehlt vorübergehend; Anmeldung, Herstellerangaben und Bewertung sind gültig vorhanden.',
      },
      { id: 'b', label: 'Die Herstellerangaben fehlen, die Betriebsleitung stimmt aber zu.' },
      { id: 'c', label: 'Die Bewertung fehlt, ein erfahrener IMM-Mitarbeiter stimmt aber zu.' },
      { id: 'd', label: 'Die Anmeldung passt nicht zum Set und wird später ersetzt.' },
    ],
    correctOptionIds: ['a'],
    rationale:
      'Nur der vorübergehend fehlende Lieferschein hat einen Ausnahmeweg. Die drei nicht übersteuerbaren Voraussetzungen müssen erfüllt sein.',
    source: 'Fachliche Klärung vom 25.09.2026, Punkt 22 und Abschnitt 6.',
  },
  {
    id: 'labels',
    type: 'single',
    prompt:
      'Ein synthetisches Leihset hat einen Container und drei Siebschalen. Wie viele Etiketten sind vorgesehen?',
    options: [
      { id: 'a', label: '3' },
      { id: 'b', label: '4' },
      { id: 'c', label: '5' },
      { id: 'd', label: '6' },
    ],
    correctOptionIds: ['c'],
    rationale: 'Anmeldung 1 + Containeranhänger 1 + drei Kofferanhänger 3 = 5.',
    source:
      'Fachliche Klärung vom 25.09.2026, Punkt 15; historisch PDF-Seiten 36–37 nur teilweise.',
  },
  {
    id: 'photos',
    type: 'multiple',
    prompt: 'Welche Aussagen beschreiben die vorgesehene Setfotografie richtig?',
    options: [
      { id: 'a', label: 'Sie ist ein einmaliges Stammdatenbild.' },
      {
        id: 'b',
        label:
          'Sie erfolgt bei jedem Packvorgang nach Reinigung und Desinfektion, sobald das Set am Packplatz eingescannt wurde.',
      },
      {
        id: 'c',
        label:
          'Bei mehreren Siebschalen wird jede Schale einzeln von oben fotografiert; blaues Vlies ist bevorzugt.',
      },
      { id: 'd', label: 'Sie ersetzt die Herstellerbewertung.' },
      { id: 'e', label: 'Sie dokumentiert den Vollständigkeitszustand des jeweiligen Durchlaufs.' },
    ],
    correctOptionIds: ['b', 'c', 'e'],
    rationale:
      'Die Bilder sind wiederkehrende Vollständigkeitsnachweise mit einer Draufsicht je Siebschale, keine Bewertung oder einmalige Stammdatenaufnahme.',
    source:
      'Fachliche Klärung vom 25.09.2026, Punkte 16–17 und Abschnitt 8; historisch PDF-Seiten 21 und 39–50.',
  },
] as const satisfies readonly KnowledgeQuestion[];

export const EXERCISE_SCENARIOS = [
  {
    id: 'regular',
    title: 'A · Regulärer Weg',
    tone: 'regular',
    introduction:
      'Demo-Leihset Gamma: SIM, Fachbereich GY, Einsatz O, Bereich SIM-GY-O-L, bisher höchste Nummer 031, Lieferschein LS-SIM-2026-0042, ein Container und drei Siebschalen.',
    tasks: [
      { id: 'regular-check', label: 'Pflichtunterlagen, Bewertung und Vollständigkeit geprüft' },
      { id: 'regular-code', label: 'Setcode SIM-GY-O-L-032 gebildet' },
      { id: 'regular-set', label: 'Set aus der vorgegebenen Schablone erzeugt' },
      { id: 'regular-labels', label: 'Fünf Etiketten berechnet: 1 + 1 + 3' },
      { id: 'regular-photo-1', label: 'Einzelaufnahme Siebschale 1 von oben vorgesehen' },
      { id: 'regular-photo-2', label: 'Einzelaufnahme Siebschale 2 von oben vorgesehen' },
      { id: 'regular-photo-3', label: 'Einzelaufnahme Siebschale 3 von oben vorgesehen' },
    ],
  },
  {
    id: 'exception',
    title: 'B · Nur der Lieferschein fehlt',
    tone: 'exception',
    introduction:
      'Anmeldung, Herstellerangaben und Bewertung sind gültig vorhanden. Ausschließlich der Lieferschein fehlt vorübergehend.',
    tasks: [
      { id: 'exception-stop', label: 'Regulären Weg gestoppt und Nachreichung angefordert' },
      { id: 'exception-approval', label: 'Zulässige Ausnahmefreigabe eingeholt' },
      { id: 'exception-01', label: 'Erst danach vorläufige Seriennummer 01 verwendet' },
      {
        id: 'exception-record',
        label: 'Ausnahme auf der Anmeldung dokumentiert und gegengezeichnet',
      },
      {
        id: 'exception-correct',
        label: 'Nach Eingang: 01 unmittelbar durch LS-SIM-2026-0099 ersetzen lassen',
      },
    ],
  },
  {
    id: 'stop',
    title: 'C · Nicht übersteuerbarer Stop',
    tone: 'stop',
    introduction: 'Die für das konkrete Demo-Set gültige Bewertung der Herstellerangaben fehlt.',
    tasks: [
      { id: 'stop-processing', label: 'Ablauf gestoppt: keine Aufbereitung' },
      { id: 'stop-reject', label: 'Eine angebotene Freigabe als unzulässig zurückgewiesen' },
      { id: 'stop-no-exception', label: 'Lieferschein-Ausnahmeweg nicht geöffnet' },
    ],
  },
] as const satisfies readonly ExerciseScenario[];

export const OPEN_QUESTIONS = [
  'Wie wird die Änderung von 01 zur Lieferscheinnummer in Instacount technisch beziehungsweise über eine Änderungshistorie nachvollzogen?',
  'Welche verbindlichen Vorgaben gelten zusätzlich für Bildqualität, Dateiformat und Aufbewahrungsdauer?',
  'Wer erteilt die formale standortübergreifende Freigabe für den gesamten Ablauf?',
] as const;
