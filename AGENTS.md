# Arbeitsregeln für die IMM-Onboarding-Plattform

## Ziel und fachliche Verlässlichkeit

- Entwickle eine interne, browserbasierte Onboarding-Plattform mit nachvollziehbaren Lerneinheiten, Übungen, Lernstand und separat bestätigter Praxis. Eine PDF-Ablage allein erfüllt das Produktziel nicht.
- Kennzeichne fachliche Aussagen eindeutig als `quellenbelegt`, `Plattformvorschlag` oder `fachlich bestätigt`. `Fachlich bestätigt` setzt eine dokumentierte Bestätigung mit Rolle, Datum und Geltungsbereich voraus.
- Behandle den Einarbeitungsplan Version 02 vom 18.10.2021 und den älteren ICP-Standard als Quellen ihres jeweiligen Stands, nicht automatisch als heute gültige Arbeitsanweisungen.
- Erfinde keine Aussagen zu Aufbereitung, Risikoeinstufung, Hygiene oder regulatorischer Freigabe. Nenne die genaue Fundstelle und kennzeichne die erforderliche Prüfung durch IMM, QM oder AEMP-Leitung.

## Quellen und Inhalte

- Prüfe Lenkungsstatus, Stand und Geltungsbereich der Originalquelle sowie dokumentierte fachliche Bestätigungen. Bei Widersprüchen lege keinen aktuellen Ablauf selbst fest, sondern dokumentiere den Konflikt zur Klärung durch die zuständige Stelle.
- Prüfe vor einer Aussage, ob die Quelldatei tatsächlich verfügbar und lesbar ist. Behaupte nie, eine nicht zugängliche oder nur oberflächlich geprüfte Quelle gelesen zu haben.
- Veröffentlicht gedachte Lerninhalte müssen Quelle und Stand, Geltungsbereich beziehungsweise Variante, Prüfstatus sowie fachlich verantwortliche Rolle erkennen lassen.
- Behandle `source-documents/` als internes, nicht versioniertes Quellenmaterial. Übernimm keine langen Passagen daraus in Code, Skills oder Beispieldaten.
- Verwende ausschließlich erfundene, als solche erkennbare Beispielangaben; keine echten Kunden-, Patienten- oder Mitarbeiterdaten.

## Produkt- und Architekturgrundsätze

- Trenne Wissensvermittlung, Verständnisprüfung, selbstberichteten Lernfortschritt und dokumentierte praktische Bestätigung fachlich wie technisch. „Gelesen“ ist keine Freigabe oder Praxisbestätigung.
- Berücksichtige Standort- und Kundenvarianten über sichtbaren Geltungsbereich und Variantenkennzeichnung, ohne nicht belegte Unterschiede zu erfinden.
- Eine feature-orientierte Angular-Struktur mit `core/`, `shared/` sowie `features/dashboard`, `onboarding`, `documents`, `progress` und `administration` ist ein geeigneter Ausgangspunkt. Halte Feature-Grenzen klar und lege fachliche Modelle nicht unnötig in `core/` ab.
- Lege Angular-Version, Authentifizierung, Hosting, Backend, Datenbankmodell und Freigabe-Workflow erst fest, wenn das Repository oder eine bestätigte Entscheidung sie vorgibt. DABubble V2 ist keine Vorlage für dieses Projekt.

## Arbeitsweise und Verifikation

- Prüfe vor Änderungen bestehende Anweisungen, Dateien und den Git-Status. Ändere nur den erforderlichen Umfang und bewahre nicht zugehörige Änderungen.
- Nutze bei fachlicher Quellenarbeit den Skill `imm-quellen-pruefen`; nutze für die didaktische Umsetzung geprüfter Inhalte `imm-lernmodul-erstellen`.
- Prüfe Änderungen passend zum Risiko: mindestens Format/Syntax und betroffene Tests; bei UI-Arbeit zusätzlich Build sowie relevante Bedienpfade und Barrierefreiheit. Dokumentiere nicht ausführbare Prüfungen und offene Annahmen.
- Führe bei fachlichen Änderungen Quellenstand, Geltungsbereich, Prüfstatus und offene Prüfaufträge in der Übergabe auf.
