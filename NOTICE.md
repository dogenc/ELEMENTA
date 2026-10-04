# Quellen und Modellgrenzen

## OpenStax: gezielt der CC-BY-Quellstand

Paul Flowers, Klaus Theopold, Richard Langley und William R. Robinson: **Chemistry 2e**, OpenStax / Rice University, 2019.

ELEMENTA verwendet eigene deutsche Kurzfassungen und didaktische Bearbeitungen nach dem **historischen Quellstand `9928441ef0badc3ff024c6a1fe2842c0048ea858`** des offiziellen Repositories. Dessen [Collection-Metadaten](https://github.com/openstax/osbooks-chemistry-bundle/blob/9928441ef0badc3ff024c6a1fe2842c0048ea858/collections/chemistry-2e.collection.xml) weisen ausdrücklich **Creative Commons Attribution 4.0** aus. Eine unveränderte Kopie dieses Nachweises liegt unter [docs/openstax-collection-license.xml](docs/openstax-collection-license.xml).

Die heutige OpenStax-Website weist eine andere Lizenz aus. Die Lizenzangabe dieses Projekts bezieht sich daher ausdrücklich auf den verlinkten historischen Stand, nicht pauschal auf aktuelle Website-Inhalte.

| Thema | Kapitel | Modul im verlinkten Quellstand |
|---|---|---|
| Quantenmodell, Orbitale | 6.3 | `modules/m68733/index.cnxml` |
| Elektronenkonfiguration | 6.4 | `modules/m68734/index.cnxml` |
| Ionenbindung | 7.1 | `modules/m68737/index.cnxml` |
| Kovalente Bindung | 7.2 | `modules/m68738/index.cnxml` |
| Lösungsvorgänge | 11.1 | `modules/m68778/index.cnxml` |

Original frei zugänglich: https://openstax.org/details/books/chemistry-2e

Die deutschen Lerntexte stehen ebenfalls unter [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Änderungen: gekürzt, eigenständig deutsch formuliert, für interaktive Schritte gegliedert und um Modellhinweise ergänzt. Keine Originalabbildungen, Logos oder Buchcover übernommen; keine Empfehlung oder Zugehörigkeit zu OpenStax behauptet. Die Hinweise auf PubChem-Moleküle wurden separat für ELEMENTA formuliert.

## PubChem / NCBI

Abrufdatum: **2026-10-04**. Datenaufbereitung: `scripts/prepare_data.py`.

- Elementdaten: https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON
- Moleküle: PUG REST `compound/cid/{CID}/record/JSON?record_type=3d`
- Kochsalz: `record_type=2d`, ausschließlich Stoffidentität; das sichtbare Gitter ist separat erzeugt.
- Rohantworten und komprimierte App-Datensätze liegen zusammen unter `dist/data/`.
- Verarbeitung: deutsche Elementnamen, Positionen im Periodensystem, expandierte Elektronenkonfigurationen und Schalenbelegung; Molekülkoordinaten und Bindungsordnungen übernommen, Darstellung zur Laufzeit zentriert.

| Stoff | CID | Darstellung |
|---|---:|---|
| Wasser | 962 | 3D-Konformer |
| Natriumchlorid | 5234 | Eigenes Ionengitter; CID für Stoffidentität |
| D-Glucose | 5793 | 3D-Konformer |
| Koffein | 2519 | 3D-Konformer |
| L-Ascorbinsäure | 54670067 | 3D-Konformer |
| Glycin | 750 | 3D-Konformer |
| L-Alanin | 5950 | 3D-Konformer |
| L-Cystein | 5862 | 3D-Konformer |

PubChem enthält Daten verschiedener Zulieferer. Es wird keine pauschale CC0-Lizenz für sämtliche PubChem-Inhalte behauptet. Verwendet werden chemische Faktendaten; keine Beschreibungsartikel oder Abbildungen aus Drittquellen. Hinweise: https://pubchem.ncbi.nlm.nih.gov/docs/about

## Three.js

Three.js **0.180.0**, einschließlich OrbitControls, MIT-Lizenz. Unveränderte Bibliotheksdateien, einschließlich lokaler `three.core.js`. Lizenz: `dist/vendor/LICENSE`. Herkunft: https://github.com/mrdoob/three.js/tree/r180

## Wissenschaftliche Grenzen

- Atomkerne sind Symbole. Die dargestellte Kugelanzahl ist keine Nukleonenzahl eines Isotops.
- Schalenbahnen sind eine Merkhilfe, keine physikalischen Elektronenflugbahnen. Ihre Größen sind nicht maßstabsgetreu.
- Die Orbitalwolke sampelt wasserstoffartige radiale Funktionen (assoziierte Laguerre-Polynome) und reelle Kugelflächenfunktionen. |ψ|² bestimmt die Verteilung; die Farbe das Vorzeichen von ψ. Größen werden zur Ansicht normiert. Bei Mehrelektronenatomen ist dies keine selbstkonsistente Elektronendichte. Ein ausgewähltes Orbital ist nicht die gesamte Unterschale.
- Reelle f-Orbitalformen sind Linearkombinationen der komplexen ±m-Basis; die UI benennt die verwendete Formbasis.
- Die PubChem-Koordinaten sind berechnete Konformere, keine experimentelle Momentaufnahme. Protonierungszustände und Konformationen können in Lösung anders sein.
- Die Hydrathüllen zeigen drei Wassermoleküle pro Ion zur Übersicht, keine quantitative Koordinationszahl. Wasserwinkel: 104,5°.
- Ionen- und Elektronenpaarbindung sowie das Lösen von Salz sind schematische Animationen, keine quantenchemische oder thermodynamische Simulation.

Fachtexte und Programm sind KI-unterstützt erstellt. Eine unabhängige fachredaktionelle Abnahme steht aus.
