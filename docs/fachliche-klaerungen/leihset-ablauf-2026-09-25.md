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
| 5 | Das erste Segment enthält das Mandantenkürzel. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | Die PDF belegt ein Mandantensegment, aber keine aktuelle allgemeingültige Beispielkennung. Eine in der Auskunft genannte Beispielkennung wird im Repository nicht übernommen; Lernbeispiele verwenden das synthetische Kürzel `SIM` (`Plattformvorschlag`). |
| 6 | Der Fachbereich wird aus der Leihset-Anmeldung ermittelt; genannt wurden `UC` für Unfallchirurgie, `NC` für Wirbelsäulenchirurgie und `GY` für Gynäkologie. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | Die PDF zeigt Fach-/Kostenstellenkürzel, belegt aber weder die aktuelle Stammdatenprüfung noch deren Ableitung aus der Anmeldung. Die verwendbaren Kürzel werden laut ergänzender Auskunft in Instacount unter `Stammdaten → Kostenstellen` geprüft. Pflegen dürfen sie Administratoren sowie erfahrene IMM-Mitarbeiter mit den entsprechenden Instacount-Rechten. |
| 7 | Der Einsatzbereich wird mit `O` für OP, `A` für Ambulanz oder `S` für Station/Funktionsabteilung gekennzeichnet. Bei Leihsets ist `O` der Regelfall; `A` und `S` sind seltener. | `fachliche Auskunft 25.09.2026`; die Bedeutung von `O`, `A` und `S` ist historisch `quellenbelegt` | PDF-Seiten 6–9 erläutern die Bereichskennzeichen. Regelfall und Häufigkeiten stammen allein aus der Auskunft. |
| 8 | Für das neue Set wird die nächste freie laufende Nummer ermittelt; im synthetischen Beispiel folgt nach `SIM-UC-O-L-197` der Code `SIM-UC-O-L-198`. | Regel: `fachliche Auskunft 25.09.2026`, noch nicht formal standortübergreifend freigegeben; Beispiel: `Plattformvorschlag` | Die PDF nennt eine fortlaufende Codierung, PDF-Seiten 1, 6–9 und 17. Die ergänzende Auskunft konkretisiert dies für ein erstmals am Standort aufzubereitendes Leihset als nächste laufende Nummer innerhalb des passenden Setcode-Bereichs. |
| 9 | Die Bezeichnung wird aus der Leihset-Anmeldung übernommen. | `fachliche Auskunft 25.09.2026`; noch nicht formal standortübergreifend freigegeben | PDF-Seite 11 verweist auf eine Vorgabe der anfordernden Stelle; PDF-Seite 22 nennt zusätzlich Siebtitel und Verleiher-Artikelnummer. Für diesen Entwurf gilt die mitgeteilte Übernahme aus der Anmeldung. |
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

## 4. Ergänzende fachliche Auskünfte vom 25.09.2026

Die folgenden Konkretisierungen sind `fachliche Auskunft 25.09.2026`, als standortübergreifender Standard vorgesehen, aber noch nicht formal standortübergreifend freigegeben:

| Thema | Ergänzter Arbeitsstand | Abgrenzung zur PDF |
| --- | --- | --- |
| Laufende Nummer | Für ein neu eintreffendes Leihset, das bisher noch nicht am Standort aufbereitet wurde, wird die nächste laufende Nummer innerhalb des passenden Setcode-Bereichs verwendet. Fachbereich und Einsatzbereich ergeben sich aus der Anmeldung und dem vorgesehenen Einsatz. | Die PDF belegt nur die fortlaufende Codierung, unter anderem auf PDF-Seiten 1, 6–9 und 17. Die konkrete Bereichs- und Erstaufnahme-Regel stammt aus der Auskunft. |
| Kürzelprüfung und -pflege | Die verwendbaren Kostenstellen- beziehungsweise Fachbereichskürzel sind vor Bildung des Setcodes in Instacount unter `Stammdaten → Kostenstellen` zu prüfen. Administratoren sowie erfahrene IMM-Mitarbeiter mit den entsprechenden Instacount-Rechten dürfen diese Kürzel pflegen. | Die PDF zeigt Kostenstellen und Stammdaten, belegt aber diesen aktuellen Prüfpunkt, die Instacount-4.42-Zuordnung und die Pflegeberechtigung nicht vollständig. Prüf- und Pflegeregel stammen aus der Auskunft. |
| Nachgereichter Lieferschein | Nach Eingang des Lieferscheins ersetzt der zuständige IMM-Mitarbeiter die vorläufige Seriennummer `01` unmittelbar durch die tatsächliche Lieferscheinnummer. Die auf der Anmeldung dokumentierte und gegengezeichnete Ausnahme bleibt dabei nachvollziehbar. | Die PDF belegt die Lieferscheinnummer als reguläre Seriennummer auf PDF-Seiten 22, 25 und 26, nicht aber den Ausnahme- und Korrekturweg. Offen bleibt nur der technische Nachweis beziehungsweise die Änderungshistorie in Instacount. |
| Dokumentation der Ausnahme | Die Ausnahme wird nachträglich auf der Leihset-Anmeldung dokumentiert und gegengezeichnet. | In der PDF nicht beschrieben. |
| Nicht übersteuerbare Voraussetzungen | Leihset-Anmeldung, Herstellerangaben und Bewertung der Herstellerangaben müssen für das konkrete Leihset vorhanden sowie gültig beziehungsweise freigegeben sein. Fehlt eine dieser Voraussetzungen oder passt sie nicht zum konkreten Leihset, darf keine Aufbereitung erfolgen. Betriebsleitung oder erfahrene IMM-Mitarbeiter dürfen dies nicht übersteuern. | Die PDF enthält einzelne Anforderungen, aber keine gleichwertige absolute Stop- und Nichtübersteuerungsregel. |
| Weitere Ausnahmefälle | Derzeit sind keine weiteren bestätigten Ausnahmefälle bekannt. Der dokumentierte Ausnahmeweg betrifft ausschließlich den vorübergehend fehlenden Lieferschein. | In der PDF ist dieser Ausnahmeweg insgesamt nicht beschrieben. |
| Fotografie | Bei einem Leihset mit mehreren Siebschalen wird jede einzelne Siebschale separat von oben fotografiert. Vorzugsweise liegt ein blaues Vlies unter der jeweiligen Siebschale. | PDF-Seiten 39–50 zeigen einen Fotoablauf; Einzelaufnahme, Perspektive und Hintergrundempfehlung stammen aus der Auskunft. |

