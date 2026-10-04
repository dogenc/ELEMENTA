"""Serve ELEMENTA locally without dependencies or a build step."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
import webbrowser

LOGO = """
███████╗ ██╗      ███████╗ ███╗   ███╗ ███████╗ ███╗   ██╗ ████████╗  █████╗
██╔════╝ ██║      ██╔════╝ ████╗ ████║ ██╔════╝ ████╗  ██║ ╚══██╔══╝ ██╔══██╗
█████╗   ██║      █████╗   ██╔████╔██║ █████╗   ██╔██╗ ██║    ██║    ███████║
██╔══╝   ██║      ██╔══╝   ██║╚██╔╝██║ ██╔══╝   ██║╚██╗██║    ██║    ██╔══██║
███████╗ ███████╗ ███████╗ ██║ ╚═╝ ██║ ███████╗ ██║ ╚████║    ██║    ██║  ██║
╚══════╝ ╚══════╝ ╚══════╝ ╚═╝     ╚═╝ ╚══════╝ ╚═╝  ╚═══╝    ╚═╝    ╚═╝  ╚═╝
            C H E M I E A T L A S  ·  3 D  ·  O P E N  S O U R C E
"""

URL = 'http://127.0.0.1:8768'

def main():
    root = Path(__file__).resolve().parent / 'dist'
    if not (root / 'index.html').is_file():
        raise SystemExit('Bitte zuerst die gesamte ZIP-Datei entpacken.')
    try:
        server = ThreadingHTTPServer(('127.0.0.1', 8768), partial(SimpleHTTPRequestHandler, directory=str(root)))
    except OSError:
        raise SystemExit('Port 8768 ist belegt. Beende einen bereits laufenden ELEMENTA-Start und versuche es erneut.')
    try:
        print(LOGO)
    except UnicodeEncodeError:
        print('ELEMENTA · Chemieatlas in 3D')
    print(f'ELEMENTA: {URL} — Beenden mit Strg+C')
    print('Nur auf diesem Computer erreichbar.')
    webbrowser.open(URL)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()

if __name__ == '__main__':
    main()
