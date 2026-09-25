# Fachliche Klärung: Leihset-Ablauf vom 25.09.2026

## 1. Anlass und Prüffrage

Diese Klärung dokumentiert den am 25.09.2026 mitgeteilten aktuellen Arbeitsstand zum standortübergreifend vorgesehenen Leihset-Ablauf und grenzt ihn von den bereits ausgewerteten historischen Dokumentquellen ab.

**Prüffrage:** Welche Schritte und Regeln sollen für das Anlegen und die weitere Bearbeitung eines Leihsets in der ersten Plattform-Ausbaustufe gelten, und welche Detailfragen bleiben vor einer formalen standortübergreifenden Freigabe offen?

## 2. Herkunft, Status und Geltungsabsicht

| Merkmal | Dokumentation |
| --- | --- |
| Art der Auskunft | Fachliche Auskunft eines erfahrenen IMM-Mitarbeiters/Stammdatenmanagers |
| Datum der Auskunft | 25.09.2026 |
| Geltungsabsicht | Vorgesehener standortübergreifender Standard für die Plattform |
| Formale Freigabe | Noch nicht formal standortübergreifend freigegeben |
| Softwareumfang der ersten Ausbaustufe | Ausschließlich Instacount 4.42 |
| Verwendungsstatus | Als gekennzeichneten Entwurf verwenden und zur formalen standortübergreifenden Freigabe vorlegen |

Die Kennzeichnung `fachliche Auskunft 25.09.2026` bedeutet in diesem Dokument: von der genannten Fachrolle als aktueller Arbeitsstand mitgeteilt, aber noch nicht formal standortübergreifend freigegeben. Sie ist deshalb nicht gleichbedeutend mit `fachlich bestätigt` im Sinne einer dokumentierten formalen Freigabe mit Freigaberolle, Datum und verbindlichem Geltungsbereich.

`quellenbelegt` bezeichnet dagegen ausschließlich Aussagen, die sich an den angegebenen Stellen in `Anlegen Set_Leih_überarbeitet.pdf` wiederfinden. `Plattformvorschlag` wird nur für didaktische oder technische Strukturierungsentscheidungen verwendet.

## 3. Abgleich des mitgeteilten Arbeitsstands mit der PDF-Quelle

