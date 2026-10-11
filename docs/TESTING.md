# Prüfstand 1.0.0

Geprüft am 04.10.2026.

- `node tests/data.mjs`: erfolgreich.
- `node tests/browser.cjs`: erfolgreich mit Playwright und headless Chromium 133 (Software-WebGL).
- Desktop: 1512 × 1040; Mobilansicht: 390 × 844.
- Alle acht Struktureinträge, drei Abläufe mit je vier Schritten, Elementauswahl einschließlich Cr, Cu, Pd und Og, Orbitalwechsel, Suche, lokale Notizen nach Neuladen, PNG-Download, Quellen-Dialog.
- Keine JavaScript-Fehler während dieses Durchlaufs; keine horizontale Überbreite der mobilen Gesamtseite.
- Fünf echte Screenshots erstellt und visuell geprüft.

Grenzen: Kein Test auf physischem iPhone/Android, kein Safari-/Firefox-Durchlauf und keine unabhängige chemiedidaktische Begutachtung. Dieser Prüfstand bestätigt keinen externen Hosting-Deploy.

## Update 1.1.0

- Browser- und Datenprüfungen erneut erfolgreich, zusätzlich vier Atlas-Projektreiter geprüft.
- Desktop-Protokollpfade geprüft: fremde Origins und kodierte Pfadausbrüche werden abgewiesen.
- Acht neue Galerieaufnahmen, Desktop 1800 × 1160 und Mobil 430 Pixel breit.
- Native Windows-/macOS-Prüfung und Paketierung laufen im [Release-Workflow](https://github.com/dogenc/ELEMENTA/actions/workflows/desktop.yml). Maßgeblich ist dessen Ergebnis, nicht ein lokaler Linux-Test.

## Update 1.1.1

- Atlas-Navigation um ASTRA (Atlas 05) erweitert; Browser- und Datenprüfungen erneut erfolgreich (fünf Atlas-Reiter).