Damit sind die zuvor offenen Fragen zur Pflegeberechtigung für Kürzel, zur ausführenden Rolle bei der Ersetzung von `01` und zur Einzelaufnahme mehrerer Siebschalen für diesen Entwurf fachlich beantwortet. Sie bleiben Teil der `fachlichen Auskunft 25.09.2026` und werden ohne formale standortübergreifende Freigabe nicht als `fachlich bestätigt` gekennzeichnet.

## 5. Konsolidierter vorgesehener Ablauf

Der folgende Ablauf ist `fachliche Auskunft 25.09.2026`, als standortübergreifender Standard vorgesehen, aber noch nicht formal standortübergreifend freigegeben:

1. Einsatz auf Instacount 4.42 begrenzen.
2. Leihset-Anmeldung, Herstellerangaben und Bewertung auf Vorhandensein, Gültigkeit beziehungsweise Freigabe für das konkrete Leihset prüfen. Bei einem Mangel stoppen; eine Übersteuerung ist nicht zulässig und eine Aufbereitung darf nicht erfolgen.
3. Lieferschein und Vollständigkeit prüfen. Fehlt der Lieferschein vorübergehend, darf ausschließlich der gesonderte Ausnahmeweg nach Abschnitt 6 verwendet werden. Für andere fehlende Voraussetzungen ist kein weiterer Ausnahmeweg bekannt.
4. Fachbereich und Einsatzbereich aus Anmeldung und vorgesehenem Einsatz bestimmen. Die zugehörigen Kürzel in Instacount unter `Stammdaten → Kostenstellen` prüfen. Eine erforderliche Pflege erfolgt ausschließlich durch Administratoren oder erfahrene IMM-Mitarbeiter mit den entsprechenden Instacount-Rechten.
5. Für ein erstmals am Standort aufzubereitendes Leihset anhand von `-L-`, Mandant, Fachbereich und Einsatzbereich den passenden Setcode-Bereich bestimmen und dort die nächste laufende Nummer verwenden.
6. Bezeichnung aus der Leihset-Anmeldung und im regulären Weg die Lieferscheinnummer als Seriennummer übernehmen.
7. Set aus der vorhandenen Schablone erzeugen; Herstellerangaben und Bewertung werden aus der Schablone übernommen.
8. Anmeldung, Lieferschein und Bilder am Set ergänzen.
9. Setfotografie bei jedem Packvorgang nach Reinigung und Desinfektion und nach Scan am Packplatz durchführen. Jede Siebschale einzeln von oben und vorzugsweise auf blauem Vlies fotografieren.
10. Anmeldung und Lieferschein als PDF zuordnen, abschließend kontrollieren und die berechnete Anzahl Barcodeetiketten drucken.
11. Bei Rückgabe das Set von der Schablone lösen und auf `Gesperrt` setzen.

## 6. Gesonderter Ausnahmeweg: fehlender Lieferschein

Dieser Abschnitt ist ausschließlich `fachliche Auskunft 25.09.2026`, noch nicht formal standortübergreifend freigegeben.