| Nr. | Mitgeteilter Arbeitsstand | Status der Aussage | Abgleich mit `Anlegen Set_Leih_überarbeitet.pdf` |
| ---: | --- | --- | --- |
| 1 | Die Plattform soll einen einheitlichen Ablauf für alle Standorte abbilden. | `fachliche Auskunft 25.09.2026`; vorgesehener standortübergreifender Standard; noch nicht formal standortübergreifend freigegeben | Nicht durch die PDF belegt; deren Geltungsbereich ist nicht ausgewiesen und ihre Beispiele wirken standortabhängig. |
| 2 | Die erste Ausbaustufe behandelt ausschließlich Instacount 4.42. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | Die PDF zeigt eine Instacount-PLUS-Oberfläche, nennt aber keine belastbare Versionsnummer 4.42. |
| 3 | Eine Leihset-Schablone wird am Bestandteil `-L-` im Setcode erkannt. | `fachliche Auskunft 25.09.2026` und historisch `quellenbelegt` | PDF-Seiten 1, 7, 9 und 17 zeigen beziehungsweise erläutern `-L-` als Merkmal für Leihsets. |
| 4 | Der Setcode folgt dem Muster `<MANDANT>-<FACHBEREICH>-<EINSATZBEREICH>-L-<LAUFENDE NUMMER>`. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | PDF-Seiten 1 und 6–9 zeigen ein kompatibles hierarchisches Schema, verwenden aber teilweise andere Bezeichnungen für die Segmente. Die genaue aktuelle Semantik stammt aus der Auskunft. |
| 5 | Das erste Segment enthält das Mandantenkürzel; als Beispiel wurde `EVK` genannt. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | Die PDF belegt ein Mandantensegment, aber nicht dieses aktuelle Beispiel als allgemeingültigen Standard. Das Beispiel darf nicht als synthetischer Trainingsdatensatz verwendet werden. |
| 6 | Der Fachbereich wird aus der Leihset-Anmeldung ermittelt; genannt wurden `UC` für Unfallchirurgie, `NC` für Wirbelsäulenchirurgie und `GY` für Gynäkologie. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | Die PDF zeigt Fach-/Kostenstellenkürzel, belegt aber weder die vollständige aktuelle Kürzelliste noch deren Ableitung aus der Anmeldung. |
| 7 | Der Einsatzbereich wird mit `O` für OP, `A` für Ambulanz oder `S` für Station/Funktionsabteilung gekennzeichnet. Bei Leihsets ist `O` der Regelfall; `A` und `S` sind seltener. | `fachliche Auskunft 25.09.2026`; die Bedeutung von `O`, `A` und `S` ist historisch `quellenbelegt` | PDF-Seiten 6–9 erläutern die Bereichskennzeichen. Regelfall und Häufigkeiten stammen allein aus der Auskunft. |
| 8 | Für das neue Set wird die nächste freie laufende Nummer ermittelt; nach `EVK-UC-O-L-197` folgt beispielsweise `EVK-UC-O-L-198`. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | Die PDF nennt eine fortlaufende Codierung, PDF-Seiten 1, 6–9 und 17. Der Suchraum für „nächste freie Nummer“ bleibt offen. Das konkrete Beispiel wird nicht in Übungsdaten übernommen. |
| 9 | Die Bezeichnung wird aus der Leihset-Anmeldung übernommen. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | PDF-Seite 11 verweist auf eine Vorgabe der anfordernden Stelle; PDF-Seite 22 nennt zusätzlich Siebtitel und Verleiher-Artikelnummer. Das Verhältnis dieser Angaben ist vor formaler Freigabe zu präzisieren. |
| 10 | Die Lieferscheinnummer wird als Seriennummer eingetragen. | `fachliche Auskunft 25.09.2026` und historisch `quellenbelegt` | PDF-Seiten 22, 25 und 26 zeigen diese Zuordnung. |
| 11 | Vor dem regulären Anlegen müssen Leihset-Anmeldung, Lieferschein, Herstellerangaben, Bewertung der Herstellerangaben und bestätigte Vollständigkeit vorhanden beziehungsweise geprüft sein. | `fachliche Auskunft 25.09.2026`; Teile historisch `quellenbelegt` | PDF-Seite 16 nennt Vollständigkeitsprüfung anhand des Lieferscheins; PDF-Seiten 19, 21 und 23 setzen Klassifizierung beziehungsweise Bewertung voraus; PDF-Seite 28 nennt Anmeldung und Lieferschein. Die vollständige Stop-Regel stammt aus der Auskunft. |
| 12 | Aus der Schablone werden Herstellerangaben und Bewertung übernommen. | `fachliche Auskunft 25.09.2026` und historisch `quellenbelegt` | PDF-Seiten 23 und 27 zeigen allgemeingültige Herstellerunterlagen sowie Bewertung in der Schablone und deren Fortbestand am Set. |
| 13 | Am erzeugten Set werden Anmeldung, Lieferschein und Bilder ergänzt. | `fachliche Auskunft 25.09.2026` und historisch `quellenbelegt` | PDF-Seite 28 nennt diese setspezifischen Medien. |
| 14 | Nach der Seterzeugung folgen Setfotografie, Zuordnung von Anmeldung und Lieferschein als PDF, abschließende Kontrolle und Druck der Barcodeetiketten. | `fachliche Auskunft 25.09.2026`; Teile historisch `quellenbelegt` | PDF-Seiten 28–37 zeigen Dokumentzuordnung und Etikettdruck; PDF-Seiten 39–50 zeigen die Setfotografie. Eine ausdrücklich benannte abschließende Kontrolle ist in der PDF nicht ausreichend beschrieben. |
| 15 | Etikettenmenge: ein Etikett für die Anmeldung, zusätzlich eines für den Containeranhänger, falls ein Container vorhanden ist, sowie je eines für den Kofferanhänger jeder Siebschale. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | PDF-Seiten 36–37 belegen Etikettdruck und ein Etikett für die Anmeldung, nicht jedoch die vollständige Berechnungsregel. |
| 16 | Das Set wird bei jedem Packvorgang nach Reinigung und Desinfektion fotografiert, sobald es am Packplatz eingescannt wurde. | `fachliche Auskunft 25.09.2026`; der wiederkehrende Fotoauftrag ist historisch `quellenbelegt` | PDF-Seite 21 verlangt eine Fotografie nach jedem Packvorgang; PDF-Seiten 39–50 zeigen den Fotoablauf. Der genaue Zeitpunkt nach Reinigung/Desinfektion und Packplatzscan stammt aus der Auskunft. |
| 17 | Die Fotos dokumentieren den Vollständigkeitszustand beim jeweiligen Eintreffen am Standort und sollen bei später fehlenden Instrumenten die Nachvollziehbarkeit zwischen Aufbereitungsdurchläufen im Krankenhaus beziehungsweise OP unterstützen. | `fachliche Auskunft 25.09.2026`; Zweck teilweise historisch `quellenbelegt` | PDF-Seite 21 nennt die Bearbeitung beziehungsweise Widerlegung späterer Reklamationen. Die konkrete Abgrenzung zwischen zwei Durchläufen stammt aus der Auskunft. |
| 18 | Bei Rückgabe an den Verleiher wird das Set von der Schablone gelöst und auf `Gesperrt` gesetzt. | `fachliche Auskunft 25.09.2026` und historisch `quellenbelegt` | PDF-Seiten 20 und 38 beschreiben Sperren und Lösen von der Schablone. |
| 19 | Die praktische Leistung darf ein erfahrener IMM-Mitarbeiter bestätigen; alternativ die Leitung, wenn sie den Ablauf selbst fachlich beherrscht. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | In der PDF nicht beschrieben. |
| 20 | Bereinigte Ausschnitte der Instacount-Oberfläche dürfen im internen Lerninterface verwendet werden. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | In der PDF nicht als Nutzungsfreigabe beschrieben. „Bereinigt“ erfordert weiterhin die Entfernung realer Organisations-, Personen-, Lieferanten-, Set- und Vorgangsdaten. |
| 21 | Grundsätzlich wird erst weitergearbeitet, wenn alle erforderlichen Unterlagen und Prüfungen vorliegen. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | Die PDF enthält Einzelanforderungen, aber keine gleichwertig umfassende Stop-Regel. |
| 22 | Einzige derzeit mitgeteilte Ausnahme bei fehlendem Lieferschein: Krankenhaus beziehungsweise OP unverzüglich zur Nachreichung auffordern, Freigabe durch Betriebsleitung oder erfahrenen IMM-Mitarbeiter einholen und die Seriennummer vorläufig auf `01` setzen. | `fachliche Auskunft 25.09.2026`; gesonderter Ausnahmeweg; noch nicht formal standortübergreifend freigegeben | Dieser Ausnahmeweg ist in der PDF nicht beschrieben. Weitere Ausnahmefälle wurden nicht bestätigt und dürfen nicht ergänzt werden. |

## 4. Konsolidierter vorgesehener Ablauf

Der folgende Ablauf ist `fachliche Auskunft 25.09.2026`, als standortübergreifender Standard vorgesehen, aber noch nicht formal standortübergreifend freigegeben:

1. Einsatz auf Instacount 4.42 begrenzen.
2. Leihset-Anmeldung, Lieferschein, Herstellerangaben, Bewertung und Vollständigkeit prüfen. Bei fehlender Voraussetzung stoppen; nur der gesondert dokumentierte Ausnahmeweg für einen fehlenden Lieferschein darf nach Freigabe verwendet werden.
3. Anhand von `-L-`, Mandant, Fachbereich und Einsatzbereich die passende Schablone beziehungsweise den Setcode bestimmen und die nächste freie laufende Nummer ermitteln.
4. Bezeichnung aus der Leihset-Anmeldung und Lieferscheinnummer als Seriennummer übernehmen.
5. Set aus der vorhandenen Schablone erzeugen; Herstellerangaben und Bewertung werden aus der Schablone übernommen.
6. Anmeldung, Lieferschein und Bilder am Set ergänzen.
7. Setfotografie als wiederkehrende Vollständigkeitsdokumentation bei jedem Packvorgang nach Reinigung und Desinfektion und nach Scan am Packplatz durchführen.
8. Anmeldung und Lieferschein als PDF zuordnen, abschließend kontrollieren und die berechnete Anzahl Barcodeetiketten drucken.
9. Bei Rückgabe das Set von der Schablone lösen und auf `Gesperrt` setzen.

## 5. Gesonderter Ausnahmeweg: fehlender Lieferschein

Dieser Abschnitt ist ausschließlich `fachliche Auskunft 25.09.2026`, noch nicht formal standortübergreifend freigegeben.

1. Fehlt der Lieferschein, greift der reguläre Ablauf zunächst nicht; dies ist ein Stop-Punkt.
2. Krankenhaus beziehungsweise OP wird zur unverzüglichen Nachreichung aufgefordert.
3. Vor dem Weiterarbeiten ist die Ausnahmefreigabe durch die Betriebsleitung oder einen erfahrenen IMM-Mitarbeiter einzuholen.
4. Erst nach dieser Freigabe wird die Seriennummer vorläufig auf `01` gesetzt.
5. Die spätere Ersetzung von `01` und die Dokumentation der Ausnahmefreigabe sind noch zu klären.
6. Andere fehlende Voraussetzungen und weitere Ausnahmefälle sind von dieser Auskunft nicht abgedeckt.

## 6. Etikettenberechnung

Die Berechnung ist `fachliche Auskunft 25.09.2026`, noch nicht formal standortübergreifend freigegeben.

Mit

- `A = 1` für die Anmeldung,
- `C = 1`, wenn ein Container mit Containeranhänger vorhanden ist, sonst `0`,
- `S = Anzahl der Siebschalen/Kofferanhänger`