1. Der Ausnahmeweg ist nur zulässig, wenn ausschließlich der Lieferschein vorübergehend fehlt. Leihset-Anmeldung, Herstellerangaben und Bewertung müssen für das konkrete Leihset vorhanden sowie gültig beziehungsweise freigegeben sein.
2. Fehlt der Lieferschein, wird der reguläre Weg gestoppt und Krankenhaus beziehungsweise OP zur unverzüglichen Nachreichung aufgefordert.
3. Vor dem Weiterarbeiten ist die Ausnahmefreigabe durch die Betriebsleitung oder einen erfahrenen IMM-Mitarbeiter einzuholen.
4. Erst nach dieser Freigabe wird die Seriennummer vorläufig auf `01` gesetzt.
5. Die Ausnahme wird nachträglich auf der Leihset-Anmeldung dokumentiert und gegengezeichnet.
6. Nach Eingang des Lieferscheins ersetzt der zuständige IMM-Mitarbeiter `01` unmittelbar durch die tatsächliche Lieferscheinnummer. Die dokumentierte und gegengezeichnete Ausnahme muss auch nach der Korrektur nachvollziehbar bleiben. Offen bleibt, wie die Änderung in Instacount technisch beziehungsweise über eine Änderungshistorie nachgewiesen wird.
7. Fehlen Anmeldung, Herstellerangaben oder Bewertung, darf keine Aufbereitung erfolgen. Diese Stop-Punkte können weder durch die Betriebsleitung noch durch erfahrene IMM-Mitarbeiter freigegeben werden.
8. Weitere bestätigte Ausnahmefälle sind derzeit nicht bekannt und werden nicht angenommen.

## 7. Etikettenberechnung

Die Berechnung ist `fachliche Auskunft 25.09.2026`, noch nicht formal standortübergreifend freigegeben.

Mit

- `A = 1` für die Anmeldung,
- `C = 1`, wenn ein Container mit Containeranhänger vorhanden ist, sonst `0`,
- `S = Anzahl der Siebschalen/Kofferanhänger`

ergibt sich:

`Etiketten gesamt = A + C + S = 1 + C + S`

Beispiel mit ausschließlich synthetischen Angaben: Ein Set mit Container und drei Siebschalen benötigt nach dieser Regel `1 + 1 + 3 = 5` Etiketten. Ohne Container und mit zwei Siebschalen wären es `1 + 0 + 2 = 3` Etiketten.

## 8. Abgrenzung der Setfotografie

`fachliche Auskunft 25.09.2026` — Die Setfotografie ist kein einmaliges Stammdatenbild. Sie wird bei jedem Packvorgang nach Reinigung und Desinfektion durchgeführt, sobald das Set am Packplatz eingescannt wurde. Bei einem Leihset mit mehreren Siebschalen wird jede einzelne Siebschale separat von oben fotografiert; vorzugsweise wird ein blaues Vlies als Hintergrund untergelegt. Die Einzelaufnahmen dokumentieren den Vollständigkeitszustand dieses Durchlaufs. Sie sollen die spätere Nachvollziehbarkeit unterstützen, wenn zwischen zwei Aufbereitungsdurchläufen im Krankenhaus beziehungsweise OP ein Instrument fehlt.

Die PDF belegt historisch die Fotografie nach jedem Packvorgang und den Reklamationsbezug auf PDF-Seite 21 sowie den technischen Fotoablauf auf PDF-Seiten 39–50. Offen bleiben zusätzliche verbindliche Vorgaben zu Bildqualität, Dateiformat und Aufbewahrungsdauer.

## 9. Praxisbestätigung

`fachliche Auskunft 25.09.2026` — Die praktische Leistung darf durch einen erfahrenen IMM-Mitarbeiter bestätigt werden. Alternativ darf die Leitung bestätigen, wenn sie den Ablauf selbst fachlich beherrscht.

`Plattformvorschlag` — Die Bestätigung soll mindestens bestätigende Rolle, bestätigende Person, Zeitpunkt, Standort/Geltungsbereich, Ergebnis und optional einen Kommentar dokumentieren.

## 10. Verbleibende offene Detailfragen

| Nr. | Offene Frage | Vorgeschlagene zuständige Rolle | Status |
| ---: | --- | --- | --- |
| 1 | Wie wird die Änderung von `01` zur Lieferscheinnummer innerhalb von Instacount technisch beziehungsweise über eine Änderungshistorie nachvollzogen? | IMM/Stammdatenmanagement und Instacount-Administration | offen; keine formale standortübergreifende Freigabe |
| 2 | Welche verbindlichen Vorgaben gelten zusätzlich für Bildqualität, Dateiformat und Aufbewahrungsdauer? | IMM, AEMP-Leitung und QM | offen; keine formale standortübergreifende Freigabe |
| 3 | Wer erteilt die formale standortübergreifende Freigabe für den gesamten Ablauf? | QM und zuständige standortübergreifende Leitung | offen; Freigaberolle noch nicht dokumentiert |

## 11. Offener Freigabeauftrag

Vor einer standortübergreifend verbindlichen Verwendung sind mindestens zu dokumentieren:

- formale Freigaberolle und Freigabedatum,
- verbindlicher Geltungsbereich einschließlich Standorte und Instacount-Version,
- Entscheidung zu den drei offenen Detailfragen,
- gelenkte Fassung des freigegebenen Ablaufs.

Bis dahin lautet die Verwendungsempfehlung: **als gekennzeichneten Entwurf verwenden und zur formalen standortübergreifenden Freigabe vorlegen**.