ergibt sich:

`Etiketten gesamt = A + C + S = 1 + C + S`

Beispiel mit ausschließlich synthetischen Angaben: Ein Set mit Container und drei Siebschalen benötigt nach dieser Regel `1 + 1 + 3 = 5` Etiketten. Ohne Container und mit zwei Siebschalen wären es `1 + 0 + 2 = 3` Etiketten.

## 7. Abgrenzung der Setfotografie

`fachliche Auskunft 25.09.2026` — Die Setfotografie ist kein einmaliges Stammdatenbild. Sie wird bei jedem Packvorgang nach Reinigung und Desinfektion durchgeführt, sobald das Set am Packplatz eingescannt wurde. Das jeweilige Foto dokumentiert den Vollständigkeitszustand dieses Durchlaufs. Es soll die spätere Nachvollziehbarkeit unterstützen, wenn zwischen zwei Aufbereitungsdurchläufen im Krankenhaus beziehungsweise OP ein Instrument fehlt.

Die PDF belegt historisch die Fotografie nach jedem Packvorgang und den Reklamationsbezug auf PDF-Seite 21 sowie den technischen Fotoablauf auf PDF-Seiten 39–50. Genaue Fotoanforderungen bleiben offen.

## 8. Praxisbestätigung

`fachliche Auskunft 25.09.2026` — Die praktische Leistung darf durch einen erfahrenen IMM-Mitarbeiter bestätigt werden. Alternativ darf die Leitung bestätigen, wenn sie den Ablauf selbst fachlich beherrscht.

`Plattformvorschlag` — Die Bestätigung soll mindestens bestätigende Rolle, bestätigende Person, Zeitpunkt, Standort/Geltungsbereich, Ergebnis und optional einen Kommentar dokumentieren. Die formalen Kriterien für „erfahren“ beziehungsweise „fachlich beherrscht“ sind vor Freigabe festzulegen.

## 9. Verbleibende offene Detailfragen

| Nr. | Offene Frage | Vorgeschlagene zuständige Rolle | Status |
| ---: | --- | --- | --- |
| 1 | Für welchen Suchraum gilt die laufende Nummer: je Mandant, je Kombination aus Mandant/Fachbereich/Einsatzbereich, je Schablonentyp oder anders? Wie werden Lücken und reservierte Nummern behandelt? | IMM/Stammdatenmanagement | offen; keine formale standortübergreifende Freigabe |
| 2 | Welche verbindliche Kürzelliste gilt für Mandanten, Fachbereiche und Einsatzbereiche, wer pflegt sie und wie werden Änderungen versioniert? | IMM/Stammdatenmanagement und QM | offen; keine formale standortübergreifende Freigabe |
| 3 | Wann, durch wen und mit welchem Nachweis wird die vorläufige Seriennummer `01` nach Eingang des Lieferscheins ersetzt? | IMM/Stammdatenmanagement | offen; keine formale standortübergreifende Freigabe |
| 4 | Wo und mit welchen Pflichtangaben wird die Ausnahmefreigabe bei fehlendem Lieferschein dokumentiert? | Betriebsleitung und QM | offen; keine formale standortübergreifende Freigabe |
| 5 | Welche Voraussetzungen sind unter keinen Umständen übersteuerbar, und welche Rolle darf dies verbindlich festlegen? | AEMP-Leitung/Betriebsleitung und QM | offen; keine formale standortübergreifende Freigabe |
| 6 | Gibt es weitere zulässige Ausnahmefälle? Falls ja: Auslöser, Freigaberolle, Ersatzangabe, Dokumentation und Nachbearbeitung je Fall festlegen. Bis dahin werden keine weiteren Ausnahmen angenommen. | Betriebsleitung, IMM und QM | offen; keine formale standortübergreifende Freigabe |
| 7 | Welche genauen Fotoanforderungen gelten: Anzahl, Perspektiven, erkennbare Details, Zuordnung, Qualitätskriterien, Wiederholung bei unbrauchbarem Bild, Speicherort und Aufbewahrungsdauer? | IMM, AEMP-Leitung und QM | offen; keine formale standortübergreifende Freigabe |

## 10. Offener Freigabeauftrag

Vor einer standortübergreifend verbindlichen Verwendung sind mindestens zu dokumentieren:

- formale Freigaberolle und Freigabedatum,
- verbindlicher Geltungsbereich einschließlich Standorte und Instacount-Version,
- Entscheidung zu den sieben offenen Detailfragen,
- gelenkte Fassung des freigegebenen Ablaufs.

Bis dahin lautet die Verwendungsempfehlung: **als gekennzeichneten Entwurf verwenden und zur formalen standortübergreifenden Freigabe vorlegen**.
